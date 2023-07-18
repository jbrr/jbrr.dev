import { defineConfig, TinaField } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const blogSchema = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    type: "string",
    name: "author",
    label: "Author",
    required: false
  },
  {
    type: "datetime",
    name: "pubDatetime",
    label: "Published Date",
    required: true
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
  },
  {
    type: "string",
    name: "postSlug",
    label: "Post Slug",
  },
  {
    type: "boolean",
    name: "featured",
    label: "Featured",
  },
  {
    type: "boolean",
    name: "draft",
    label: "Draft",
  },
  {
    type: "string",
    name: "tags",
    label: "Tags",
    list: true,
  },
  {
    type: "string",
    name: "ogImage",
    label: "Post Image"
  },
] as TinaField<false>[];

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: blogSchema,
      },
      {
        name: "posts-md",
        label: "Posts (Markdown)",
        path: "src/content/blog",
        format: "md",
        fields: blogSchema,
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
