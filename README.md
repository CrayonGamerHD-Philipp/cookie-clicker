# Cookie Klicker

Eine Cookie-Klicker Website mit Casino-Modi (Tower, Blackjack, Slots, Roulette).

## Projektstruktur

- `src/index.html`: Einstieg fuer den Client.
- `src/script.js`: schlanker Bootstrap fuer den Browser.
- `src/app/`: modulare Client-Struktur mit Config, Services und Spiel-App.
- `src/app/legacy/gameApp.js`: bestehende Spiellogik, jetzt als eingebundene App-Schicht statt globalem Monolith-Einstieg.
- `backend/server.js`: separates Backend-Scaffold fuer spaetere API-Endpunkte.

## Backend-Scaffold

Lokalen API-Stub starten:

```bash
npm run start:backend
```

Aktuell vorhanden:

- `GET /api/health`
- `GET /api/config`
- `GET /api/global-stats`
- `POST /api/global-stats/register`
- `POST /api/global-stats/events`

Die Client-Architektur ist damit bereits auf eine kuenftige HTTP-API vorbereitet, bleibt im Moment aber lokal funktionsfaehig.

## Docker Compose

```yaml
services:
  cookie-clicker:
    image: ghcr.io/crayongamerhd-philipp/cookie-clicker:latest
    ports:
      - "8080:80"
```

Starten:

```bash
docker compose up -d
```

## Docker Compose mit Traefik

```yaml
services:
  cookie-clicker:
    image: ghcr.io/crayongamerhd-philipp/cookie-clicker:latest
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.cookie-clicker.rule=Host(`cookie.example.com`)"
      - "traefik.http.routers.cookie-clicker.entrypoints=websecure"
      - "traefik.http.routers.cookie-clicker.tls=true"
      - "traefik.http.services.cookie-clicker.loadbalancer.server.port=80"
    networks:
      - traefik

networks:
  traefik:
    external: true
```
