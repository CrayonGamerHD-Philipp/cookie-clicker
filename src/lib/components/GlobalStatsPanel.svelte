<script lang="ts">
  export let stats = {
    uniquePlayers: 0,
    totalSessions: 0,
    totalClicks: 0,
    totalGamesPlayed: 0,
    totalLootboxesOpened: 0,
    totalCookiesGenerated: 0
  };
  export let status = "Wird geladen...";

  const format = (value: number) => new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(value));
</script>

<section class="glass space-y-3 p-4">
  <h3 class="text-lg font-semibold">Globale Server-Statistik</h3>
  <div class="grid gap-2 text-sm sm:grid-cols-2">
    <p>Spieler: <strong>{format(stats.uniquePlayers)}</strong></p>
    <p>Sessions: <strong>{format(stats.totalSessions)}</strong></p>
    <p>Klicks: <strong>{format(stats.totalClicks)}</strong></p>
    <p>Games: <strong>{format(stats.totalGamesPlayed)}</strong></p>
    <p>Lootboxes: <strong>{format(stats.totalLootboxesOpened)}</strong></p>
    <p>Kekse erzeugt: <strong>{format(stats.totalCookiesGenerated)}</strong></p>
  </div>
  <p class="text-xs text-zinc-400">Status: {status}</p>
</section>
