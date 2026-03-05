<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let open = false;
  export let loading = false;

  let playerName = "";
  const dispatch = createEventDispatcher<{ submit: { playerName: string } }>();

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (!playerName.trim() || loading) return;
    dispatch("submit", { playerName: playerName.trim() });
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50 grid place-items-center bg-zinc-950/90 p-4">
    <form on:submit={handleSubmit} class="glass w-full max-w-md space-y-4 p-6">
      <h2 class="text-xl font-semibold">Willkommen bei HETHEY</h2>
      <p class="text-sm text-zinc-300">Bitte waehle beim ersten Start deinen Playernamen fuer globale Statistiken und Leaderboard.</p>
      <input
        bind:value={playerName}
        maxlength="24"
        placeholder="Dein Playername"
        class="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none ring-brand-500 focus:ring-2"
      />
      <button
        type="submit"
        disabled={loading || !playerName.trim()}
        class="w-full rounded-xl bg-brand-500 px-4 py-3 font-semibold text-black disabled:opacity-60"
      >
        {loading ? "Registriere..." : "Starten"}
      </button>
    </form>
  </div>
{/if}
