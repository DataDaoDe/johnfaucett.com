import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { WritingMeta } from '$lib/content';

export const prerender = true;

export const load: PageLoad = async ({ params, data }) => {
  try {
    const modules = import.meta.glob<{
      metadata: WritingMeta;
      default: ConstructorOfATypedSvelteComponent;
    }>('/src/content/writing/**/*.svelte');

    const match = Object.entries(modules).find(([path]) =>
      path.endsWith(`/${params.slug}.svelte`)
    );

    if (!match) error(404, 'Not found');

    const mod = await match[1]();

    return { ...data, component: mod.default };
  } catch (e) {
    error(404, 'Not found');
  }
};