import { json } from "@sveltejs/kit";
import { loadAccountProgress, saveAccountProgress } from "$lib/server/accountStore";
import { requireSession } from "$lib/server/auth";

export async function GET({ request }) {
  const result = await requireSession(request.headers.get("authorization"));
  if (!result.ok || !result.session) {
    return json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const save = await loadAccountProgress(result.session.accountId);
  return json({
    ok: true,
    save: save.save,
    updatedAt: save.updatedAt
  });
}

export async function POST({ request }) {
  const result = await requireSession(request.headers.get("authorization"));
  if (!result.ok || !result.session) {
    return json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const store = await saveAccountProgress(result.session.accountId, body?.save);
  if (!store.ok) {
    return json({ ok: false, error: store.error || "Save failed" }, { status: 400 });
  }
  return json({ ok: true });
}
