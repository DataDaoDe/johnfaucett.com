<script lang="ts">
  import katex from 'katex';

  interface Step {
    expr: string;
    justification: string;
    label?: string;
  }

  interface Props {
    steps: Step[];
    class?: string;
  }

  let { steps, class: className = '' }: Props = $props();

  function renderMath(str: string, display = false): string {
    // Replace inline $...$ with rendered KaTeX
    return str.replace(/\$([^$]+)\$/g, (_, expr) => {
      try {
        return katex.renderToString(expr, {
          displayMode: display,
          throwOnError: false,
          strict: false,
        });
      } catch {
        return `<span style="color:red">${expr}</span>`;
      }
    });
  }

  function renderExpr(expr: string): string {
    try {
      return katex.renderToString(expr, {
        displayMode: false,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return `<span style="color:red">${expr}</span>`;
    }
  }

  function stepLabel(index: number, label?: string): string {
    return label ?? `(${index + 1})`;
  }
</script>

<div class="proof-table {className}">
  <table>
    <tbody>
      {#each steps as step, i (i)}
        <tr>
          <td class="label">
            {stepLabel(i, step.label)}
          </td>
          <td class="expr">
            {@html renderExpr(step.expr)}
          </td>
          <td class="justification">
            {@html renderMath(step.justification)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .proof-table {
    margin: 2rem 0;
    width: 100%;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-body);
    font-size: 1rem;
  }

  tr {
    border-top: 0.5px solid var(--color-ink-faint);
  }

  tr:last-child {
    border-bottom: 0.5px solid var(--color-ink-faint);
  }

  :global(html.dark) tr {
    border-top-color: var(--color-ink-dark-faint);
  }

  :global(html.dark) tr:last-child {
    border-bottom-color: var(--color-ink-dark-faint);
  }

  td {
    padding: 0.65rem 0.75rem;
    vertical-align: middle;
    color: var(--color-ink);
  }

  :global(html.dark) td {
    color: var(--color-ink-dark);
  }

  td.label {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.05em;
    color: var(--color-ink-faint);
    white-space: nowrap;
    width: 2.5rem;
    padding-left: 0;
    user-select: none;
  }

  :global(html.dark) td.label {
    color: var(--color-ink-dark-faint);
  }

  td.expr {
    white-space: nowrap;
    width: 40%;
    padding-right: 1.5rem;
  }

  td.justification {
    font-style: italic;
    color: var(--color-ink-muted);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  :global(html.dark) td.justification {
    color: var(--color-ink-dark-muted);
  }
</style>