const fs = require("fs");
const http = require("http");
const path = require("path");

const port = Number(process.env.PORT || 3001);
const dataDir = path.join(__dirname, "data");
const statsFile = path.join(dataDir, "global-stats.json");
const allowedGameModes = ["tower", "blackjack", "slots", "roulette", "wheel", "lootbox"];

function createDefaultStats() {
  return {
    totals: {
      uniquePlayers: 0,
      totalSessions: 0,
      totalClicks: 0,
      totalGamesPlayed: 0,
      totalLootboxesOpened: 0,
      totalCookiesGenerated: 0
    },
    gamesByMode: Object.fromEntries(allowedGameModes.map((mode) => [mode, 0])),
    knownPlayers: {},
    lastUpdatedAt: new Date().toISOString()
  };
}

function ensureStatsFile() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(statsFile)) {
    fs.writeFileSync(statsFile, JSON.stringify(createDefaultStats(), null, 2));
  }
}

function readStats() {
  ensureStatsFile();
  try {
    const raw = fs.readFileSync(statsFile, "utf8");
    const parsed = JSON.parse(raw);
    return {
      ...createDefaultStats(),
      ...parsed,
      totals: {
        ...createDefaultStats().totals,
        ...(parsed.totals || {})
      },
      gamesByMode: {
        ...createDefaultStats().gamesByMode,
        ...(parsed.gamesByMode || {})
      },
      knownPlayers: parsed.knownPlayers && typeof parsed.knownPlayers === "object" ? parsed.knownPlayers : {}
    };
  } catch (error) {
    return createDefaultStats();
  }
}

function writeStats(stats) {
  stats.lastUpdatedAt = new Date().toISOString();
  ensureStatsFile();
  fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
}

function publicStats(stats) {
  return {
    ...stats.totals,
    gamesByMode: stats.gamesByMode,
    lastUpdatedAt: stats.lastUpdatedAt
  };
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 32 * 1024) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sanitizePositiveInteger(value, max) {
  if (!Number.isFinite(value)) {
    return 0;
  }
  const normalized = Math.max(0, Math.floor(value));
  return Math.min(normalized, max);
}

function sanitizePlayerId(value) {
  if (typeof value !== "string") {
    return "";
  }
  const trimmed = value.trim().slice(0, 80);
  if (!/^[a-zA-Z0-9_-]+$/.test(trimmed)) {
    return "";
  }
  return trimmed;
}

function applyEventDelta(stats, delta) {
  const clicks = sanitizePositiveInteger(delta.clicks, 10_000);
  const gamesPlayed = sanitizePositiveInteger(delta.gamesPlayed, 500);
  const lootboxesOpened = sanitizePositiveInteger(delta.lootboxesOpened, 500);
  const cookiesGenerated = sanitizePositiveInteger(delta.cookiesGenerated, 10_000_000_000);
  const byMode = delta.gamesByMode && typeof delta.gamesByMode === "object" ? delta.gamesByMode : {};

  stats.totals.totalClicks += clicks;
  stats.totals.totalGamesPlayed += gamesPlayed;
  stats.totals.totalLootboxesOpened += lootboxesOpened;
  stats.totals.totalCookiesGenerated += cookiesGenerated;

  allowedGameModes.forEach((mode) => {
    const increment = sanitizePositiveInteger(byMode[mode], 500);
    if (increment > 0) {
      stats.gamesByMode[mode] += increment;
    }
  });
}

async function handleRegister(req, res) {
  try {
    const body = await readJsonBody(req);
    const playerId = sanitizePlayerId(body.playerId);
    if (!playerId) {
      sendJson(res, 400, { ok: false, error: "Invalid playerId" });
      return;
    }

    const stats = readStats();
    const now = new Date().toISOString();
    if (!stats.knownPlayers[playerId]) {
      stats.knownPlayers[playerId] = {
        firstSeenAt: now,
        lastSeenAt: now
      };
      stats.totals.uniquePlayers += 1;
    } else {
      stats.knownPlayers[playerId].lastSeenAt = now;
    }
    stats.totals.totalSessions += 1;
    writeStats(stats);

    sendJson(res, 200, {
      ok: true,
      stats: publicStats(stats)
    });
  } catch (error) {
    sendJson(res, 400, { ok: false, error: error.message });
  }
}

async function handleEvents(req, res) {
  try {
    const body = await readJsonBody(req);
    const playerId = sanitizePlayerId(body.playerId);
    if (!playerId) {
      sendJson(res, 400, { ok: false, error: "Invalid playerId" });
      return;
    }

    const stats = readStats();
    if (!stats.knownPlayers[playerId]) {
      const now = new Date().toISOString();
      stats.knownPlayers[playerId] = {
        firstSeenAt: now,
        lastSeenAt: now
      };
      stats.totals.uniquePlayers += 1;
      stats.totals.totalSessions += 1;
    } else {
      stats.knownPlayers[playerId].lastSeenAt = new Date().toISOString();
    }

    applyEventDelta(stats, body.delta || {});
    writeStats(stats);

    sendJson(res, 200, {
      ok: true,
      stats: publicStats(stats)
    });
  } catch (error) {
    sendJson(res, 400, { ok: false, error: error.message });
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      service: "hethey-backend",
      mode: "global-stats"
    });
    return;
  }

  if (req.method === "GET" && req.url === "/api/config") {
    sendJson(res, 200, {
      ok: true,
      apiMode: "global-stats",
      endpoints: {
        health: "/api/health",
        state: "/api/state/:slot",
        globalStats: "/api/global-stats",
        registerPlayer: "/api/global-stats/register",
        statsEvents: "/api/global-stats/events"
      }
    });
    return;
  }

  if (req.method === "GET" && req.url === "/api/global-stats") {
    const stats = readStats();
    sendJson(res, 200, {
      ok: true,
      stats: publicStats(stats)
    });
    return;
  }

  if (req.method === "POST" && req.url === "/api/global-stats/register") {
    await handleRegister(req, res);
    return;
  }

  if (req.method === "POST" && req.url === "/api/global-stats/events") {
    await handleEvents(req, res);
    return;
  }

  sendJson(res, 404, {
    ok: false,
    error: "Not found"
  });
});

ensureStatsFile();

server.listen(port, () => {
  console.log(`HETHEY backend listening on http://localhost:${port}`);
});
