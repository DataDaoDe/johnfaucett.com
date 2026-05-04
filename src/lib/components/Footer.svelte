<script lang="ts">
  import { theme } from '$lib/theme.svelte';

  function resetTheme() {
    theme.reset();
  }

  const systemLabel = $derived(
    theme.userOverride ? 'use system theme' : 'following system'
  );
</script>

<footer class="border-t border-ink-faint dark:border-ink-dark-faint mt-auto">
  <div class="max-w-2xl mx-auto px-8 py-6 flex justify-between items-center">
    <span class="font-mono text-xs tracking-widest text-ink-muted dark:text-ink-dark-muted">
      © {new Date().getFullYear()} John Faucett
    </span>
    <button
      onclick={resetTheme}
      class="font-mono text-xs tracking-widest lowercase text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark transition-colors cursor-pointer"
    >
      {systemLabel}
    </button>
  </div>
</footer>