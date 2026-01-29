import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // 👇 这里已经改成了你的专属地址
  site: 'https://interstellartrek.github.io', 
  integrations: [mdx(), sitemap(), tailwind()],
});