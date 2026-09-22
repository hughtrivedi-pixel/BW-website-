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

// Strip the sitewide defaults that each route now provides itself.
function stripDefaults(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[^>]*>/gi, "")
    .replace(/\s*<meta\s+property="og:(title|description|url|type)"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="twitter:(title|description)"[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "");
}

for (const route of routes) {
  const { html, head } = render(route);
  let page = template.replace(MARKER, `<div id="root">${html}</div>`);
  page = stripDefaults(page);
  page = page.replace("</head>", `  ${head}\n  </head>`);

  const outDir = route === "/" ? distDir : path.join(distDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page);
  console.log(`prerendered ${route}`);
}

console.log(`Prerendered ${routes.length} routes.`);
