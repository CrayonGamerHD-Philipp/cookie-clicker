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
  const achievementRatio = data.profile.achievementsTotal > 0
    ? Math.max(0, Math.min(100, Math.round((data.profile.achievementsUnlocked / data.profile.achievementsTotal) * 100)))
    : 0;
</script>

<svelte:head>
  <title>{data.profile.playerName} - Leaderboard Profil</title>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
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

    <section class="leaderboard-player-kpis">
      <article class="leaderboard-kpi-tile leaderboard-panel">
        <span class="leaderboard-kpi-icon"><i class="bi bi-fire" aria-hidden="true"></i></span>
        <span class="leaderboard-kpi-label">Level</span>
        <strong class="leaderboard-kpi-value">{format(data.profile.level)}</strong>
      </article>
      <article class="leaderboard-kpi-tile leaderboard-panel">
        <span class="leaderboard-kpi-icon"><i class="bi bi-hand-index-thumb" aria-hidden="true"></i></span>
        <span class="leaderboard-kpi-label">Klicks</span>
        <strong class="leaderboard-kpi-value">{format(data.profile.clicks)}</strong>
      </article>
      <article class="leaderboard-kpi-tile leaderboard-panel">
        <span class="leaderboard-kpi-icon"><i class="bi bi-cookie" aria-hidden="true"></i></span>
        <span class="leaderboard-kpi-label">Cookies</span>
        <strong class="leaderboard-kpi-value">{format(data.profile.cookies)}</strong>
      </article>
      <article class="leaderboard-kpi-tile leaderboard-panel">
        <span class="leaderboard-kpi-icon"><i class="bi bi-controller" aria-hidden="true"></i></span>
        <span class="leaderboard-kpi-label">Spiele</span>
        <strong class="leaderboard-kpi-value">{format(data.profile.totalGames)}</strong>
      </article>
    </section>

    <section class="leaderboard-player-grid">
      <article class="leaderboard-player-card leaderboard-panel">
        <h2><i class="bi bi-trophy" aria-hidden="true"></i> Achievements</h2>
        <p><strong>Freigeschaltet:</strong> {format(data.profile.achievementsUnlocked)} / {format(data.profile.achievementsTotal)}</p>
        <div class="leaderboard-achievement-track" aria-hidden="true">
          <span class="leaderboard-achievement-fill" style={`width: ${achievementRatio}%`}></span>
        </div>
        <p class="leaderboard-muted">Fortschritt: {achievementRatio}%</p>
        <p><strong>Zuletzt gesehen:</strong> {updatedAt.toLocaleString("de-DE")}</p>
      </article>

      <article class="leaderboard-player-card leaderboard-panel">
        <h2><i class="bi bi-joystick" aria-hidden="true"></i> Spiele-Stats</h2>
        <div class="leaderboard-mode-list">
          <p><i class="bi bi-building" aria-hidden="true"></i> Tower <strong>{format(data.profile.gamesByMode?.tower || 0)}</strong></p>
          <p><i class="bi bi-suit-spade" aria-hidden="true"></i> Blackjack <strong>{format(data.profile.gamesByMode?.blackjack || 0)}</strong></p>
          <p><i class="bi bi-dice-6" aria-hidden="true"></i> Slots <strong>{format(data.profile.gamesByMode?.slots || 0)}</strong></p>
          <p><i class="bi bi-record-circle" aria-hidden="true"></i> Roulette <strong>{format(data.profile.gamesByMode?.roulette || 0)}</strong></p>
          <p><i class="bi bi-disc" aria-hidden="true"></i> Gluecksrad <strong>{format(data.profile.gamesByMode?.wheel || 0)}</strong></p>
          <p><i class="bi bi-box-seam" aria-hidden="true"></i> Lootboxen <strong>{format(data.profile.gamesByMode?.lootbox || 0)}</strong></p>
        </div>
      </article>

      <article class="leaderboard-player-card leaderboard-panel">
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
      </article>
    </section>
  </main>
</div>
