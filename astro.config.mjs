import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math'; // [新增]
import rehypeKatex from 'rehype-katex'; // [新增]

export default defineConfig({
  site: 'https://interstellartrek.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath], // [新增]
    rehypePlugins: [rehypeKatex], // [新增]
  },
});