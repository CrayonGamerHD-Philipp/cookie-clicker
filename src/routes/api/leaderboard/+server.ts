import { json } from "@sveltejs/kit";
import { getLeaderboard, normalizePlayerName, sanitizePositiveInt, updateLeaderboardScore, type LeaderboardRange } from "$lib/server/dataStore";

const validRanges = new Set<LeaderboardRange>(["daily", "weekly", "monthly", "alltime"]);

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

  const score = sanitizePositiveInt(body?.score, 10_000_000_000);
  const totalClicks = sanitizePositiveInt(body?.totalClicks, 10_000_000_000);
  const totalGames = sanitizePositiveInt(body?.totalGames, 10_000_000);

  const result = await updateLeaderboardScore(playerName, score, totalClicks, totalGames);
  if (!result.ok) {
    return json({ ok: false, error: "Player not registered" }, { status: 409 });
  }
  return json({
    ok: true,
    bestScore: result.bestScore ?? score
  });
}
