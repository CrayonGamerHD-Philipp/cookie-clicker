import { mkdirSync } from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const dataDir = path.resolve("backend", "data");
const dataFile = path.join(dataDir, "game-data.sqlite");
const allowedModes = ["tower", "blackjack", "slots", "roulette", "wheel", "lootbox"] as const;

export type GameMode = (typeof allowedModes)[number];
export type LeaderboardRange = "daily" | "weekly" | "monthly" | "alltime";

export type GlobalStats = {
  uniquePlayers: number;
  totalSessions: number;
  totalClicks: number;
  totalGamesPlayed: number;
  totalLootboxesOpened: number;
  totalCookiesGenerated: number;
  gamesByMode: Record<GameMode, number>;
  lastUpdatedAt: string;
};

type PlayerRecord = {
  bestLevel: number;
  lastLevel: number;
  bestScore: number;
  lastScore: number;
  totalClicks: number;
  totalGames: number;
  firstSeenAt: string;
  lastSeenAt: string;
};

type PersistedData = {
  globalStats: GlobalStats;
  players: Record<string, PlayerRecord>;
};

export type LeaderboardEntry = {
  playerName: string;
  bestLevel: number;
  lastLevel: number;
  bestScore: number;
  lastScore: number;
  totalClicks: number;
  totalGames: number;
  updatedAt: string;
};

let db: Database.Database | null = null;

function nowIso() {
  return new Date().toISOString();
}

