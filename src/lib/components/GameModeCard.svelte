<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { GameMode } from "$lib/game/modes";

  export let title = "";
  export let description = "";
  export let mode: GameMode;
  export let minBet = 1;
  export let cookies = 0;
  export let gameCount = 0;

  let bet = minBet;
  const inputId = `bet-${mode}`;
  const dispatch = createEventDispatcher<{ play: { mode: GameMode; bet: number } }>();
  const format = (value: number) => new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(value));
</script>

<article class="glass space-y-3 p-4">
  <div>
    <h3 class="text-lg font-semibold">{title}</h3>
    <p class="text-sm text-zinc-300">{description}</p>
  </div>
  <div class="space-y-2">
    <label for={inputId} class="text-xs uppercase tracking-wider text-zinc-400">Einsatz</label>
    <input
      id={inputId}
      type="number"
      min={minBet}
      step="1"
      bind:value={bet}
      class="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2"
    />
  </div>
  <div class="flex items-center justify-between text-sm text-zinc-300">
    <span>Runden: {format(gameCount)}</span>
    <span>Min: {format(minBet)}</span>
  </div>
  <button
    on:click={() => dispatch("play", { mode, bet: Math.max(minBet, Math.floor(Number(bet) || 0)) })}
    disabled={cookies < minBet}
    class="w-full rounded-xl bg-brand-500 px-3 py-2 font-semibold text-zinc-950 disabled:opacity-60"
  >
    Spielen
  </button>
</article>
