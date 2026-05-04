<script lang="ts">
  import type { Snippet } from 'svelte';

  type CalloutType = 'definition' | 'theorem' | 'proof' | 'remark' | 'example' | 'lemma' | 'corollary';

  interface Props {
    type: CalloutType;
    number?: string;
    title?: string;
    children: Snippet;
    class?: string;
  }

  let { type, number, title, children, class: className = '' }: Props = $props();

  const labels: Record<CalloutType, string> = {
    definition: 'Definition',
    theorem:    'Theorem',
    proof:      'Proof',
    remark:     'Remark',
    example:    'Example',
    lemma:      'Lemma',
    corollary:  'Corollary',
  };

  const isItalic: Record<CalloutType, boolean> = {
    definition: true,
    theorem:    true,
    lemma:      true,
    corollary:  true,
    proof:      false,
    remark:     false,
    example:    false,
  };
</script>

<div class="callout {type} {className}">
  <span class="label">
    {labels[type]}{number ? ` ${number}` : ''}{title ? ` (${title})` : ''}.
  </span>
  <span class="body {isItalic[type] ? 'italic' : ''}">
    {@render children()}
  </span>
  {#if type === 'proof'}
    <span class="qed">□</span>
  {/if}
</div>

<style>
  .callout {
    margin: 2.5rem 0;
    font-family: var(--font-body);
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-ink);
    position: relative;
  }

  :global(html.dark) .callout {
    color: var(--color-ink-dark);
  }

  .label {
    font-family: var(--font-body);
    font-variant: small-caps;
    font-size: 1.05rem;
    letter-spacing: 0.04em;
    font-weight: 600;
    font-style: normal;
    margin-right: 0.35em;
  }

  .body {
    display: inline;
  }

  .body.italic {
    font-style: italic;
  }

  .qed {
    float: right;
    font-style: normal;
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-ink-muted);
    clear: both;
  }

  :global(html.dark) .qed {
    color: var(--color-ink-dark-muted);
  }
</style>