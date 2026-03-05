<script lang="ts">
  export let data: {
    profile: {
      playerName: string;
      level: number;
      clicks: number;
      cookies: number;
      totalGames: number;
      updatedAt: string;
      achievementsUnlocked: number;
      achievementsTotal: number;
      gamesByMode: Record<string, number>;
      look: {
        colorName: string;
        skinName: string;
        miscName: string;
        accessoryName: string;
        skinKey: string;
        accessoryKey: string;
        colorTheme: Record<string, string>;
      };
    };
  };

  const format = (value: number) => new Intl.NumberFormat("de-DE").format(Math.floor(Number(value) || 0));
  const updatedAt = new Date(data.profile.updatedAt || Date.now());
</script>

<svelte:head>
  <title>{data.profile.playerName} - Leaderboard Profil</title>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="grain"></div>
<div class="scene leaderboard-page">
  <header class="hero leaderboard-hero">
    <p class="eyebrow">Spielerprofil</p>
    <h1><i class="bi bi-person-circle" aria-hidden="true"></i> {data.profile.playerName}</h1>
    <p class="tagline">Komplettansicht mit Progress, Achievements und aktivem Cookie-Look.</p>
  </header>

  <main class="leaderboard-shell leaderboard-player-shell">
    <section class="leaderboard-panel leaderboard-toolbar">
      <a href="/game/leaderboard" data-sveltekit-reload class="reset-open leaderboard-back-button">
        <i class="bi bi-arrow-left-circle" aria-hidden="true"></i> Zurueck zum Leaderboard
      </a>
      <a href="/game" data-sveltekit-reload class="reset-open leaderboard-back-button">
        <i class="bi bi-controller" aria-hidden="true"></i> Zum Spiel
      </a>
    </section>

    <section class="leaderboard-player-grid">
      <article class="leaderboard-player-card leaderboard-panel">
        <h2><i class="bi bi-graph-up-arrow" aria-hidden="true"></i> Live Werte</h2>
        <p><strong>Level:</strong> {format(data.profile.level)}</p>
        <p><strong>Klicks:</strong> {format(data.profile.clicks)}</p>
        <p><strong>Cookies:</strong> {format(data.profile.cookies)}</p>
        <p><strong>Spiele:</strong> {format(data.profile.totalGames)}</p>
        <p><strong>Zuletzt gesehen:</strong> {updatedAt.toLocaleString("de-DE")}</p>
      </article>

      <article class="leaderboard-player-card leaderboard-panel">
        <h2><i class="bi bi-trophy" aria-hidden="true"></i> Achievements</h2>
        <p>
          <strong>Freigeschaltet:</strong> {format(data.profile.achievementsUnlocked)} / {format(data.profile.achievementsTotal)}
        </p>
      </article>

      <article class="leaderboard-player-card leaderboard-panel">
        <h2><i class="bi bi-joystick" aria-hidden="true"></i> Spiele-Stats</h2>
        <p><strong>Tower:</strong> {format(data.profile.gamesByMode?.tower || 0)}</p>
        <p><strong>Blackjack:</strong> {format(data.profile.gamesByMode?.blackjack || 0)}</p>
        <p><strong>Slots:</strong> {format(data.profile.gamesByMode?.slots || 0)}</p>
        <p><strong>Roulette:</strong> {format(data.profile.gamesByMode?.roulette || 0)}</p>
        <p><strong>Gluecksrad:</strong> {format(data.profile.gamesByMode?.wheel || 0)}</p>
        <p><strong>Lootboxen:</strong> {format(data.profile.gamesByMode?.lootbox || 0)}</p>
      </article>
    </section>

    <section class="leaderboard-player-card leaderboard-panel">
      <h2><i class="bi bi-palette2" aria-hidden="true"></i> Aktueller Cookie-Look</h2>
      <div class="leaderboard-look">
        <div
          class="cosmetics-preview-cookie leaderboard-cookie-look"
          style="
            --cookie-top: {data.profile.look.colorTheme?.['--cookie-top'] || '#f1b07d'};
            --cookie-bottom: {data.profile.look.colorTheme?.['--cookie-bottom'] || '#b5531d'};
            --cookie-spot: {data.profile.look.colorTheme?.['--cookie-spot'] || 'rgba(60, 20, 10, 0.32)'};
            --cookie-text: {data.profile.look.colorTheme?.['--cookie-text'] || '#fff7ee'};
          "
        >
          <span class={`cookie-skin skin-${data.profile.look.skinKey || "none"}`} aria-hidden="true"></span>
          <span class={`cookie-accessory accessory-${data.profile.look.accessoryKey || "none"}`} aria-hidden="true"></span>
          <span class="cosmetics-preview-label">Look</span>
        </div>
        <div class="leaderboard-look-meta">
          <p><strong>Farbe:</strong> {data.profile.look.colorName}</p>
          <p><strong>Skin:</strong> {data.profile.look.skinName}</p>
          <p><strong>Sonstiges:</strong> {data.profile.look.miscName}</p>
          <p><strong>Hut:</strong> {data.profile.look.accessoryName}</p>
        </div>
      </div>
    </section>
  </main>
</div>
