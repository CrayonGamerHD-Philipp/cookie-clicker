Backend scaffold for the future API layer.

Available endpoints:
- `GET /api/health`
- `GET /api/config`
- `GET /api/global-stats`
- `POST /api/global-stats/register`
- `POST /api/global-stats/events`

Current role:
- Reserve a separate backend entrypoint for future persistence, auth, leaderboards, and remote game-state sync.
- Keep the client architecture ready for switching from local storage to HTTP APIs without another full frontend rewrite.
- Persist global aggregate statistics server-side in `backend/data/global-stats.json`.
