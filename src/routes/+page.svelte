<svelte:head>
  <title>HETHEY - Cookie Klicker</title>
  <meta name="description" content="Cookie Klicker von HETHEY. Starte das Spiel unter /game." />
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="grain"></div>
<div class="scene landing-page">
  <main class="landing-shell">
    <p class="eyebrow">HETHEY Backstube</p>
    <h1>Cookie Klicker</h1>
    <p class="tagline">Das Spiel liegt jetzt unter <strong>/game</strong>. API und Leaderboard wurden ebenfalls dorthin verschoben.</p>

    <div class="landing-actions">
      <a href="/game" data-sveltekit-reload class="tower-open">Spiel starten</a>
      <a href="/game/leaderboard" data-sveltekit-reload class="finance-open">Zum Leaderboard</a>
    </div>
  </main>
</div>

<style>
  .landing-page {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
  }

  .landing-shell {
    width: min(780px, 100%);
    background: var(--cream);
    border-radius: 24px;
    box-shadow: 0 18px 40px var(--shadow);
    padding: clamp(22px, 4vw, 40px);
    display: grid;
    gap: 14px;
    text-align: center;
  }

  .landing-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 6px;
  }
</style>