function getRangeStart(range: LeaderboardRange): string | null {
  const now = new Date();
  if (range === "alltime") return null;

  if (range === "daily") {
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
  }

  if (range === "weekly") {
    const d = new Date(now);
    const dayIndex = (d.getDay() + 6) % 7; // Monday = 0
    d.setDate(d.getDate() - dayIndex);
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
  }

  const d = new Date(now);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function getDb() {
  if (db) return db;

  mkdirSync(dataDir, { recursive: true });
  db = new Database(dataFile);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      best_level INTEGER NOT NULL DEFAULT 1,
      last_level INTEGER NOT NULL DEFAULT 1,
      best_score INTEGER NOT NULL DEFAULT 0,
      last_score INTEGER NOT NULL DEFAULT 0,
      total_clicks INTEGER NOT NULL DEFAULT 0,
      total_games INTEGER NOT NULL DEFAULT 0,
      first_seen_at TEXT NOT NULL,
      last_seen_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS global_stats (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      unique_players INTEGER NOT NULL DEFAULT 0,
      total_sessions INTEGER NOT NULL DEFAULT 0,
      total_clicks INTEGER NOT NULL DEFAULT 0,
      total_games_played INTEGER NOT NULL DEFAULT 0,
      total_lootboxes_opened INTEGER NOT NULL DEFAULT 0,
      total_cookies_generated INTEGER NOT NULL DEFAULT 0,
      last_updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS global_mode_stats (
      mode TEXT PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS score_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player_id INTEGER NOT NULL,
      level INTEGER NOT NULL DEFAULT 1,
      score INTEGER NOT NULL,
      total_clicks INTEGER NOT NULL,
      total_games INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_score_submissions_created_at ON score_submissions(created_at);
    CREATE INDEX IF NOT EXISTS idx_score_submissions_player_created ON score_submissions(player_id, created_at DESC);
  `);

  db.prepare(`
    INSERT OR IGNORE INTO global_stats (
      id, unique_players, total_sessions, total_clicks, total_games_played, total_lootboxes_opened, total_cookies_generated, last_updated_at
    ) VALUES (1, 0, 0, 0, 0, 0, 0, ?)
  `).run(nowIso());

  const modeStmt = db.prepare("INSERT OR IGNORE INTO global_mode_stats(mode, count) VALUES (?, 0)");
  for (const mode of allowedModes) {
    modeStmt.run(mode);
  }

  const ensureColumn = (table: "players" | "score_submissions", column: string, definition: string) => {
    const columns = db!.prepare(`PRAGMA table_info(${table})`).all() as Array<{ name: string }>;
    if (!columns.some((entry) => entry.name === column)) {
      db!.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
    }
  };
  ensureColumn("players", "best_level", "INTEGER NOT NULL DEFAULT 1");
  ensureColumn("players", "last_level", "INTEGER NOT NULL DEFAULT 1");
  ensureColumn("score_submissions", "level", "INTEGER NOT NULL DEFAULT 1");

  return db;
}

function touchGlobalStats() {
  getDb().prepare("UPDATE global_stats SET last_updated_at = ? WHERE id = 1").run(nowIso());
}

function refreshUniquePlayersCount() {
  const database = getDb();
  const row = database.prepare("SELECT COUNT(*) AS count FROM players").get() as { count: number };
  database.prepare("UPDATE global_stats SET unique_players = ? WHERE id = 1").run(Number(row.count) || 0);
}

export function normalizePlayerName(name: unknown): string {
  if (typeof name !== "string") return "";
  const value = name.trim().slice(0, 24);
  if (!/^[\p{L}\p{N} _.-]+$/u.test(value)) {
    return "";
  }
  return value;
}

export function sanitizePositiveInt(value: unknown, max = 1_000_000): number {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(Math.floor(value), max));
}

export function modeList() {
  return [...allowedModes];
}

export async function getGlobalStats(): Promise<GlobalStats> {
  const database = getDb();
  const stats = database.prepare(`
    SELECT
      unique_players AS uniquePlayers,
      total_sessions AS totalSessions,
      total_clicks AS totalClicks,
      total_games_played AS totalGamesPlayed,
      total_lootboxes_opened AS totalLootboxesOpened,
      total_cookies_generated AS totalCookiesGenerated,
      last_updated_at AS lastUpdatedAt
    FROM global_stats
    WHERE id = 1
  `).get() as Omit<GlobalStats, "gamesByMode">;
  const playerTotals = database.prepare(`
    SELECT
      COALESCE(SUM(total_clicks), 0) AS totalClicks,
      COALESCE(SUM(total_games), 0) AS totalGames
    FROM players
  `).get() as { totalClicks: number; totalGames: number };

  const modeRows = database.prepare("SELECT mode, count FROM global_mode_stats").all() as Array<{ mode: GameMode; count: number }>;
  const gamesByMode = Object.fromEntries(allowedModes.map((mode) => [mode, 0])) as Record<GameMode, number>;
  for (const row of modeRows) {
    if (row.mode in gamesByMode) {
      gamesByMode[row.mode] = Number(row.count) || 0;
    }
  }

  return {
    uniquePlayers: Number(stats?.uniquePlayers) || 0,
    totalSessions: Number(stats?.totalSessions) || 0,
    totalClicks: Math.max(Number(stats?.totalClicks) || 0, Number(playerTotals?.totalClicks) || 0),
    totalGamesPlayed: Math.max(Number(stats?.totalGamesPlayed) || 0, Number(playerTotals?.totalGames) || 0),
    totalLootboxesOpened: Number(stats?.totalLootboxesOpened) || 0,
    totalCookiesGenerated: Number(stats?.totalCookiesGenerated) || 0,
    gamesByMode,
    lastUpdatedAt: stats?.lastUpdatedAt || nowIso()
  };
}

export async function registerPlayer(playerName: string): Promise<{ ok: boolean; created: boolean }> {
  const database = getDb();
  const now = nowIso();

  const existing = database.prepare("SELECT id FROM players WHERE name = ?").get(playerName) as { id: number } | undefined;
  let created = false;
  if (!existing) {
    database.prepare(`
      INSERT INTO players (name, best_level, last_level, best_score, last_score, total_clicks, total_games, first_seen_at, last_seen_at)
      VALUES (?, 1, 1, 0, 0, 0, 0, ?, ?)
    `).run(playerName, now, now);
    created = true;
    refreshUniquePlayersCount();
  } else {
    database.prepare("UPDATE players SET last_seen_at = ? WHERE id = ?").run(now, existing.id);
  }

  database.prepare("UPDATE global_stats SET total_sessions = total_sessions + 1, last_updated_at = ? WHERE id = 1").run(now);
  return { ok: true, created };
}

export async function renamePlayerName(
  oldName: string,
  newName: string
): Promise<{ ok: boolean; renamed: boolean; conflict?: boolean }> {
  const database = getDb();
  const source = database.prepare("SELECT id FROM players WHERE name = ?").get(oldName) as { id: number } | undefined;
  if (!source) {
    return { ok: true, renamed: false };
  }

  const target = database.prepare("SELECT id FROM players WHERE name = ?").get(newName) as { id: number } | undefined;
  if (target) {
    return { ok: false, renamed: false, conflict: true };
  }

  database.prepare("UPDATE players SET name = ?, last_seen_at = ? WHERE id = ?").run(newName, nowIso(), source.id);
  return { ok: true, renamed: true };
}

export async function applyStatsDelta(playerName: string, delta: {
  clicks: number;
  gamesPlayed: number;
  lootboxesOpened: number;
  cookiesGenerated: number;
  gamesByMode: Partial<Record<GameMode, number>>;
}): Promise<{ ok: boolean; stats?: GlobalStats }> {
  const database = getDb();
  const now = nowIso();
  const player = database.prepare("SELECT id FROM players WHERE name = ?").get(playerName) as { id: number } | undefined;
  if (!player) {
    return { ok: false };
  }

  database.prepare(`
    UPDATE global_stats
    SET
      total_clicks = total_clicks + ?,
      total_games_played = total_games_played + ?,
      total_lootboxes_opened = total_lootboxes_opened + ?,
      total_cookies_generated = total_cookies_generated + ?,
      last_updated_at = ?
    WHERE id = 1
  `).run(delta.clicks, delta.gamesPlayed, delta.lootboxesOpened, delta.cookiesGenerated, now);

  database.prepare(`
    UPDATE players
    SET
      total_clicks = total_clicks + ?,
      total_games = total_games + ?,
      last_seen_at = ?
    WHERE id = ?
  `).run(delta.clicks, delta.gamesPlayed, now, player.id);

  const updateModeStmt = database.prepare("UPDATE global_mode_stats SET count = count + ? WHERE mode = ?");
  for (const mode of allowedModes) {
    const increment = Number(delta.gamesByMode[mode]) || 0;
    if (increment > 0) {
      updateModeStmt.run(increment, mode);
    }
  }

  const stats = await getGlobalStats();
  return { ok: true, stats };
}

export async function updateLeaderboardScore(
  playerName: string,
  level: number,
  score: number,
  totalClicks: number,
  totalGames: number
): Promise<{ ok: boolean; bestScore?: number }> {
  const database = getDb();
  const now = nowIso();
  const player = database.prepare(`
    SELECT id, best_score, total_clicks, total_games
    FROM players
    WHERE name = ?
  `).get(playerName) as { id: number; best_score: number; total_clicks: number; total_games: number } | undefined;
  if (!player) {
    return { ok: false };
  }

  database.prepare(`
    UPDATE players
    SET
      last_level = ?,
      best_level = CASE WHEN best_level > ? THEN best_level ELSE ? END,
      last_score = ?,
      best_score = CASE WHEN best_score > ? THEN best_score ELSE ? END,
      total_clicks = CASE WHEN total_clicks > ? THEN total_clicks ELSE ? END,
      total_games = CASE WHEN total_games > ? THEN total_games ELSE ? END,
      last_seen_at = ?
    WHERE id = ?
  `).run(level, level, level, score, score, score, totalClicks, totalClicks, totalGames, totalGames, now, player.id);

  database.prepare(`
    INSERT INTO score_submissions (player_id, level, score, total_clicks, total_games, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(player.id, level, score, totalClicks, totalGames, now);

  const clickDelta = Math.max(0, totalClicks - (Number(player.total_clicks) || 0));
  const gameDelta = Math.max(0, totalGames - (Number(player.total_games) || 0));
  database.prepare(`
    UPDATE global_stats
    SET
      total_clicks = total_clicks + ?,
      total_games_played = total_games_played + ?,
      last_updated_at = ?
    WHERE id = 1
  `).run(clickDelta, gameDelta, now);

  const updated = database.prepare("SELECT best_score AS bestScore FROM players WHERE id = ?").get(player.id) as { bestScore: number };
  return { ok: true, bestScore: Number(updated.bestScore) || 0 };
}

export async function getLeaderboard(range: LeaderboardRange, limit = 20): Promise<LeaderboardEntry[]> {
  const database = getDb();
  const safeLimit = Math.max(1, Math.min(100, Math.floor(limit)));
  if (range === "alltime") {
    const rows = database.prepare(`
      SELECT
        name AS playerName,
        best_level AS bestLevel,
        last_level AS lastLevel,
        best_score AS bestScore,
        last_score AS lastScore,
        total_clicks AS totalClicks,
        total_games AS totalGames,
        last_seen_at AS updatedAt
      FROM players
      ORDER BY best_level DESC, best_score DESC, last_seen_at ASC
      LIMIT ?
    `).all(safeLimit) as LeaderboardEntry[];
    return rows.map((row) => ({
      ...row,
      bestLevel: Number(row.bestLevel) || 1,
      lastLevel: Number(row.lastLevel) || 1,
      bestScore: Number(row.bestScore) || 0,
      lastScore: Number(row.lastScore) || 0,
      totalClicks: Number(row.totalClicks) || 0,
      totalGames: Number(row.totalGames) || 0
    }));
  }

  const start = getRangeStart(range);
  if (!start) return [];

  const rows = database.prepare(`
    SELECT
      p.name AS playerName,
      MAX(s.level) AS bestLevel,
      (
        SELECT s2.level
        FROM score_submissions s2
        WHERE s2.player_id = p.id AND s2.created_at >= ?
        ORDER BY s2.created_at DESC, s2.id DESC
        LIMIT 1
      ) AS lastLevel,
      MAX(s.score) AS bestScore,
      (
        SELECT s2.score
        FROM score_submissions s2
        WHERE s2.player_id = p.id AND s2.created_at >= ?
        ORDER BY s2.created_at DESC, s2.id DESC
        LIMIT 1
      ) AS lastScore,
      MAX(s.total_clicks) AS totalClicks,
      MAX(s.total_games) AS totalGames,
      MAX(s.created_at) AS updatedAt
    FROM players p
    INNER JOIN score_submissions s ON s.player_id = p.id
    WHERE s.created_at >= ?
    GROUP BY p.id
    ORDER BY bestLevel DESC, bestScore DESC, updatedAt ASC
    LIMIT ?
  `).all(start, start, start, safeLimit) as LeaderboardEntry[];

  return rows.map((row) => ({
    ...row,
    bestLevel: Number(row.bestLevel) || 1,
    lastLevel: Number(row.lastLevel) || 1,
    bestScore: Number(row.bestScore) || 0,
    lastScore: Number(row.lastScore) || 0,
    totalClicks: Number(row.totalClicks) || 0,
    totalGames: Number(row.totalGames) || 0
  }));
}

export async function resetPlayerAccount(playerName: string): Promise<{ ok: boolean; deleted: boolean }> {
  const database = getDb();
  const player = database.prepare("SELECT id FROM players WHERE name = ?").get(playerName) as { id: number } | undefined;
  if (!player) {
    return { ok: true, deleted: false };
  }
  database.prepare("DELETE FROM players WHERE id = ?").run(player.id);
  refreshUniquePlayersCount();
  touchGlobalStats();
  return { ok: true, deleted: true };
}

export async function readData(): Promise<PersistedData> {
  const database = getDb();
  const stats = await getGlobalStats();
  const rows = database.prepare(`
    SELECT
      name,
      best_level AS bestLevel,
      last_level AS lastLevel,
      best_score AS bestScore,
      last_score AS lastScore,
      total_clicks AS totalClicks,
      total_games AS totalGames,
      first_seen_at AS firstSeenAt,
      last_seen_at AS lastSeenAt
    FROM players
  `).all() as Array<{ name: string } & PlayerRecord>;

  const players: Record<string, PlayerRecord> = {};
  for (const row of rows) {
    players[row.name] = {
      bestLevel: Number(row.bestLevel) || 1,
      lastLevel: Number(row.lastLevel) || 1,
      bestScore: Number(row.bestScore) || 0,
      lastScore: Number(row.lastScore) || 0,
      totalClicks: Number(row.totalClicks) || 0,
      totalGames: Number(row.totalGames) || 0,
      firstSeenAt: row.firstSeenAt,
      lastSeenAt: row.lastSeenAt
    };
  }
  return { globalStats: stats, players };
}

export async function writeData(_data: PersistedData) {
  // No-op: SQLite storage is now the source of truth and is mutated via dedicated methods.
}
