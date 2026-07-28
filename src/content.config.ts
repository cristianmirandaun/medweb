import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    author: z.string().default('Dr. Cristian Miranda'),
    image: z.string().optional(),
    affiliateProducts: z.array(z.object({
      name: z.string(),
      description: z.string(),
      link: z.string(),
      evidence: z.string(),
      price: z.string().optional(),
    })).optional(),
  }),
});

const medicos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/medicos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    specialty: z.string(),
    guidelines: z.array(z.string()).optional(),
    evidenceLevel: z.enum(['A', 'B', 'C', 'experto']).optional(),
    author: z.string().default('Dr. Cristian Miranda'),
  }),
});

export const collections = { blog, medicos };
