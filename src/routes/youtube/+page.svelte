<script lang="ts">
  import { channel, videos } from '$lib/data/youtube';
  import type { VideoCategory } from '$lib/data/youtube';

  const STORAGE_KEY = 'youtube-view';

  type ViewMode = 'expanded' | 'compact';

  let view = $state<ViewMode>('expanded');

  $effect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
    if (saved === 'compact' || saved === 'expanded') {
      view = saved;
    }
  });

  function setView(v: ViewMode) {
    view = v;
    localStorage.setItem(STORAGE_KEY, v);
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
</script>

<main class="max-w-2xl mx-auto px-8 py-16">

  <!-- Header -->
  <h1 class="font-display text-4xl text-ink dark:text-ink-dark mb-2">YouTube</h1>
  <p class="font-mono text-xs tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted mb-16">§ 04</p>

  <!-- Channel block -->
  <div class="border-t border-b border-ink-faint dark:border-ink-dark-faint py-8 mb-16">
    <div class="flex items-baseline justify-between gap-4 mb-4">
      <span class="font-display text-xl text-ink dark:text-ink-dark">
        {channel.name}
      </span>
      <span class="font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
        {channel.handle}
      </span>
    </div>
    <p class="font-body italic text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed mb-6">
      {channel.description}
    </p>
    <div class="flex items-center gap-6">
      <a
        href={channel.url}
        target="_blank"
        rel="noopener noreferrer"
        class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
      >
        visit channel ↗
      </a>
      <div class="flex items-center gap-2 flex-wrap">
        {#each channel.categories as cat (cat)}
          <span class="font-mono text-[10px] tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted">
            {cat}
          </span>
          {#if cat !== channel.categories[channel.categories.length - 1]}
            <span class="text-ink-faint dark:text-ink-dark-faint font-mono text-[10px]">·</span>
          {/if}
        {/each}
      </div>
    </div>
  </div>

  <!-- Videos header -->
  <div class="flex items-baseline justify-between mb-12">
    <h2 class="font-display text-2xl text-ink dark:text-ink-dark">Videos</h2>
    <div class="flex items-center gap-3 font-mono text-[10px] tracking-widest lowercase">
      <button
        onclick={() => setView('expanded')}
        class="transition-colors cursor-pointer {view === 'expanded'
          ? 'text-ink dark:text-ink-dark'
          : 'text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark'}"
      >
        expanded
      </button>
      <span class="text-ink-faint dark:text-ink-dark-faint">·</span>
      <button
        onclick={() => setView('compact')}
        class="transition-colors cursor-pointer {view === 'compact'
          ? 'text-ink dark:text-ink-dark'
          : 'text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark'}"
      >
        compact
      </button>
    </div>
  </div>

  {#if videos.length === 0}
    <p class="font-mono text-xs tracking-widest text-ink-muted dark:text-ink-dark-muted text-center py-16">
      — nothing here yet —
    </p>

  {:else if view === 'expanded'}
    <ul class="list-none p-0 m-0">
      {#each videos as video, i (video.id)}
        <li class="relative border-t border-ink-faint dark:border-ink-dark-faint py-12 overflow-hidden">

          <!-- Decorative section number -->
          <span class="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[8rem] leading-none text-ink/[0.04] dark:text-ink-dark/[0.04] select-none pointer-events-none">
            §{String(i + 1).padStart(2, '0')}
          </span>

          <!-- Category + date -->
          <div class="flex items-center gap-3 mb-3">
            <span class="font-mono text-[10px] tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted">
              {video.category}
            </span>
            <span class="text-ink-faint dark:text-ink-dark-faint font-mono text-[10px]">·</span>
            <span class="font-mono text-[10px] tracking-wide text-ink-muted dark:text-ink-dark-muted">
              {formatDate(video.date)}
            </span>
          </div>

          <!-- Title -->
          <h3 class="font-display text-2xl text-ink dark:text-ink-dark leading-snug mb-4 relative">
            {video.title}
          </h3>

          <!-- Description -->
          <p class="font-body italic text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed mb-6 relative max-w-lg">
            {video.description}
          </p>

          <!-- Link -->
          <div class="relative">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
            >
              watch ↗
            </a>
          </div>

        </li>
      {/each}
      <li class="border-t border-ink-faint dark:border-ink-dark-faint"></li>
    </ul>

  {:else}
    <ul class="list-none p-0 m-0 divide-y divide-ink-faint dark:divide-ink-dark-faint">
      {#each videos as video (video.id)}
        <li class="py-4 flex items-baseline justify-between gap-6">
          <div class="flex items-baseline gap-4 min-w-0">
            <span class="font-mono text-[10px] tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted shrink-0">
              {video.category}
            </span>
            <span class="font-display text-lg text-ink dark:text-ink-dark truncate">
              {video.title}
            </span>
            <span class="font-mono text-[10px] text-ink-muted dark:text-ink-dark-muted shrink-0">
              {formatDate(video.date)}
            </span>
          </div>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px shrink-0"
          >
            watch ↗
          </a>
        </li>
      {/each}
      <li class="border-t border-ink-faint dark:border-ink-dark-faint"></li>
    </ul>
  {/if}

</main>