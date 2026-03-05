<script lang="ts">
  export let data: {
    stats: {
      uniquePlayers: number;
      totalSessions: number;
      totalClicks: number;
      totalGamesPlayed: number;
      totalLootboxesOpened: number;
      totalCookiesGenerated: number;
      lastUpdatedAt: string;
    };
  };

  const formatInteger = (value: number) => new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(value || 0));
  const format = (value: number) => {
    const n = Math.floor(value || 0);
    if (n < 1_000) return formatInteger(n);

    const units = [
      { v: 1_000_000_000_000, s: "Bio." },
      { v: 1_000_000_000, s: "Mrd." },
      { v: 1_000_000, s: "Mio." },
      { v: 1_000, s: "Tsd." }
    ];
    const unit = units.find((entry) => n >= entry.v);
    if (!unit) return formatInteger(n);

    const short = n / unit.v;
    const decimals = short >= 100 ? 0 : short >= 10 ? 1 : 2;
    const compact = new Intl.NumberFormat("de-DE", { maximumFractionDigits: decimals }).format(short);
    return `${compact} ${unit.s}`;
  };
  const updatedAt = new Date(data.stats.lastUpdatedAt || Date.now()).toLocaleString("de-DE");
</script>

<svelte:head>
  <title>gambleclicker.de | Arcade Clicker mit Leaderboard</title>
  <meta
    name="description"
    content="gambleclicker.de: baue deine Cookie-Economy, spiele Minigames, klettere im globalen Leaderboard und tritt der Discord-Community bei."
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="grain"></div>
<div class="landing-page">
  <header class="nav-wrap">
    <nav class="nav">
      <a href="/" class="brand">gambleclicker.de</a>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#stats">Stats</a>
        <a href="#community">Community</a>
      </div>
      <a href="/game" data-sveltekit-reload class="nav-cta">Jetzt spielen</a>
    </nav>
  </header>

  <main class="site-main">
    <section class="hero">
      <div class="hero-noise" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow">Willkommen auf gambleclicker.de</p>
        <h1>Cookie Chaos. Schnell, laut, kompetitiv.</h1>
        <p class="tagline">Click, gamble, climb. Mehr Action pro Minute, weniger Leerlauf.</p>
        <div class="hero-icons" aria-label="Spiel-Schwerpunkte">
          <span class="icon-chip">
            <i class="bi bi-stars" aria-hidden="true"></i>
            PvP-Feel
          </span>
          <span class="icon-chip">
            <i class="bi bi-controller" aria-hidden="true"></i>
            Minigames
          </span>
          <span class="icon-chip">
            <i class="bi bi-diagram-3" aria-hidden="true"></i>
            Build-Depth
          </span>
          <span class="icon-chip">
            <i class="bi bi-graph-up-arrow" aria-hidden="true"></i>
            Live-Ranking
          </span>
        </div>
        <div class="hero-actions">
          <a href="/game" data-sveltekit-reload class="btn btn-primary">Spiel starten</a>
          <a href="/game/leaderboard" data-sveltekit-reload class="btn btn-secondary">Leaderboard ansehen</a>
        </div>
      </div>
      <aside class="hero-card" aria-label="Kurzinfos">
        <h2>Core Loop</h2>
        <div class="icon-stack">
          <p><span class="stack-icon">01</span> Clicks farmen</p>
          <p><span class="stack-icon">02</span> Risiko spielen</p>
          <p><span class="stack-icon">03</span> Boost timen</p>
          <p><span class="stack-icon">04</span> Spot sichern</p>
        </div>
      </aside>
    </section>

    <section id="features" class="feature-grid" aria-label="Features">
      <article class="feature">
        <span class="feature-icon" aria-hidden="true">
          <i class="bi bi-lightning-charge-fill"></i>
        </span>
        <h3>Idle x Risk</h3>
        <p>Kurze Runden, hohe Peaks.</p>
      </article>
      <article class="feature">
        <span class="feature-icon" aria-hidden="true">
          <i class="bi bi-trophy-fill"></i>
        </span>
        <h3>Leaderboard</h3>
        <p>Session fuer Session pushen.</p>
      </article>
      <article class="feature">
        <span class="feature-icon" aria-hidden="true">
          <i class="bi bi-sliders2"></i>
        </span>
        <h3>Meta Builds</h3>
        <p>Upgrades + Timing = Unterschied.</p>
      </article>
      <article class="feature">
        <span class="feature-icon" aria-hidden="true">
          <i class="bi bi-device-hdd"></i>
        </span>
        <h3>Cross Session</h3>
        <p>Fortschritt bleibt im Flow.</p>
      </article>
    </section>

    <section id="stats" class="stats-wrap" aria-label="Globale Spielstatistiken">
      <div class="stats-head">
        <h2>Live aus der Backstube</h2>
        <p>Diese Zahlen kommen direkt aus den globalen Spiel-Daten.</p>
      </div>
      <div class="stats-grid">
        <div class="stat">
          <span class="stat-icon" aria-hidden="true">
            <i class="bi bi-people-fill"></i>
          </span>
          <span>Spieler gesamt</span>
          <strong>{format(data.stats.uniquePlayers)}</strong>
        </div>
        <div class="stat">
          <span class="stat-icon" aria-hidden="true">
            <i class="bi bi-mouse2-fill"></i>
          </span>
          <span>Klicks gesamt</span>
          <strong>{format(data.stats.totalClicks)}</strong>
        </div>
        <div class="stat">
          <span class="stat-icon" aria-hidden="true">
            <i class="bi bi-clock-history"></i>
          </span>
          <span>Sessions gesamt</span>
          <strong>{format(data.stats.totalSessions)}</strong>
        </div>
        <div class="stat">
          <span class="stat-icon" aria-hidden="true">
            <i class="bi bi-joystick"></i>
          </span>
          <span>Games gesamt</span>
          <strong>{format(data.stats.totalGamesPlayed)}</strong>
        </div>
        <div class="stat">
          <span class="stat-icon" aria-hidden="true">
            <i class="bi bi-box2-fill"></i>
          </span>
          <span>Lootboxen gesamt</span>
          <strong>{format(data.stats.totalLootboxesOpened)}</strong>
        </div>
        <div class="stat">
          <span class="stat-icon" aria-hidden="true">
            <i class="bi bi-cookie"></i>
          </span>
          <span>Kekse erzeugt</span>
          <strong>{format(data.stats.totalCookiesGenerated)}</strong>
        </div>
      </div>
      <p class="stats-meta">Letztes Update: {updatedAt}</p>
    </section>

    <section id="community" class="community">
      <h2>Community & Trash-Talk</h2>
      <p>Discord: schneller Austausch, Builds, Patch-Hot-Takes.</p>
      <div class="community-icons" aria-hidden="true">
        <span><i class="bi bi-chat-dots-fill"></i></span>
        <span><i class="bi bi-megaphone-fill"></i></span>
        <span><i class="bi bi-bezier2"></i></span>
        <span><i class="bi bi-trophy-fill"></i></span>
      </div>
      <div class="community-actions">
        <a href="https://discord.gg/jEpC5RJbuV" target="_blank" rel="noreferrer" class="btn btn-primary btn-discord">
          <i class="bi bi-discord" aria-hidden="true"></i>
          Discord beitreten
        </a>
        <a href="/game" data-sveltekit-reload class="btn btn-secondary">Direkt ins Spiel</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <p class="brand">gambleclicker.de</p>
      <p>Arcade Cookie Clicker mit Wettkampf-Fokus.</p>
      <div class="footer-links">
        <a href="/game" data-sveltekit-reload>Game</a>
        <a href="/game/leaderboard" data-sveltekit-reload>Leaderboard</a>
        <a href="https://discord.gg/jEpC5RJbuV" target="_blank" rel="noreferrer">Discord</a>
        <a href="/impressum" data-sveltekit-reload>Impressum</a>
        <a href="/datenschutz" data-sveltekit-reload>Datenschutz</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .landing-page {
    --bg-top: #fff2d6;
    --bg-bottom: #f3c784;
    --panel: #fffaf2;
    --line: #f0ca93;
    --text: #2a1407;
    --muted: #704127;
    --brand: #f05e23;
    --brand-2: #af3102;
    --brand-3: #ffd257;
    min-height: 100vh;
    color: var(--text);
    background:
      radial-gradient(circle at 10% -10%, #ffeac6 0%, transparent 45%),
      radial-gradient(circle at 100% 0, #ffd78d 0%, transparent 40%),
      linear-gradient(180deg, var(--bg-top), var(--bg-bottom));
    font-family: "Trebuchet MS", "Segoe UI", Tahoma, sans-serif;
    overflow-x: hidden;
  }

  .nav-wrap {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(10px);
    background: rgba(255, 240, 210, 0.72);
    border-bottom: 1px solid rgba(180, 97, 38, 0.16);
  }

  .nav {
    width: min(1100px, 94vw);
    margin: 0 auto;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .brand {
    font-weight: 900;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: inherit;
    text-transform: lowercase;
  }

  .nav-links {
    display: flex;
    gap: 18px;
  }

  .nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    transition: color 0.2s ease;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background: var(--brand);
    transition: width 0.2s ease;
  }

  .nav-links a:hover {
    color: #2c1202;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .nav-cta {
    text-decoration: none;
    color: #fff;
    background: linear-gradient(180deg, var(--brand), var(--brand-2));
    border-radius: 999px;
    padding: 10px 16px;
    font-weight: 700;
    box-shadow: 0 8px 22px rgba(140, 41, 4, 0.28);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .nav-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 28px rgba(140, 41, 4, 0.34);
  }

  .site-main {
    width: min(1100px, 94vw);
    margin: 22px auto 34px;
    display: grid;
    gap: 18px;
  }

  .hero {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 24px;
    box-shadow: 0 22px 50px rgba(92, 43, 4, 0.14);
    padding: clamp(18px, 3vw, 32px);
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 18px;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    animation: riseIn 700ms ease both;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: auto -16% -44% auto;
    width: 330px;
    height: 330px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(255, 210, 87, 0.8), rgba(255, 141, 46, 0.35) 65%, transparent 72%);
    z-index: -1;
    pointer-events: none;
    animation: pulseBlob 4.2s ease-in-out infinite;
  }

  .hero-noise {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 184, 118, 0.18) 1px, transparent 1px);
    background-size: 9px 9px;
    mix-blend-mode: multiply;
    opacity: 0.35;
    z-index: -2;
    pointer-events: none;
  }

  .hero h1 {
    margin: 0 0 8px;
    font-size: clamp(1.9rem, 4vw, 3rem);
    line-height: 1.04;
    text-wrap: balance;
  }

  .eyebrow {
    margin: 0;
    color: var(--brand-2);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.78rem;
  }

  .tagline {
    margin: 0;
    color: var(--muted);
    max-width: 48ch;
  }

  .hero-icons {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .icon-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #fff3e1;
    border: 1px solid #ebcfaa;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 0.78rem;
    font-weight: 700;
    color: #663d1e;
  }

  .icon-chip i {
    font-size: 0.86rem;
    color: #9a380b;
  }

  .hero-actions,
  .community-actions {
    margin-top: 14px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn {
    text-decoration: none;
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }

  .btn:hover {
    transform: translateY(-1px);
    filter: saturate(1.1);
  }

  .btn-primary {
    color: #fff;
    background: linear-gradient(180deg, var(--brand), var(--brand-2));
    box-shadow: 0 10px 24px rgba(134, 43, 8, 0.3);
  }

  .btn-secondary {
    color: var(--text);
    background: #f7ead7;
    border: 1px solid #e1c8a6;
  }

  .hero-card {
    background: #f9eddc;
    border: 1px solid #ecd3b2;
    border-radius: 16px;
    padding: 14px 16px;
    animation: riseIn 800ms ease 70ms both;
  }

  .hero-card h2 {
    margin: 0 0 8px;
    font-size: 1.1rem;
  }

  .icon-stack {
    display: grid;
    gap: 8px;
  }

  .icon-stack p {
    margin: 0;
    color: #5f462f;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  .stack-icon {
    width: 28px;
    height: 28px;
    border-radius: 9px;
    display: inline-grid;
    place-items: center;
    background: #ffe3bf;
    color: #8f340a;
    font-size: 0.74rem;
    font-weight: 900;
    letter-spacing: 0.05em;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  }

  .feature {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 14px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    animation: riseIn 700ms ease both;
  }

  .feature:nth-child(2) {
    animation-delay: 70ms;
  }

  .feature:nth-child(3) {
    animation-delay: 130ms;
  }

  .feature:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(120, 60, 15, 0.14);
  }

  .feature h3 {
    margin: 0 0 6px;
  }

  .feature p {
    margin: 0;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .feature-icon {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    display: inline-grid;
    place-items: center;
    margin-bottom: 10px;
    background: #ffe4b2;
    border: 1px solid #f0c98e;
  }

  .feature-icon i {
    font-size: 1rem;
    color: #953f0a;
  }

  .stats-wrap,
  .community {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: clamp(16px, 3vw, 24px);
    animation: riseIn 750ms ease both;
  }

  .stats-head h2,
  .community h2 {
    margin: 0 0 6px;
  }

  .stats-head p,
  .community p {
    margin: 0;
    color: var(--muted);
  }

  .stats-grid {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .stat {
    background: #fffaf5;
    border: 1px solid #f0dfcd;
    border-radius: 14px;
    padding: 10px 12px;
    display: grid;
    gap: 5px;
    transition: transform 0.2s ease;
  }

  .stat:hover {
    transform: translateY(-2px);
  }

  .stat span {
    font-size: 0.82rem;
    opacity: 0.78;
  }

  .stat-icon {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: #ffe8c7;
    border: 1px solid #f0cc98;
    margin-bottom: 1px;
  }

  .stat-icon i {
    font-size: 0.95rem;
    color: #8f3a0b;
  }

  .stat strong {
    font-size: 1.05rem;
  }

  .stats-meta {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 0.82rem;
  }

  .community-icons {
    margin-top: 10px;
    display: flex;
    gap: 8px;
  }

  .community-icons span {
    width: 36px;
    height: 36px;
    border-radius: 11px;
    display: grid;
    place-items: center;
    background: #ffeacf;
    border: 1px solid #e5c59a;
  }

  .community-icons i {
    font-size: 1rem;
    color: #953f0a;
  }

  .btn-discord {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-discord i {
    font-size: 1rem;
  }

  .site-footer {
    border-top: 1px solid rgba(120, 88, 53, 0.2);
    background: rgba(240, 222, 198, 0.62);
    padding: 18px 0 28px;
  }

  .footer-inner {
    width: min(1100px, 94vw);
    margin: 0 auto;
    display: grid;
    gap: 6px;
  }

  .footer-inner p {
    margin: 0;
    color: #654b33;
  }

  .footer-links {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .footer-links a {
    color: #5a4028;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: #2d1607;
  }

  @keyframes riseIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulseBlob {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.9;
    }
    50% {
      transform: scale(1.08);
      opacity: 0.65;
    }
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 780px) {
    .nav {
      flex-wrap: wrap;
      padding: 10px 0;
    }

    .nav-links {
      order: 3;
      width: 100%;
      justify-content: center;
    }

    .feature-grid,
    .stats-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 520px) {
    .feature-grid,
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
