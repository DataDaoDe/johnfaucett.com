import { resolve } from '$app/paths';

export const root_url = () => resolve('/');

export const articles_url = () => resolve(`/articles`);

export const ariticle_url = (slug: string) => resolve(`/articles/[slug]`, { slug });

export const about_url = () => resolve(`/about`);

export const contact = () => resolve(`/contact`);
