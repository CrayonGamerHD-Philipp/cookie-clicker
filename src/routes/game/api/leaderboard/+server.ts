import { json } from "@sveltejs/kit";
import { getLeaderboard, normalizePlayerName, sanitizePositiveInt, updateLeaderboardScore, type LeaderboardRange } from "$lib/server/dataStore";

const validRanges = new Set<LeaderboardRange>(["daily", "weekly", "monthly", "alltime"]);
const SCORE_MAX = Number.MAX_VALUE;

export async function GET({ url }) {
  const rangeParam = String(url.searchParams.get("range") || "alltime").toLowerCase();
  const range: LeaderboardRange = validRanges.has(rangeParam as LeaderboardRange)
    ? (rangeParam as LeaderboardRange)
    : "alltime";
  const entries = await getLeaderboard(range, 20);
  return json({
    ok: true,
    range,
    leaderboard: entries
  });
}

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const playerName = normalizePlayerName(body?.playerName);
  if (!playerName) {
    return json({ ok: false, error: "Invalid player name" }, { status: 400 });
  }

  const level = sanitizePositiveInt(body?.level, 1_000_000);
  const score = sanitizePositiveInt(body?.score, SCORE_MAX);
  const totalClicks = sanitizePositiveInt(body?.totalClicks, SCORE_MAX);
  const currentCookies = sanitizePositiveInt(body?.currentCookies, SCORE_MAX);
  const totalGames = sanitizePositiveInt(body?.totalGames, 10_000_000);
  const profileSnapshot = typeof body?.profileSnapshot === "object" && body?.profileSnapshot !== null
    ? body.profileSnapshot
    : undefined;

  const result = await updateLeaderboardScore(playerName, level, score, totalClicks, currentCookies, totalGames, profileSnapshot);
  if (!result.ok) {
    return json({ ok: false, error: "Player not registered" }, { status: 409 });
  }
  return json({
    ok: true,
    bestScore: result.bestScore ?? score
  });
}
