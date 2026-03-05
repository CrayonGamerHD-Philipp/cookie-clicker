<script lang="ts">
  export let cookies = 0;
  export let clicks = 0;
  export let totalGames = 0;
  export let playerName = "";

  const format = (value: number) =>
    new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(value));
</script>

<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
  <div class="glass p-4">
    <p class="text-xs uppercase tracking-wider text-zinc-400">Player</p>
    <p class="mt-1 text-lg font-semibold">{playerName || "-"}</p>
  </div>
  <div class="glass p-4">
    <p class="text-xs uppercase tracking-wider text-zinc-400">Aktuelle Kekse</p>
    <p class="mt-1 text-lg font-semibold">{format(cookies)}</p>
  </div>
  <div class="glass p-4">
    <p class="text-xs uppercase tracking-wider text-zinc-400">Klicks</p>
    <p class="mt-1 text-lg font-semibold">{format(clicks)}</p>
  </div>
  <div class="glass p-4">
    <p class="text-xs uppercase tracking-wider text-zinc-400">Games gespielt</p>
    <p class="mt-1 text-lg font-semibold">{format(totalGames)}</p>
  </div>
</div>
