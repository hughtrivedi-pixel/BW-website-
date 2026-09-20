# Static HTML for every page (prerendering for AI crawlers)

Right now the exported site ships one empty HTML shell, so crawlers that don't run JavaScript see nothing. The build will instead write a real HTML file for each page, with all of that page's text already inside it.

## What changes

- `npm run build` runs the normal Vite build, then a second pass that renders each route to HTML.
- Each route becomes its own folder with an `index.html` (e.g. `dist/programs/index.html`, `dist/programs/preschool/index.html`), plus `dist/index.html` for the home page.
- All 17 routes are covered: `/`, `/difference`, `/programs`, `/robotics-steam`, `/tuition`, `/about`, `/parent-resources`, `/contact`, `/schedule-tour`, the five `/programs/...` detail pages, `/testimonials`, `/gallery`, `/es`.
- In the browser, the app attaches to the existing HTML instead of wiping it, so visitors see and experience exactly the same site.
- The Google tag, meta tags, favicon and all existing head content are carried into every generated page unchanged.

## Technical approach

No headless browser — plain Node with `ReactDOMServer.renderToString` and `StaticRouter`.

1. **`src/App.tsx`** — split the router out: keep the current `BrowserRouter` app export for the browser, and add an exported `AppRoutes` (providers + routes, no router) so the prerender script can wrap it in `StaticRouter`. Route table unchanged.
2. **`src/main.tsx`** — use `hydrateRoot` when `#root` already has server-rendered markup, `createRoot` otherwise (so `npm run dev` still works).
3. **`scripts/prerender.mjs`** (new) — imports the server bundle, renders each route, injects the markup into the `dist/index.html` template produced by Vite, and writes `dist/<route>/index.html`.
4. **`vite.config.ts`** — add an SSR build entry (`src/entry-server.tsx`, new) that exports a `render(url)` function; output to `dist-ssr/` which is not deployed.
5. **`package.json`** — `build` becomes: client build → SSR build → `node scripts/prerender.mjs`. `build:dev` and `dev` are untouched.
6. **Browser-only code** — `window`/`document`/`localStorage` use is already inside `useEffect` (`ScrollToTop`, `use-mobile`), which never runs during the build; `use-mobile` will get a safe non-browser default. Any others found during implementation get the same guard.

Note on scroll animations: sections use fade-in-on-scroll, so the prerendered markup contains the text with a starting `opacity:0` style. Crawlers read the text fine, and hydration turns the animations on as before. If you'd rather the raw HTML have no hidden styling at all, that's a follow-up change to the animation setup.

## Verification

After the build I'll report every changed file and paste the first 40 lines of `dist/programs/index.html` so you can confirm the program text is in the HTML.
