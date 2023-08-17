/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />
interface ImportMetaEnv {
  readonly XATA_API_KEY: string;
  readonly XATA_FALLBACK_BRANCH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
