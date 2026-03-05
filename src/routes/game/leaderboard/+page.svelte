<svelte:head>
  <title>Leaderboard - Cookie Klicker</title>
  <link rel="stylesheet" href="/style.css" />
  <script src="/leaderboard.js" defer></script>
</svelte:head>

<div class="grain"></div>
<div class="scene leaderboard-page">
  <header class="hero">
    <p class="eyebrow">HETHEY Backstube</p>
    <h1>Leaderboard</h1>
    <p class="tagline">Trag deinen aktuellen Spielstand ein und vergleiche ihn global mit allen Spielern. Klick auf einen Namen fuer das Detailprofil.</p>
  </header>

  <main class="leaderboard-shell">
    <div class="leaderboard-toolbar">
      <input id="leaderboardName" class="leaderboard-input" type="text" maxlength="24" placeholder="Dein Name" />
      <a href="/game" data-sveltekit-reload class="reset-open">Zurueck zum Spiel</a>
    </div>

    <div class="leaderboard-ranges" role="tablist" aria-label="Leaderboard Zeitraum">
      <button type="button" class="leaderboard-range-button active" data-range="daily">Daily</button>
      <button type="button" class="leaderboard-range-button" data-range="weekly">Weekly</button>
      <button type="button" class="leaderboard-range-button" data-range="monthly">Monthly</button>
      <button type="button" class="leaderboard-range-button" data-range="alltime">All-time</button>
    </div>
    <p class="leaderboard-muted">
      Auswertung: Hoeheres <strong>Level</strong> ist besser. Bei gleichem Level entscheidet der hoehere
      <strong>Klicks</strong>-Wert. Danach zaehlen die aktuell gehaltenen <strong>Cookies</strong>. Bei komplettem
      Gleichstand steht der frueher gespeicherte Eintrag vorne.
    </p>

    <div class="leaderboard-table-wrap">
      <table class="leaderboard-table" aria-label="Globales Leaderboard">
        <thead>
          <tr>
            <th>Platz</th>
            <th>Name</th>
            <th>Level</th>
            <th>Klicks</th>
            <th>Cookies</th>
            <th>Gespeichert</th>
          </tr>
        </thead>
        <tbody id="leaderboardRows"></tbody>
      </table>
    </div>
    <p class="leaderboard-muted leaderboard-legend">
      Legende: k = Tausend, m = Million, b = Milliarde, t = Trillion, qa = Quadrillion, qi = Quintillion, sx =
      Sextillion, sp = Septillion, oc = Oktillion, no = Nonillion.
    </p>
  </main>
</div>
