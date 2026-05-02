<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { theme } from "$lib/theme.svelte";
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	$effect(() => {
		if (!theme) {
			console.warn("[theme] undefined.");
		} else {
			theme.init();
		}
		
	})

</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen flex flex-col">
	<Nav />
	<div class="flex-1">
		{@render children()}
	</div>
	<Footer />
</div>

