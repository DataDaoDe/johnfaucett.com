import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import type { Config } from '@sveltejs/kit';


const config: Config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => {
			return (filename.split(/[/\\]/).includes('node_modules')) ? undefined : true;
		}
	},
	extensions: ['.svelte'],
	preprocess: [
		vitePreprocess()
	],
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
	}
};

export default config;
