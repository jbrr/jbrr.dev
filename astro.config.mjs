import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://jbrr.dev",
  experimental: {
    assets: true,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    mdx(),
    sanity({
      projectId: "z4j34qs1",
      dataset: "jbrr_personal",
      useCdn: true,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    build: {
      rollupOptions: {
        external: ["@resvg/resvg-js"],
      },
    },
  },
  output: "server",
  adapter: netlify(),
});
