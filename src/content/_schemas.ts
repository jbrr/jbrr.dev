import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.coerce.date(),
    pubDatetimeIncludeTime: z.boolean().default(false),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
    description: z.string(),
  })
  .strict();

export const authorSchema = z
  .object({
    name: z.string(),
    givenName: z.string().optional(),
    familyName: z.string().optional(),
    photo: z.string().optional(),
    url: z.string().optional(),
    email: z.string().optional(),
    locality: z.string().optional(),
    region: z.string().optional(),
    country: z.string().optional(),
    genderIdentity: z.string().optional(),
    key: z.string().optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
export type authorFrontmatter = z.infer<typeof authorSchema>;
