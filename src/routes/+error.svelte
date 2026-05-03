<script lang="ts">
  import { page } from '$app/state';
</script>

<main class="max-w-2xl mx-auto px-8 py-24">
  <p class="font-mono text-xs tracking-widest uppercase text-ink-faint dark:text-ink-dark-faint mb-6">
    Error {page.status}
  </p>
  <h1 class="font-display text-6xl text-ink dark:text-ink-dark leading-tight mb-8">
    {#if page.status === 404}
      Page not<br />found.
    {:else}
      Something<br />went wrong.
    {/if}
  </h1>
  <p class="font-body italic text-lg text-ink-muted dark:text-ink-dark-muted mb-12">
    {#if page.status === 404}
      This page doesn't exist or has been moved.
    {:else}
      {page.error?.message ?? 'An unexpected error occurred.'}
    {/if}
  </p>
  <a
    href="/"
    class="font-mono text-xs tracking-widest lowercase text-ink-muted dark:text-ink-dark-muted border border-ink-faint/40 dark:border-ink-dark-faint/40 px-4 py-2 hover:text-ink dark:hover:text-ink-dark hover:border-ink-muted dark:hover:border-ink-dark-muted transition-colors"
  >
    ← return home
  </a>
</main>