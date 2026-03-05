import { json } from "@sveltejs/kit";
import { normalizePlayerName, resetPlayerAccount } from "$lib/server/dataStore";

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const playerName = normalizePlayerName(body?.playerName);
  if (!playerName) {
    return json({ ok: false, error: "Invalid player name" }, { status: 400 });
  }

  const result = await resetPlayerAccount(playerName);
  return json({
    ok: true,
    deleted: result.deleted
  });
}
