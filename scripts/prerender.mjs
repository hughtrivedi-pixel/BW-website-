import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const routes = [
  "/",
  "/difference",
  "/programs",
  "/robotics-steam",
  "/tuition",
  "/about",
  "/parent-resources",
  "/contact",
  "/schedule-tour",
  "/programs/infant-toddler",
  "/programs/preschool",
  "/programs/pre-kindergarten",
  "/programs/school-age",
  "/programs/summer-camp",
  "/testimonials",
  "/gallery",
  "/es",
];

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const { render } = await import(pathToFileURL(ssrEntry).href);

const MARKER = '<div id="root"></div>';
if (!template.includes(MARKER)) {
  throw new Error('Could not find <div id="root"></div> in dist/index.html');
}

for (const route of routes) {
  const html = render(route);
  const page = template.replace(MARKER, `<div id="root">${html}</div>`);
  const outDir = route === "/" ? distDir : path.join(distDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page);
  console.log(`prerendered ${route}`);
}

console.log(`Prerendered ${routes.length} routes.`);
