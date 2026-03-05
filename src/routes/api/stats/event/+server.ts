import { json } from "@sveltejs/kit";
import { applyStatsDelta, modeList, normalizePlayerName, sanitizePositiveInt } from "$lib/server/dataStore";

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const playerName = normalizePlayerName(body?.playerName);
  if (!playerName) {
    return json({ ok: false, error: "Invalid player name" }, { status: 400 });
  }
  const delta = body?.delta || {};

  const clicks = sanitizePositiveInt(delta.clicks, 20_000);
  const gamesPlayed = sanitizePositiveInt(delta.gamesPlayed, 5_000);
  const lootboxesOpened = sanitizePositiveInt(delta.lootboxesOpened, 5_000);
  const cookiesGenerated = sanitizePositiveInt(delta.cookiesGenerated, 10_000_000_000);

  const incomingModes = delta.gamesByMode && typeof delta.gamesByMode === "object" ? delta.gamesByMode : {};
  const gamesByMode = Object.fromEntries(modeList().map((mode) => [mode, sanitizePositiveInt(incomingModes[mode], 5_000)]));
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
