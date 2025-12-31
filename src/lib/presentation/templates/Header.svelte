<script lang="ts" module>
    export interface HeaderProps {
      fontColor: "white" | "black"
    }
</script>
<script lang="ts">
	import { articles_url, root_url } from '$lib/application/routes';

	let { fontColor = "black"} : HeaderProps = $props();
</script>

<header data-component="Header" class="flex w-full font-noto">
	<div class="flex w-full items-center justify-between p-4">
		<div class="flex">
			<a href={root_url()} class="text-2xl">
				<span class:text-white={fontColor == "white"}>ホーム</span>
			</a>
		</div>
		<nav class="flex">
			<a href={articles_url()} class:text-white={fontColor == "white"}>Articles</a>
		</nav>
		<div class="flex"></div>
	</div>
</header>
