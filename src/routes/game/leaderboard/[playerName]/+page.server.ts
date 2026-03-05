import { error } from "@sveltejs/kit";
import { getLeaderboardPlayerProfile, normalizePlayerName } from "$lib/server/dataStore";

export async function load({ params }) {
  const playerName = normalizePlayerName(params.playerName);
  if (!playerName) {
    throw error(404, "Spieler nicht gefunden");
  }

  const result = await getLeaderboardPlayerProfile(playerName);
  if (!result.ok || !result.found || !result.profile) {
    throw error(404, "Spieler nicht gefunden");
  }

  return {
    profile: result.profile
  };
}
