import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import type { WritingMeta } from '$lib/content';

export const entries: EntryGenerator = async () => {
  const modules = import.meta.glob<{ metadata: WritingMeta }>(
    '/src/content/writing/**/*.svelte'
  );

  const slugs = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split('/').pop()?.replace('.svelte', '') ?? '';
      return { slug };
    })
  );

  return slugs;
};

export const load: PageServerLoad = async ({ params }) => {
  try {
    const modules = import.meta.glob<{
      metadata: WritingMeta;
      default: unknown;
    }>('/src/content/writing/**/*.svelte');

    const match = Object.entries(modules).find(([path]) =>
      path.endsWith(`/${params.slug}.svelte`)
    );

    if (!match) error(404, 'Not found');

    const mod = await match[1]();

    if (mod.metadata.draft) error(404, 'Not found');

    return { metadata: mod.metadata, slug: params.slug };
  } catch (e) {
    error(404, 'Not found');
  }
};