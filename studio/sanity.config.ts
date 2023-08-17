import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { contentGraphView } from "sanity-plugin-graph-view";
import { media } from 'sanity-plugin-media'
import { netlifyTool } from 'sanity-plugin-netlify'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'jbrr.dev',

  projectId: 'z4j34qs1',
  dataset: 'jbrr_personal',

  plugins: [deskTool(), visionTool(), contentGraphView({}), media(), netlifyTool()],

  schema: {
    types: schemaTypes,
  },
})
