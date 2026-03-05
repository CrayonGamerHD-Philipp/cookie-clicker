# HETHEY Cookie Clicker (SvelteKit)

Kompletter Refactor auf **SvelteKit + TailwindCSS** mit komponentenbasierter UI, serverseitiger API und globalem Leaderboard.

## Features

- SvelteKit-Frontend mit wiederverwendbaren Components
- TailwindCSS-Designsystem
- Pflicht-Playername beim ersten Start (lokal gespeichert)
- Serverseitige API-Endpunkte in `src/routes/api/*`
- Persistente globale Statistiken + Leaderboard in `backend/data/game-data.json`

## Lokal starten

```bash
npm install
npm run dev
```

App läuft dann standardmäßig auf `http://localhost:5173`.

## Build / Production

```bash
npm run build
npm start
```

## API Endpoints

- `POST /api/player/register`
  - Body: `{ "playerName": "..." }`
- `GET /api/stats`
- `POST /api/stats/event`
  - Body: `{ "playerName": "...", "delta": { clicks, gamesPlayed, lootboxesOpened, cookiesGenerated, gamesByMode } }`
- `GET /api/leaderboard`
- `POST /api/leaderboard`
  - Body: `{ "playerName": "...", "score": number, "totalClicks": number, "totalGames": number }`

## Wichtige Pfade

- `src/routes/+page.svelte`: Hauptoberfläche
- `src/lib/components/*`: UI-Komponenten
- `src/lib/game/modes.ts`: Modus-Logik
- `src/lib/server/dataStore.ts`: persistente Server-Datenhaltung
