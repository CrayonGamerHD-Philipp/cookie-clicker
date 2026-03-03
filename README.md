# Cookie Klicker

Eine Cookie-Klicker Website mit Casino-Modi (Tower, Blackjack, Slots, Roulette).

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
