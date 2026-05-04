<script lang="ts">
  import { research } from '$lib/data/research';
  import type { ResearchEntry } from '$lib/data/research';

  const ABSTRACT_LIMIT = 280;

  let expanded = $state<Set<number>>(new Set());

  function toggle(index: number) {
    const next = new Set(expanded);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    expanded = next;
  }

  function isLong(entry: ResearchEntry): boolean {
    return entry.abstract.length > ABSTRACT_LIMIT;
  }

  function displayAbstract(entry: ResearchEntry, index: number): string {
    if (!isLong(entry) || expanded.has(index)) return entry.abstract;
    return entry.abstract.slice(0, ABSTRACT_LIMIT).trimEnd() + '…';
  }
</script>

<main class="max-w-2xl mx-auto px-8 py-16">

  <h1 class="font-display text-4xl text-ink dark:text-ink-dark mb-2">Research</h1>
  <p class="font-mono text-xs tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted mb-16">§ 02</p>

  <ul class="list-none p-0 m-0 divide-y divide-ink-faint dark:divide-ink-dark-faint">
    {#each research as entry, i (i)}
      <li class="py-10">
        <div class="flex items-baseline justify-between gap-4 mb-3">
          <h2 class="font-display text-2xl text-ink dark:text-ink-dark leading-snug">
            {entry.title}
          </h2>
          <span class="font-mono text-xs text-ink-muted dark:text-ink-dark-muted shrink-0">
            {entry.year}
          </span>
        </div>

        <div class="flex items-center gap-3 mb-5 flex-wrap">
          <span class="font-mono text-[10px] tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted">
            {entry.status}
          </span>
          {#if entry.coauthors && entry.coauthors.length > 0}
            <span class="font-mono text-[10px] text-ink-muted dark:text-ink-dark-muted">·</span>
            <span class="font-body italic text-sm text-ink-muted dark:text-ink-dark-muted">
              with {entry.coauthors.join(', ')}
            </span>
          {/if}
        </div>

        <p class="font-body text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed mb-1">
          {displayAbstract(entry, i)}
        </p>

        {#if isLong(entry)}
          <button
            onclick={() => toggle(i)}
            class="font-mono text-[10px] tracking-widest lowercase text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark transition-colors mb-5 cursor-pointer"
          >
            {expanded.has(i) ? '— read less' : '+ read more'}
          </button>
        {/if}

        <div class="flex items-center gap-6 mt-4">
          {#if entry.github}
            <a
              href={entry.github}
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
            >
              github ↗
            </a>
          {/if}
          {#if entry.arxiv}
            <a
              href={entry.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
            >
              arxiv ↗
            </a>
          {/if}
          {#if entry.pdf}
            <a
              href={entry.pdf}
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
            >
              pdf ↗
            </a>
          {/if}
        </div>

      </li>
    {/each}
  </ul>

</main>