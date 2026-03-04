const globalConfig = typeof window !== "undefined" ? window.__HETHEY_CONFIG__ || {} : {};

export const appConfig = {
  storageKeys: {
    main: "hethey-cookie-clicker-v1",
    dev: "hethey-cookie-clicker-dev-v1",
    devMode: "hethey-cookie-clicker-dev-mode",
    playerId: "hethey-cookie-clicker-player-id"
  },
  releaseBaseUrl: "https://github.com/CrayonGamerHD-Philipp/cookie-clicker/releases",
  api: {
    mode: globalConfig.apiMode || "local",
    baseUrl: globalConfig.apiBaseUrl || "/api"
  }
};
