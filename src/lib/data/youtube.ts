export type VideoCategory = 'project' 
  | 'essay'
  | 'art'
  | 'game'
  | 'reflection';

export interface Video {
  id: string;
  title: string;
  description: string;
  date: string;
  category: VideoCategory;
  url: string;
}

export const channel = {
  name: 'John Faucett',
  handle: '@johnfaucettguy',
  url: 'https://www.youtube.com/@johnfaucettguy',
  description: 'Videos on building things, making art, and thinking carefully about being human. Project progress, essays read aloud, game development, and the occasional dispatch from the harder parts of life.',
  categories: ['project', 'essay', 'art', 'game', 'reflection'] as VideoCategory[],
};

export const videos: Video[] = [];