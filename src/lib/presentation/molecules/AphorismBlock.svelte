<script lang="ts" module>
    export interface AphorismBlockProps {
      label?: string;
      children: Snippet;
    }
</script>
<script lang="ts">
    import type { Snippet } from "svelte";

    let { label, children } : AphorismBlockProps = $props();
</script>

<div data-component="AphorismBlock" class="border p-4 flex mb-4">
    {#if label}
    <div class="border-r pr-4 mr-4">
        <span class="inline-block align-middle">{label}</span>
    </div>
    {/if}
    <div>
        <p>{@render children()}</p>
    </div>
</div>
