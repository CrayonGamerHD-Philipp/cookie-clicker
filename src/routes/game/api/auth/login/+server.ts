import { json } from "@sveltejs/kit";
import { loginAccount } from "$lib/server/accountStore";

export async function POST({ request }) {
  const body = await request.json().catch(() => ({}));
  const result = await loginAccount(body?.username, body?.password);
  if (!result.ok) {
    return json({ ok: false, error: result.error || "Login failed" }, { status: 401 });
  }
  return json({
    ok: true,
    token: result.token,
    username: result.username,
    playerName: result.playerName
  });
}
