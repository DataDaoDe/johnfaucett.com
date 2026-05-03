export type WritingType =
  | 'essay'
  | 'note'
  | 'story'
  | 'poem'
  | 'review'
  | 'series-part'
  | 'exploration';

export type ReviewMedium = 'game' | 'film' | 'music' | 'artwork';

export interface WritingMeta {
  title: string;
  type: WritingType;
  date: string;
  slug: string;
  summary?: string;
  tags?: string[];
  draft?: boolean;
  // series-part only
  series?: string;
  series_part?: number;
  // review only
  subject?: string;
  medium?: ReviewMedium;
  // exploration only
  interactive?: boolean;
}

export interface ResearchMeta {
  title: string;
  date: string;
  slug: string;
  summary?: string;
  arxiv?: string;
  github?: string;
  pdf?: string;
  coauthors?: string[];
  status: 'published' | 'preprint';
}


// Load all writing entries, sorted newest first, drafts excluded
export async function getAllWriting(): Promise<WritingMeta[]> {
  const modules = import.meta.glob<{ metadata: WritingMeta }>(
    '/src/content/writing/**/*.svelte'
  );

  const entries = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split('/').pop()?.replace('.svelte', '') ?? '';
      return { ...metadata, slug };
    })
  );

  return entries
    .filter(e => !e.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Load all research entries, sorted newest first
export async function getAllResearch(): Promise<ResearchMeta[]> {
  const modules = import.meta.glob<{ metadata: ResearchMeta }>(
    '/src/content/research/*.md'
  );

  const entries = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split('/').pop()?.replace('.md', '') ?? '';
      return { ...metadata, slug };
    })
  );

  return entries
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}