import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
("./sanity/schemas/index");

const config = defineConfig({
  projectId: "ya25pubf",
  dataset: "paals-portfolio",
  title: "Paal's portfolio",
  apiVersion: "2023-01-27",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
