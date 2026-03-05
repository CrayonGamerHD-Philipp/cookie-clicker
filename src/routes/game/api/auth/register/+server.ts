import { json } from "@sveltejs/kit";
import { registerAccount } from "$lib/server/accountStore";

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const result = await registerAccount(body?.username, body?.password);
  if (!result.ok) {
    return json({ ok: false, error: result.error || "Registration failed" }, { status: 400 });
  }
  return json({
    ok: true,
    token: result.token,
    username: result.username,
    playerName: result.playerName
  });
}
