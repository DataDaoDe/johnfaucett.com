import { getAllWriting } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const writing = await getAllWriting();
  return { writing };
};