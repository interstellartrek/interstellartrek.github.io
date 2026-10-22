import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const slug = process.argv[2];

if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
	console.error('Usage: npm run new:post -- <lowercase-kebab-case-slug>');
	process.exit(1);
}

const postsDirectory = join(process.cwd(), 'src', 'content', 'blog');
const postPath = join(postsDirectory, `${slug}.md`);

if (existsSync(postPath)) {
	console.error(`Post already exists: ${postPath}`);
	process.exit(1);
}

const title = slug
	.split('-')
	.map((word) => word[0].toUpperCase() + word.slice(1))
	.join(' ');
const now = new Date();
const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
const content = `---
title: '${title}'
description: 'Write a short summary of this post.'
pubDate: '${date}'
---

Start writing here.
`;

mkdirSync(postsDirectory, { recursive: true });
writeFileSync(postPath, content, { flag: 'wx' });
console.log(`Created ${postPath}`);
