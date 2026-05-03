<script lang="ts">
  import type { PageData } from './$types';
  import type { WritingMeta, WritingType } from '$lib/content';

  let { data }: { data: PageData } = $props();

  type SortOrder = 'newest' | 'oldest' | 'az';

  let query = $state('');
  let sort = $state<SortOrder>('newest');

  const typeOrder: WritingType[] = [
    'essay', 'exploration', 'note', 'poem', 'review', 'series-part', 'story'
  ];

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  const filtered = $derived.by(() => {
    const q = query.trim().toLowerCase();

    let results = data.writing.filter(entry => {
      if (!q) return true;
      const inTitle = entry.title.toLowerCase().includes(q);
      const inTags = entry.tags?.some(t => t.toLowerCase().includes(q));
      return inTitle || inTags;
    });

    if (sort === 'newest') {
      results = results.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sort === 'oldest') {
      results = results.sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sort === 'az') {
      results = results.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return results;
  });
</script>

<main class="max-w-2xl mx-auto px-8 py-16">

  <h1 class="font-display text-4xl text-ink dark:text-ink-dark mb-2">Writing</h1>
  <p class="font-mono text-xs tracking-widest uppercase text-ink-faint dark:text-ink-dark-faint mb-12">§ 01</p>

  <!-- Search and sort bar -->
  <div class="flex items-center gap-4 mb-12 border-b border-ink-faint/40 dark:border-ink-dark-faint/40 pb-6">
    <input
      type="text"
      placeholder="search titles and tags..."
      bind:value={query}
      class="flex-1 font-mono text-xs tracking-wide bg-transparent text-ink dark:text-ink-dark placeholder:text-ink-faint dark:placeholder:text-ink-dark-faint border-none outline-none"
    />
    <select
      bind:value={sort}
      class="font-mono text-xs tracking-widest lowercase bg-transparent text-ink-muted dark:text-ink-dark-muted border-none outline-none cursor-pointer"
    >
      <option value="newest">newest</option>
      <option value="oldest">oldest</option>
      <option value="az">a → z</option>
    </select>
  </div>

  <!-- Entry list -->
  {#if filtered.length === 0}
    <p class="font-mono text-xs tracking-widest text-ink-faint dark:text-ink-dark-faint text-center py-16">
      — no results —
    </p>
  {:else}
    <ul class="list-none p-0 m-0 divide-y divide-ink-faint/30 dark:divide-ink-dark-faint/30">
      {#each filtered as entry (entry.slug)}
        <li class="py-5 flex flex-col gap-1">
          <div class="flex items-baseline justify-between gap-4">
            <a
              href="/writing/{entry.slug}"
              class="font-body text-lg text-ink dark:text-ink-dark hover:opacity-60 transition-opacity leading-snug"
            >
              {entry.title}
            </a>
            <span class="font-mono text-xs text-ink-faint dark:text-ink-dark-faint shrink-0">
              {formatDate(entry.date)}
            </span>
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <span class="font-mono text-[10px] tracking-widest uppercase text-ink-faint dark:text-ink-dark-faint">
              {entry.type}
            </span>
            {#if entry.tags && entry.tags.length > 0}
              <span class="text-ink-faint dark:text-ink-dark-faint font-mono text-[10px]">·</span>
              {#each entry.tags as tag (tag)}
                <span class="font-mono text-[10px] tracking-wide text-ink-muted dark:text-ink-dark-muted">
                  {tag}
                </span>
              {/each}
            {/if}
          </div>
        </li>
      {/each}
    </ul>
  {/if}

</main>