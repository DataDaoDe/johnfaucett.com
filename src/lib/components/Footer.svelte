<script lang="ts">
  import { theme } from '$lib/theme.svelte';

  function resetTheme() {
    theme.reset();
  }

  const systemLabel = $derived(
    theme.userOverride ? 'use system theme' : 'following system'
  );
</script>

<footer class="border-t border-ink-faint/40 dark:border-ink-dark-faint/40 mt-auto">
  <div class="max-w-2xl mx-auto px-8 py-6 flex justify-between items-center">
    <span class="font-mono text-xs tracking-widest dark:text-ink-dark-faint">
      © {new Date().getFullYear()} John Faucett
    </span>
    <button
      onclick={resetTheme}
      class="font-mono text-xs tracking-widest lowercase dark:text-ink-dark-faint hover:text-ink-muted dark:hover:text-ink-dark-muted transition-colors cursor-pointer"
    >
      {systemLabel}
    </button>
  </div>
</footer>