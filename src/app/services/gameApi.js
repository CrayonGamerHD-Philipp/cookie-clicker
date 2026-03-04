import { appConfig } from "../config/appConfig.js";
import { createBrowserStorage } from "./browserStorage.js";

export function createGameApi(config = appConfig) {
  const storage = createBrowserStorage();

  async function requestJson(path, options = {}) {
    if (typeof fetch !== "function") {
      return { ok: false, error: "Fetch unavailable" };
    }
    try {
      const response = await fetch(path, {
        headers: {
          "Content-Type": "application/json"
        },
        ...options
      });
      const data = await response.json();
      return {
        ok: response.ok,
        ...data
      };
    } catch (error) {
      return {
        ok: false,
        error: error instanceof Error ? error.message : "Request failed"
      };
    }
  }

  return {
    getStorageItem(key) {
      return storage.getItem(key);
    },
    setStorageItem(key, value) {
      return storage.setItem(key, value);
    },
    getOrCreatePlayerId() {
      const existing = storage.getItem(config.storageKeys.playerId);
      if (existing) {
        return existing;
      }
      const created = `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
      storage.setItem(config.storageKeys.playerId, created);
      return created;
    },
    getReleaseLink(version) {
      if (version && version.startsWith("v")) {
        return `${config.releaseBaseUrl}/tag/${version}`;
      }
      return config.releaseBaseUrl;
    },
    getStateEndpoint(slot = "default") {
      return `${config.api.baseUrl}/state/${slot}`;
    },
    supportsRemote() {
      return config.api.mode === "remote";
    },
    async syncState(snapshot, slot = "default") {
      if (!this.supportsRemote()) {
        return { ok: true, mode: "local", snapshot, slot };
      }
      return {
        ok: false,
        mode: "remote-not-wired",
        endpoint: this.getStateEndpoint(slot),
        snapshot
      };
    },
    async fetchGlobalStats() {
      return requestJson(`${config.api.baseUrl}/global-stats`, {
        method: "GET"
      });
    },
    async registerGlobalPlayer(playerId) {
      return requestJson(`${config.api.baseUrl}/global-stats/register`, {
        method: "POST",
        body: JSON.stringify({ playerId })
      });
    },
    async postGlobalStatsDelta(playerId, delta) {
      return requestJson(`${config.api.baseUrl}/global-stats/events`, {
        method: "POST",
        body: JSON.stringify({ playerId, delta })
      });
    }
  };
}
