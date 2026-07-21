import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	// homework 专用：用于区分代数、线代、范畴论
	subject: z.enum(['abstract-algebra', 'linear-algebra', 'category-theory']).optional(),
});

const blog = defineCollection({
	type: 'content',
	schema: blogSchema,
});

const homework = defineCollection({
	type: 'content',
	schema: blogSchema,
});

const note = defineCollection({
	type: 'content',
	schema: blogSchema,
});

export const collections = { blog, homework, note };