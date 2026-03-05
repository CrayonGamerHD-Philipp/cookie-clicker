<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let perClick = 1;
  export let cookies = 0;
  export let status = "Bereit zum Klick";

  const dispatch = createEventDispatcher<{ click: void }>();
  const format = (value: number) => new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.floor(value));
</script>

<section class="glass space-y-4 p-6">
  <div>
    <p class="text-xs uppercase tracking-wider text-zinc-400">Cookie Core</p>
    <h2 class="text-2xl font-semibold">{format(cookies)} Kekse</h2>
    <p class="text-sm text-zinc-300">+{format(perClick)} pro Klick</p>
  </div>
  <button
    on:click={() => dispatch("click")}
    class="h-36 w-36 rounded-full border-4 border-brand-200/60 bg-gradient-to-br from-brand-200 to-brand-500 text-xl font-black text-zinc-950 shadow-lg shadow-brand-900/40 transition hover:scale-105"
  >
    KLICK
  </button>
  <p class="text-sm text-zinc-300">{status}</p>
</section>
