<script lang="ts">
  import { page } from '$app/state';
  import { theme } from '$lib/theme.svelte';

  const links = [
    { id: 1, href: '/writing',  label: 'writing' },
    { id: 2, href: '/research', label: 'research' },
    { id: 3, href: '/projects', label: 'projects' },
    { id: 4, href: '/youtube',  label: 'youtube' },
  ];
</script>

<nav class="border-b border-ink-faint dark:border-ink-dark-faint">
  <div class="max-w-2xl mx-auto px-8 py-6 flex justify-between items-baseline">
    <a  
      href="/"
      class="font-display text-base text-ink dark:text-ink-dark tracking-wide hover:opacity-70 transition-opacity"
    >
      John Faucett
    </a>

    <div class="flex items-center gap-8">
      {#each links as link (link.id)}
        <a
          href={link.href}
          class="font-mono text-xs tracking-widest lowercase transition-colors
            {page.url.pathname === link.href
              ? 'text-ink dark:text-ink-dark'
              : 'text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark'}"
        >
          {link.label}
        </a>
      {/each}

      <button
        onclick={theme.toggle}
        aria-label={theme.dark ? 'Switch to light mode' : 'Switch to dark mode'}
        class="font-mono text-xs tracking-widest lowercase text-ink-muted dark:text-ink-dark-muted border border-ink-faint dark:border-ink-dark-faint px-3 py-1 hover:text-ink dark:hover:text-ink-dark hover:border-ink-muted dark:hover:border-ink-dark-muted transition-colors cursor-pointer"
      >
        {theme.dark ? 'light' : 'dark'}
      </button>
    </div>

  </div>
</nav>