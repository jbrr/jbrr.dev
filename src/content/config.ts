import { defineCollection } from "astro:content";
import { authorSchema, blogSchema } from "./_schemas";

const authors = defineCollection({
  type: "data",
  schema: authorSchema,
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = { authors, blog };
