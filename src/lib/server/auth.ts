import { getSessionFromToken } from "$lib/server/accountStore";

export function bearerTokenFromHeader(authHeader: string | null): string {
  if (!authHeader) return "";
  const [scheme, token] = authHeader.split(" ");
  if (!scheme || !token) return "";
  if (scheme.toLowerCase() !== "bearer") return "";
  return token.trim();
}

export async function requireSession(authHeader: string | null) {
  const token = bearerTokenFromHeader(authHeader);
  if (!token) {
    return { ok: false as const };
  }
  return getSessionFromToken(token);
}
