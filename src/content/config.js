import { defineCollection, z } from 'astro:content';

// Blog collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().default('Admin'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    priority: z.number().default(0.8),
    changefreq: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).default('weekly'),
  }),
});

// Renungan collection
const renungan = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    verse: z.string(),
    publishDate: z.date(),
    author: z.string().default('Admin'),
    category: z.string(),
    description: z.string().optional(),
    priority: z.number().default(0.8),
    changefreq: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).default('weekly'),
  }),
});

// Edukasi collection
const edukasi = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    level: z.enum(['pemula', 'menengah', 'lanjutan']),
    duration: z.string(),
    priority: z.number().default(0.7),
    changefreq: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).default('monthly'),
  }),
});

export const collections = {
  blog,
  renungan,
  edukasi
};