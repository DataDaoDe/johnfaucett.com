<script lang="ts">
  export interface ProseProps {
    children: import('svelte').Snippet;
    class?: string;
  }

  let { children, class: className = '' }: ProseProps = $props();
</script>

<div class="prose {className}">
  {@render children()}
</div>

<style>
  .prose {
    font-family: var(--font-body);
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-ink);
  }

  :global(html.dark) .prose {
    color: var(--color-ink-dark);
  }

  /* Paragraphs */
  .prose :global(p) {
    margin-bottom: 1.4rem;
  }

  /* Headings */
  .prose :global(h2) {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 3rem;
    margin-bottom: 1rem;
    color: var(--color-ink);
  }

  .prose :global(h3) {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: var(--color-ink);
  }

  :global(html.dark) .prose :global(h2),
  :global(html.dark) .prose :global(h3) {
    color: var(--color-ink-dark);
  }

  /* Links */
  .prose :global(a) {
    color: var(--color-ink);
    text-decoration: underline;
    text-decoration-color: var(--color-ink-faint);
    text-underline-offset: 3px;
    transition: text-decoration-color 0.15s;
  }

  .prose :global(a:hover) {
    text-decoration-color: var(--color-ink);
  }

  :global(html.dark) .prose :global(a) {
    color: var(--color-ink-dark);
    text-decoration-color: var(--color-ink-dark-faint);
  }

  :global(html.dark) .prose :global(a:hover) {
    text-decoration-color: var(--color-ink-dark);
  }

  /* Blockquote */
  .prose :global(blockquote) {
    border-left: 1px solid var(--color-ink-faint);
    margin: 2rem 0;
    padding: 0.25rem 0 0.25rem 1.5rem;
    font-style: italic;
    color: var(--color-ink-muted);
  }

  :global(html.dark) .prose :global(blockquote) {
    border-left-color: var(--color-ink-dark-faint);
    color: var(--color-ink-dark-muted);
  }

  /* Inline code */
  .prose :global(code) {
    font-family: var(--font-mono);
    font-size: 0.85em;
    background: var(--color-ink-faint);
    color: var(--color-ink);
    padding: 0.15em 0.4em;
    opacity: 0.8;
  }

  :global(html.dark) .prose :global(code) {
    background: var(--color-ink-dark-faint);
    color: var(--color-ink-dark);
  }

  /* Code block */
  .prose :global(pre) {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    background: var(--color-ink-faint);
    color: var(--color-ink);
    padding: 1.25rem 1.5rem;
    overflow-x: auto;
    margin: 2rem 0;
    opacity: 0.8;
  }

  :global(html.dark) .prose :global(pre) {
    background: var(--color-ink-dark-faint);
    color: var(--color-ink-dark);
  }

  .prose :global(pre code) {
    background: none;
    padding: 0;
    font-size: inherit;
  }

  /* Horizontal rule */
  .prose :global(hr) {
    border: none;
    border-top: 1px solid var(--color-ink-faint);
    margin: 3rem 0;
  }

  :global(html.dark) .prose :global(hr) {
    border-top-color: var(--color-ink-dark-faint);
  }

  /* Lists */
  .prose :global(ul) {
    list-style: none;
    margin: 1.4rem 0;
    padding: 0;
  }

  .prose :global(ul li) {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .prose :global(ul li::before) {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--color-ink-faint);
    font-family: var(--font-mono);
  }

  :global(html.dark) .prose :global(ul li::before) {
    color: var(--color-ink-dark-faint);
  }

  .prose :global(ol) {
    list-style: decimal;
    margin: 1.4rem 0;
    padding-left: 1.5rem;
  }

  .prose :global(ol li) {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
</style>