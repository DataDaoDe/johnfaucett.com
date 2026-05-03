<script lang="ts">
</script>

<main class="max-w-2xl mx-auto px-8">

  <section class="py-24 pb-20">
    <h1 class="font-display text-6xl text-ink dark:text-ink-dark leading-tight mb-8">
      John<br />Faucett
    </h1>
    <p class="font-body italic text-lg text-ink-muted dark:text-ink-dark-muted mb-12 leading-relaxed">
      Builder &amp; artist.<br />
      Mathematics, ideas, and the things I make.
    </p>
    <span class="font-mono text-xs tracking-widest uppercase dark:text-ink-dark-faint border-t border-ink-faint/40 dark:border-ink-dark-faint/40 pt-4 inline-block">
      programmer · artist · explorer
    </span>
  </section>

  <div class="grid grid-cols-2 border border-ink-faint/40 dark:border-ink-dark-faint/40 mb-24">
    {#each [
      { id: 1, href: '/writing',  label: 'Writing',  section: '§ 01', desc: 'Essays, notes, ideas, and everything in between' },
      { id: 2, href: '/research',  label: 'Research',  section: '§ 02', desc: 'Mathematics papers and formal work' },
      { id: 3, href: '/projects',  label: 'Projects',  section: '§ 03', desc: 'Things I am building' },
      { id: 4, href: '/youtube',   label: 'YouTube',   section: '§ 04', desc: 'Videos and visual mathematics' },
    ] as card (card.id)}
      <a
        href={card.href}
        class="block p-7 border-ink-faint/40 dark:border-ink-dark-faint/40 hover:bg-ink-faint/20 dark:hover:bg-ink-dark-faint/20 transition-colors
          {card.id === 1 || card.id === 2 ? 'border-b' : ''}
          {card.id === 1 || card.id === 3 ? 'border-r' : ''}"
      >
        <span class="font-mono text-[10px] tracking-widest uppercase dark:text-ink-dark-faint mb-2 block">
          {card.section}
        </span>
        <span class="font-display text-xl text-ink dark:text-ink-dark block mb-1">
          {card.label}
        </span>
        <span class="font-body italic text-sm text-ink-muted dark:text-ink-dark-muted leading-snug block">
          {card.desc}
        </span>
      </a>
    {/each}
  </div>

</main>