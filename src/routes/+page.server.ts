import type { PageServerLoad } from "./$types";
import { getGlobalStats } from "$lib/server/dataStore";

export const load: PageServerLoad = async () => {
  const stats = await getGlobalStats();
  return { stats };
};

