<script lang="ts">
  import katex from 'katex';

  interface Props {
    expression?: string;
    e?: string;
    display?: boolean;
    class?: string;
  }

  let { expression, e, display = false, class: className = '' }: Props = $props();

  const expr = $derived(expression ?? e ?? '');

  let rendered = $derived(() => {
    try {
      return katex.renderToString(expr, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    } catch (err) {
      return `<span style="color: red">KaTeX error: ${err}</span>`;
    }
  });
</script>

{#if display}
  <div
    class="my-8 overflow-x-auto text-ink dark:text-ink-dark {className}"
    role="math"
    aria-label={expr}
  >
    {@html rendered()}
  </div>
{:else}
  <span
    class="text-ink dark:text-ink-dark {className}"
    role="math"
    aria-label={expr}
  >
    {@html rendered()}
  </span>
{/if}