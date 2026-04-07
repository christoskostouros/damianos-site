import { defineCollection, z } from 'astro:content';

const loose = z.object({}).passthrough();

// Pages: type 'content' so .md files work with frontmatter
const pages = defineCollection({
  type: 'content',
  schema: loose,
});

// FAQ entries
const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().default(1),
  }).passthrough(),
});

// Image mappings
const images = defineCollection({
  type: 'content',
  schema: loose,
});

export const collections = { pages, faq, images };
