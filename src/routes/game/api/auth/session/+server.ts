import { json } from "@sveltejs/kit";
import { requireSession } from "$lib/server/auth";

export async function GET({ request }) {
  const result = await requireSession(request.headers.get("authorization"));
  if (!result.ok || !result.session) {
    return json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return json({
    ok: true,
    username: result.session.username,
    playerName: result.session.playerName
  });
}
