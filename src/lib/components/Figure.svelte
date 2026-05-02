<script lang="ts">
  interface FigureProps {
    src: string;
    alt: string;
    caption?: string;
    fullwidth?: boolean;
    class?: string;
  }

  let { src, alt, caption, fullwidth = false, class: className = '' }: FigureProps = $props();
</script>

<figure class="my-10 {fullwidth ? 'fullwidth' : ''} {className}">
  <img
    {src}
    {alt}
    class="w-full block border border-ink-faint/40 dark:border-ink-dark-faint/40"
  />
  {#if caption}
    <figcaption class="mt-3 font-mono text-xs tracking-wide text-ink-muted dark:text-ink-dark-muted leading-relaxed">
      <span class="text-ink-faint dark:text-ink-dark-faint mr-2">Fig.</span>{caption}
    </figcaption>
  {/if}
</figure>

<style>
  .fullwidth {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .fullwidth img {
    border-left: none;
    border-right: none;
  }
</style>