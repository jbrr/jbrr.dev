import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
});

const postImportResult = (async () => {
  try {
    return await getCollection("blog", ({ data }) => !data.draft);
  } catch (e) {
    console.error(e);
    throw new Error();
  }
})();

const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}
