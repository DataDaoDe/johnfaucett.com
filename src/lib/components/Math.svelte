<script lang="ts">
  import katex from 'katex';

  interface Props {
    expression: string;
    display?: boolean;
    class?: string;
  }

  let { expression, display = false, class: className = '' }: Props = $props();

  let rendered = $derived(() => {
    try {
      return katex.renderToString(expression, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      return `<span style="color: red">KaTeX error: ${e}</span>`;
    }
  });
</script>

{#if display}
  <div
    class="my-8 overflow-x-auto text-ink dark:text-ink-dark {className}"
    role="math"
    aria-label={expression}
  >
    {@html rendered()}
  </div>
{:else}
  <span
    class="text-ink dark:text-ink-dark {className}"
    role="math"
    aria-label={expression}
  >
    {@html rendered()}
  </span>
{/if}