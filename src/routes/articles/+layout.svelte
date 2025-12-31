<script lang="ts">
   	import Header from '$lib/presentation/templates/Header.svelte';
	import Footer from '$lib/presentation/templates/Footer.svelte';
	let { children } = $props();
</script>

<Header />

<main class="flex">
<article class="mx-auto w-3xl sm:grid sm:grid-cols-2 sm:gap-4 px-4">
	{@render children()}
</article>
</main>

<Footer />
