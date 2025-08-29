// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    status: { type: "enum", options: ["ongoing", "completed"], required: true },
    year: { type: "number", required: true },
    location: { type: "string", required: true },
    category: { type: "string", required: true },
    cover: { type: "string", required: true },
    summary: { type: "string", required: true },
    images: { type: "list", of: { type: "string" }, required: true },
    beforeImages: { type: "list", of: { type: "string" }, required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-44PUECCD.mjs.map
