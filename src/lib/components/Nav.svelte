<script lang="ts">
  import { theme } from '$lib/theme.svelte';
  import { page } from '$app/state';

  const links = [
    { id: 1, href: '/writing',  label: 'writing' },
    { id: 2, href: '/research', label: 'research' },
    { id: 3, href: '/projects', label: 'projects' },
    { id: 4, href: '/youtube',  label: 'youtube' },
  ];
</script>

<nav class="border-b border-ink-faint/40 dark:border-ink-dark-faint/40">
  <div class="max-w-2xl mx-auto px-8 py-6 flex justify-between items-baseline">

    <a
      href={"/"}
      class="font-display text-base text-ink dark:text-ink-dark tracking-wide hover:opacity-70 transition-opacity"
    >
      John Faucett
    </a>

    <div class="flex items-center gap-8">
      <ul class="flex gap-8 list-none">
        {#each links as link (link.id)}
          <li>
            <a
              href={link.href}
              class="font-mono text-xs tracking-widest lowercase transition-colors
            {page.url.pathname === link.href
              ? 'text-ink dark:text-ink-dark'
              : 'text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark'}"
        >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>

      <button
        onclick={theme.toggle}
        aria-label={theme.dark ? 'Switch to light mode' : 'Switch to dark mode'}
        class="font-mono text-xs tracking-widest lowercase dark:text-ink-dark-faint border border-ink-faint dark:border-ink-dark-faint/40 px-3 py-1 hover:text-ink dark:hover:text-ink-dark hover:border-ink-muted dark:hover:border-ink-dark-muted transition-colors cursor-pointer"
      >
        {theme.dark ? 'light' : 'dark'}
      </button>
    </div>

  </div>
</nav>