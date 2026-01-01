<script lang="ts">
	import "$lib/presentation/styles/layout.css";
	import favicon from '$lib/assets/favicon.svg';
	import { dev } from "$app/environment";

	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

{#if (!dev)}
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon={`{"token": "085c8c9d027b451395982872911dbc9c"}`}></script>
<!-- End Cloudflare Web Analytics -->
{/if}
