<script lang="ts">
  import { projects } from '$lib/data/projects';
  import type { ProjectType } from '$lib/data/projects';

  const STORAGE_KEY = 'projects-view';

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

  const typeLabels: Record<ProjectType, string> = {
    software: 'software',
    game:     'game',
    tool:     'tool',
    library:  'library',
  };
</script>

<main class="max-w-2xl mx-auto px-8 py-16">

  <div class="flex items-baseline justify-between mb-2">
    <h1 class="font-display text-4xl text-ink dark:text-ink-dark">Projects</h1>
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

  <p class="font-mono text-xs tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted mb-16">§ 03</p>

  {#if projects.length === 0}
    <p class="font-mono text-xs tracking-widest text-ink-muted dark:text-ink-dark-muted text-center py-16">
      — nothing here yet —
    </p>

  {:else if view === 'expanded'}
    <ul class="list-none p-0 m-0">
      {#each projects as project, i (project.title)}
        <li class="relative border-t border-ink-faint dark:border-ink-dark-faint py-12 overflow-hidden">

          <!-- Decorative section number -->
          <span class="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[8rem] leading-none text-ink/[0.04] dark:text-ink-dark/[0.04] select-none pointer-events-none">
            §{String(i + 1).padStart(2, '0')}
          </span>

          <!-- Type tag -->
          <span class="font-mono text-[10px] tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted mb-3 block">
            {typeLabels[project.type]}
          </span>

          <!-- Title -->
          <h2 class="font-display text-2xl text-ink dark:text-ink-dark leading-snug mb-4 relative">
            {project.title}
          </h2>

          <!-- Description -->
          <p class="font-body italic text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed mb-6 relative max-w-lg">
            {project.description}
          </p>

          <!-- Links -->
          <div class="flex items-center gap-6 relative">
            {#each project.links as link (link.label)}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
              >
                {link.label} ↗
              </a>
            {/each}
          </div>

        </li>
      {/each}
      <li class="border-t border-ink-faint dark:border-ink-dark-faint"></li>
    </ul>

  {:else}
    <ul class="list-none p-0 m-0 divide-y divide-ink-faint dark:divide-ink-dark-faint">
      {#each projects as project (project.title)}
        <li class="py-4 flex items-baseline justify-between gap-6">
          <div class="flex items-baseline gap-4 min-w-0">
            <span class="font-mono text-[10px] tracking-widest uppercase text-ink-muted dark:text-ink-dark-muted shrink-0">
              {typeLabels[project.type]}
            </span>
            <span class="font-display text-lg text-ink dark:text-ink-dark truncate">
              {project.title}
            </span>
          </div>
          <div class="flex items-center gap-4 shrink-0">
            {#each project.links as link (link.label)}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-xs lowercase tracking-widest text-ink-muted dark:text-ink-dark-muted border-b border-ink-faint dark:border-ink-dark-faint hover:text-ink dark:hover:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors pb-px"
              >
                {link.label} ↗
              </a>
            {/each}
          </div>
        </li>
      {/each}
      <li class="border-t border-ink-faint dark:border-ink-dark-faint"></li>
    </ul>
  {/if}

</main>