import { mkdirSync } from "node:fs";
import path from "node:path";
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import Database from "better-sqlite3";
import { normalizePlayerName, registerPlayer } from "$lib/server/dataStore";

const dataDir = path.resolve("backend", "data");
const dataFile = path.join(dataDir, "game-data.sqlite");
const SESSION_LIFETIME_MS = 1000 * 60 * 60 * 24 * 30; // 30 days
const MAX_SAVE_SIZE = 1_000_000;

let db: Database.Database | null = null;

function nowIso() {
  return new Date().toISOString();
}

function getDb() {
  if (db) return db;

  mkdirSync(dataDir, { recursive: true });
  db = new Database(dataFile);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      player_name TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL,
      last_login_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS account_sessions (
      token TEXT PRIMARY KEY,
      account_id INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      FOREIGN KEY(account_id) REFERENCES accounts(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS account_saves (
      account_id INTEGER PRIMARY KEY,
      payload TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      FOREIGN KEY(account_id) REFERENCES accounts(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_account_sessions_expires ON account_sessions(expires_at);
  `);

  return db;
}

export function normalizeAccountName(name: unknown): string {
  if (typeof name !== "string") return "";
  const value = name.trim().slice(0, 24).toLowerCase();
  if (!/^[a-z0-9._-]{3,24}$/.test(value)) {
    return "";
  }
  return value;
}

function isValidPassword(password: unknown): password is string {
  return typeof password === "string" && password.length >= 8 && password.length <= 128;
}

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, storedHash: string): boolean {
  const parts = storedHash.split(":");
  if (parts.length !== 2) return false;
  const [salt, expectedHash] = parts;
  const actualHash = scryptSync(password, salt, 64).toString("hex");
  const left = Buffer.from(expectedHash, "hex");
  const right = Buffer.from(actualHash, "hex");
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

function createSession(accountId: number): string {
  const database = getDb();
  const token = randomUUID();
  const now = nowIso();
  const expiresAt = new Date(Date.now() + SESSION_LIFETIME_MS).toISOString();
  database.prepare(`
    INSERT INTO account_sessions (token, account_id, created_at, expires_at)
    VALUES (?, ?, ?, ?)
  `).run(token, accountId, now, expiresAt);
  return token;
}

function cleanupExpiredSessions() {
  getDb().prepare("DELETE FROM account_sessions WHERE expires_at < ?").run(nowIso());
}

export type AccountSession = {
  accountId: number;
  username: string;
  playerName: string;
  token: string;
};

export async function registerAccount(usernameRaw: unknown, passwordRaw: unknown): Promise<{
  ok: boolean;
  error?: string;
  token?: string;
  username?: string;
  playerName?: string;
}> {
  const username = normalizeAccountName(usernameRaw);
  if (!username) return { ok: false, error: "Invalid username" };
  if (!isValidPassword(passwordRaw)) return { ok: false, error: "Invalid password" };

  const playerName = normalizePlayerName(username);
  if (!playerName) return { ok: false, error: "Invalid player name" };

  const database = getDb();
  const existing = database
    .prepare("SELECT id FROM accounts WHERE username = ?")
    .get(username) as { id: number } | undefined;
  if (existing) return { ok: false, error: "Username already exists" };

  const now = nowIso();
  const passwordHash = hashPassword(passwordRaw);
  const result = database.prepare(`
    INSERT INTO accounts (username, password_hash, player_name, created_at, last_login_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(username, passwordHash, playerName, now, now);

  const accountId = Number(result.lastInsertRowid);
  const token = createSession(accountId);
  await registerPlayer(playerName);
  return { ok: true, token, username, playerName };
}

export async function loginAccount(usernameRaw: unknown, passwordRaw: unknown): Promise<{
  ok: boolean;
  error?: string;
  token?: string;
  username?: string;
  playerName?: string;
}> {
  const username = normalizeAccountName(usernameRaw);
  if (!username || !isValidPassword(passwordRaw)) {
    return { ok: false, error: "Invalid credentials" };
  }

  cleanupExpiredSessions();
  const database = getDb();
  const account = database.prepare(`
    SELECT id, username, password_hash AS passwordHash, player_name AS playerName
    FROM accounts
    WHERE username = ?
  `).get(username) as { id: number; username: string; passwordHash: string; playerName: string } | undefined;

  if (!account || !verifyPassword(passwordRaw, account.passwordHash)) {
    return { ok: false, error: "Invalid credentials" };
  }

  const token = createSession(account.id);
  database.prepare("UPDATE accounts SET last_login_at = ? WHERE id = ?").run(nowIso(), account.id);
  await registerPlayer(account.playerName);
  return { ok: true, token, username: account.username, playerName: account.playerName };
}

export async function getSessionFromToken(tokenRaw: unknown): Promise<{ ok: boolean; session?: AccountSession }> {
  const token = typeof tokenRaw === "string" ? tokenRaw.trim() : "";
  if (!token) return { ok: false };

  cleanupExpiredSessions();
  const database = getDb();
  const row = database.prepare(`
    SELECT
      s.token AS token,
      a.id AS accountId,
      a.username AS username,
      a.player_name AS playerName
    FROM account_sessions s
    INNER JOIN accounts a ON a.id = s.account_id
    WHERE s.token = ?
      AND s.expires_at >= ?
  `).get(token, nowIso()) as AccountSession | undefined;

  if (!row) return { ok: false };
  return { ok: true, session: row };
}

export async function logoutSession(tokenRaw: unknown): Promise<void> {
  const token = typeof tokenRaw === "string" ? tokenRaw.trim() : "";
  if (!token) return;
  getDb().prepare("DELETE FROM account_sessions WHERE token = ?").run(token);
}

function parseSavePayload(raw: string): unknown | null {
  try {
    return JSON.parse(raw);
  } catch (_error) {
    return null;
  }
}

export async function saveAccountProgress(
  accountId: number,
  payload: unknown,
  expectedUpdatedAtRaw?: unknown
): Promise<{ ok: boolean; error?: string; conflict?: boolean; save?: unknown | null; updatedAt?: string | null }> {
  if (typeof payload !== "object" || payload === null) {
    return { ok: false, error: "Invalid payload" };
  }
  const jsonPayload = JSON.stringify(payload);
  if (jsonPayload.length > MAX_SAVE_SIZE) {
    return { ok: false, error: "Payload too large" };
  }

  const database = getDb();
  const expectedUpdatedAt = typeof expectedUpdatedAtRaw === "string" && expectedUpdatedAtRaw.trim()
    ? expectedUpdatedAtRaw.trim()
    : null;
  const existing = database.prepare(`
    SELECT payload, updated_at AS updatedAt
    FROM account_saves
    WHERE account_id = ?
  `).get(accountId) as { payload: string; updatedAt: string } | undefined;
  const currentUpdatedAt = existing?.updatedAt || null;

  if (expectedUpdatedAt !== currentUpdatedAt) {
    return {
      ok: false,
      conflict: true,
      error: "Save conflict",
      save: existing ? parseSavePayload(existing.payload) : null,
      updatedAt: currentUpdatedAt
    };
  }

  const updatedAt = nowIso();
  database.prepare(`
    INSERT INTO account_saves (account_id, payload, updated_at)
    VALUES (?, ?, ?)
    ON CONFLICT(account_id)
    DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at
  `).run(accountId, jsonPayload, updatedAt);
  return { ok: true, updatedAt };
}

export async function loadAccountProgress(accountId: number): Promise<{ ok: boolean; save: unknown | null; updatedAt: string | null }> {
  const database = getDb();
  const row = database.prepare(`
    SELECT payload, updated_at AS updatedAt
    FROM account_saves
    WHERE account_id = ?
  `).get(accountId) as { payload: string; updatedAt: string } | undefined;

  if (!row) {
    return { ok: true, save: null, updatedAt: null };
  }

  try {
    return { ok: true, save: JSON.parse(row.payload), updatedAt: row.updatedAt };
  } catch (_error) {
    return { ok: true, save: null, updatedAt: row.updatedAt };
  }
}
