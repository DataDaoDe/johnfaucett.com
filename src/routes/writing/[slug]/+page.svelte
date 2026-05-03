<script lang="ts">
  import type { PageData } from './$types';
  import Prose from '$lib/components/Prose.svelte';

  let { data }: { data: PageData } = $props();

  const { metadata, component: Content } = data;

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
</script>

<main class="max-w-2xl mx-auto px-8 py-16">
  <header class="mb-12 pb-8 border-b border-ink-faint/40 dark:border-ink-dark-faint/40">
    <div class="flex items-center gap-3 mb-6">
      <span class="font-mono text-[10px] tracking-widest uppercase text-ink-faint dark:text-ink-dark-faint">
        {metadata.type}
      </span>
      {#if metadata.tags && metadata.tags.length > 0}
        <span class="font-mono text-[10px] text-ink-faint dark:text-ink-dark-faint">·</span>
        {#each metadata.tags as tag (tag)}
          <span class="font-mono text-[10px] tracking-wide text-ink-muted dark:text-ink-dark-muted">
            {tag}
          </span>
        {/each}
      {/if}
    </div>

    <h1 class="font-display text-4xl text-ink dark:text-ink-dark leading-tight mb-4">
      {metadata.title}
    </h1>

    {#if metadata.summary}
      <p class="font-body italic text-ink-muted dark:text-ink-dark-muted text-lg leading-relaxed mb-6">
        {metadata.summary}
      </p>
    {/if}

    <div class="flex items-center justify-between">
      <span class="font-mono text-xs text-ink-faint dark:text-ink-dark-faint tracking-wide">
        {formatDate(metadata.date)}
      </span>
      {#if metadata.type === 'series-part' && metadata.series && metadata.series_part}
        <span class="font-mono text-xs text-ink-faint dark:text-ink-dark-faint tracking-widest uppercase">
          part {metadata.series_part}
        </span>
      {/if}
    </div>
  </header>

  <Prose>
    <Content />
  </Prose>

  <footer class="mt-16 pt-8 border-t border-ink-faint/40 dark:border-ink-dark-faint/40 flex justify-between items-center">
    <a
      href="/writing"
      class="font-mono text-xs tracking-widest lowercase text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark transition-colors"
    >
      ← writing
    </a>
    {#if metadata.type === 'series-part' && metadata.series}
      <a
        href="/writing/series/{metadata.series}"
        class="font-mono text-xs tracking-widest lowercase text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark transition-colors"
      >
        series index →
      </a>
    {/if}
  </footer>

</main>