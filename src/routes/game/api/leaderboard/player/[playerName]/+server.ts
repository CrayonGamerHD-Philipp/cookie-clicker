import { json } from "@sveltejs/kit";
import { getLeaderboardPlayerProfile, normalizePlayerName } from "$lib/server/dataStore";

export async function GET({ params }) {
  const playerName = normalizePlayerName(params.playerName);
  if (!playerName) {
    return json({ ok: false, error: "Invalid player name" }, { status: 400 });
  }

  const result = await getLeaderboardPlayerProfile(playerName);
  if (!result.ok || !result.found || !result.profile) {
    return json({ ok: false, error: "Player not found" }, { status: 404 });
  }

  return json({
    ok: true,
    profile: result.profile
  });
}
