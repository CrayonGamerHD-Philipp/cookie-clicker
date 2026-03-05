import { json } from "@sveltejs/kit";
import { getGlobalStats } from "$lib/server/dataStore";

export async function GET() {
  const stats = await getGlobalStats();
  return json({
    ok: true,
    stats
  });
}
