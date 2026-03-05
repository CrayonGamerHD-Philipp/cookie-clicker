<svelte:head>
  <title>Impressum | gambleclicker.de</title>
  <meta name="description" content="Impressum von gambleclicker.de" />
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="grain"></div>
<div class="legal-layout">
  <header class="nav-wrap">
    <nav class="nav">
      <a href="/" class="brand">gambleclicker.de</a>
      <div class="nav-links">
        <a href="/game" data-sveltekit-reload>Game</a>
        <a href="/game/leaderboard" data-sveltekit-reload>Leaderboard</a>
        <a href="/datenschutz" data-sveltekit-reload>Datenschutz</a>
      </div>
      <a href="/game" data-sveltekit-reload class="nav-cta">Jetzt spielen</a>
    </nav>
  </header>

  <div class="legal-page">
    <main class="legal-shell">
      <p class="eyebrow">Rechtliches</p>
      <h1>Impressum</h1>

      <section>
        <h2 id="m46">Diensteanbieter</h2>
        <p>
          Philipp Hethey<br />
          Rockwinkeler Heerstr. 150<br />
          28355 Bremen
        </p>
      </section>

      <section>
        <h2 id="m56">Kontaktmoeglichkeiten</h2>
        <p>E-Mail-Adresse: gambleclicker[at]hethey-bremen.de</p>
      </section>

      <section>
        <h2 id="m3589">Audiovisuelle Mediendienste</h2>
        <p>Sitzland: Deutschland.</p>
        <p>
          Zustaendige Regulierungs-, bzw. Aufsichtsbehoerde: Bremische Landesmedienanstalt (brema),
          <a href="https://www.bremische-landesmedienanstalt.de/" target="_blank" rel="noreferrer">https://www.bremische-landesmedienanstalt.de/</a>
        </p>
      </section>

      <p class="legal-meta">
        <a
          href="https://datenschutz-generator.de/"
          title="Rechtstext von Dr. Schwenke - fuer weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
        </a>
      </p>

      <a href="/" data-sveltekit-reload class="legal-back">Zur Startseite</a>
    </main>
  </div>

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
  .legal-layout {
    --bg-top: #fff2d6;
    --bg-bottom: #f3c784;
    --panel: #fffaf2;
    --line: #f0ca93;
    --text: #2a1407;
    --muted: #704127;
    --brand: #f05e23;
    --brand-2: #af3102;
    min-height: 100vh;
    color: var(--text);
    background:
      radial-gradient(circle at 10% -10%, #ffeac6 0%, transparent 45%),
      radial-gradient(circle at 100% 0, #ffd78d 0%, transparent 40%),
      linear-gradient(180deg, var(--bg-top), var(--bg-bottom));
    font-family: "Trebuchet MS", "Segoe UI", Tahoma, sans-serif;
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
  }

  .nav-cta {
    text-decoration: none;
    color: #fff;
    background: linear-gradient(180deg, var(--brand), var(--brand-2));
    border-radius: 999px;
    padding: 10px 16px;
    font-weight: 700;
  }

  .legal-page {
    min-height: calc(100vh - 140px);
    padding: 24px;
  }

  .legal-shell {
    width: min(860px, 100%);
    margin: 0 auto;
    background: var(--panel);
    border: 1px solid #ead3b6;
    border-radius: 20px;
    padding: clamp(18px, 3vw, 30px);
    box-shadow: 0 14px 30px rgba(58, 32, 12, 0.14);
    display: grid;
    gap: 14px;
  }

  h1,
  h2,
  p {
    margin: 0;
  }

  section {
    display: grid;
    gap: 6px;
  }

  .eyebrow {
    margin: 0;
    color: #8a3c12;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.76rem;
  }

  .legal-meta {
    opacity: 0.75;
    font-size: 0.9rem;
  }

  .legal-back {
    justify-self: start;
    text-decoration: none;
    font-weight: 700;
    color: #5f3117;
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
  }
</style>
