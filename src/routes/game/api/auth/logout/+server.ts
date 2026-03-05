import { json } from "@sveltejs/kit";
import { logoutSession } from "$lib/server/accountStore";
import { bearerTokenFromHeader } from "$lib/server/auth";

export async function POST({ request }) {
  const token = bearerTokenFromHeader(request.headers.get("authorization"));
  if (token) {
    await logoutSession(token);
  }
  return json({ ok: true });
}
