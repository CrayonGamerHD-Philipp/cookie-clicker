<svelte:head>
  <title>Leaderboard - Cookie Klicker</title>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <script src="/leaderboard.js" defer></script>
</svelte:head>

<div class="grain"></div>
<div class="scene leaderboard-page">
  <header class="hero leaderboard-hero">
    <p class="eyebrow">HETHEY Backstube</p>
    <h1><i class="bi bi-trophy-fill" aria-hidden="true"></i> Leaderboard</h1>
    <p class="tagline">Trag deinen aktuellen Spielstand ein und vergleiche ihn global mit allen Spielern. Klick auf einen Namen fuer das Detailprofil.</p>
    <div class="leaderboard-meta-chips">
      <span><i class="bi bi-fire" aria-hidden="true"></i> Sortierung: Level</span>
      <span><i class="bi bi-hand-index-thumb" aria-hidden="true"></i> Tie-Breaker: Klicks</span>
      <span><i class="bi bi-cookie" aria-hidden="true"></i> Danach: Cookies</span>
    </div>
  </header>

  <main class="leaderboard-shell">
    <section class="leaderboard-panel leaderboard-toolbar">
      <label class="leaderboard-input-wrap">
        <i class="bi bi-person-badge" aria-hidden="true"></i>
        <input id="leaderboardName" class="leaderboard-input" type="text" maxlength="24" placeholder="Dein Name" />
      </label>
      <a href="/game" data-sveltekit-reload class="reset-open leaderboard-back-button">
        <i class="bi bi-arrow-left-circle" aria-hidden="true"></i> Zurueck zum Spiel
      </a>
    </section>

    <section class="leaderboard-panel">
      <div class="leaderboard-ranges" role="tablist" aria-label="Leaderboard Zeitraum">
        <button type="button" class="leaderboard-range-button active" data-range="daily"><i class="bi bi-sun" aria-hidden="true"></i> Daily</button>
        <button type="button" class="leaderboard-range-button" data-range="weekly"><i class="bi bi-calendar-week" aria-hidden="true"></i> Weekly</button>
        <button type="button" class="leaderboard-range-button" data-range="monthly"><i class="bi bi-calendar3" aria-hidden="true"></i> Monthly</button>
        <button type="button" class="leaderboard-range-button" data-range="alltime"><i class="bi bi-stars" aria-hidden="true"></i> All-time</button>
      </div>
      <p class="leaderboard-muted">
        Auswertung: Hoeheres <strong>Level</strong> ist besser. Bei gleichem Level entscheidet der hoehere
        <strong>Klicks</strong>-Wert. Danach zaehlen die aktuell gehaltenen <strong>Cookies</strong>. Bei komplettem
        Gleichstand steht der frueher gespeicherte Eintrag vorne.
      </p>
    </section>

    <section class="leaderboard-panel">
      <div class="leaderboard-table-wrap">
        <table class="leaderboard-table" aria-label="Globales Leaderboard">
          <thead>
            <tr>
              <th><i class="bi bi-award" aria-hidden="true"></i> Platz</th>
              <th><i class="bi bi-person" aria-hidden="true"></i> Name</th>
              <th><i class="bi bi-fire" aria-hidden="true"></i> Level</th>
              <th><i class="bi bi-hand-index-thumb" aria-hidden="true"></i> Klicks</th>
              <th><i class="bi bi-cookie" aria-hidden="true"></i> Cookies</th>
              <th><i class="bi bi-clock-history" aria-hidden="true"></i> Gespeichert</th>
            </tr>
          </thead>
          <tbody id="leaderboardRows"></tbody>
        </table>
      </div>
    </section>

    <section class="leaderboard-panel">
      <p class="leaderboard-muted leaderboard-legend">
        Legende: k = Tausend, m = Million, b = Milliarde, t = Trillion, qa = Quadrillion, qi = Quintillion, sx =
        Sextillion, sp = Septillion, oc = Oktillion, no = Nonillion.
      </p>
    </section>
  </main>
</div>
