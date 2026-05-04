<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    caption?: string;
    fullwidth?: boolean;
    class?: string;
  }

  let { src, alt, caption, fullwidth = false, class: className = '' }: Props = $props();
</script>

<figure class="my-10 {fullwidth ? 'fullwidth' : ''} {className}">
  <img
    {src}
    {alt}
    class="w-full block border border-ink-faint dark:border-ink-dark-faint"
  />
  {#if caption}
    <figcaption class="mt-3 font-mono text-xs tracking-wide text-ink-muted dark:text-ink-dark-muted leading-relaxed">
      <span class="text-ink-muted dark:text-ink-dark-muted mr-2">Fig.</span>{caption}
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