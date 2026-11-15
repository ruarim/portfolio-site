import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const media = z.object({
  type: z.enum(['image', 'video']),
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    media: media.optional(),
    githubUrl: z.url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
