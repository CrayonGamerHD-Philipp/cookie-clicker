import { json } from "@sveltejs/kit";
import { applyStatsDelta, modeList, normalizePlayerName, sanitizePositiveInt } from "$lib/server/dataStore";

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const playerName = normalizePlayerName(body?.playerName);
  if (!playerName) {
    return json({ ok: false, error: "Invalid player name" }, { status: 400 });
  }
  const delta = body?.delta || {};

  const MAX_DELTA = Number.MAX_SAFE_INTEGER;
  const clicks = sanitizePositiveInt(delta.clicks, MAX_DELTA);
  const gamesPlayed = sanitizePositiveInt(delta.gamesPlayed, MAX_DELTA);
  const lootboxesOpened = sanitizePositiveInt(delta.lootboxesOpened, MAX_DELTA);
  const cookiesGenerated = sanitizePositiveInt(delta.cookiesGenerated, MAX_DELTA);

  const incomingModes = delta.gamesByMode && typeof delta.gamesByMode === "object" ? delta.gamesByMode : {};
  const gamesByMode = Object.fromEntries(modeList().map((mode) => [mode, sanitizePositiveInt(incomingModes[mode], MAX_DELTA)]));
  const result = await applyStatsDelta(playerName, {
    clicks,
    gamesPlayed,
    lootboxesOpened,
    cookiesGenerated,
    gamesByMode
  });
  if (!result.ok || !result.stats) {
    return json({ ok: false, error: "Player not registered" }, { status: 409 });
  }
  return json({
    ok: true,
    stats: result.stats
  });
}
