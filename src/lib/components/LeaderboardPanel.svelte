<script lang="ts">
  export let entries: Array<{
    playerName: string;
    bestScore: number;
    lastScore: number;
    totalClicks: number;
    totalGames: number;
  }> = [];

  const format = (value: number) => new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(value));
</script>

<section class="glass space-y-3 p-4">
  <h3 class="text-lg font-semibold">Global Leaderboard</h3>
  {#if !entries.length}
    <p class="text-sm text-zinc-400">Noch keine Eintraege.</p>
  {:else}
    <div class="space-y-2">
      {#each entries as entry, index}
        <div class="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm">
          <p><span class="text-zinc-400">#{index + 1}</span> {entry.playerName}</p>
          <p class="font-semibold">{format(entry.bestScore)}</p>
        </div>
      {/each}
    </div>
  {/if}
</section>
