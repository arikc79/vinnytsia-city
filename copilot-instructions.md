# Copilot / AI agent instructions for this repo

Short, actionable guidance to help an AI contribute effectively to this React + TypeScript + Vite project.

- **Project type:** React + TypeScript + Vite + TailwindCSS. See [package.json](package.json) and [src/index.css](src/index.css).
- **Dev / build commands:** `npm run dev` (Vite), `npm run build` (TypeScript build then `vite build`), `npm run preview`.

- **Routing & layout:** Central routes are defined in [src/router/router.tsx](src/router/router.tsx). Top-level layout is [src/layout/MainLayout.tsx](src/layout/MainLayout.tsx). Add pages under `src/pages` and register routes in the router when adding new top-level views.

- **Data & types:** Static app data lives in [src/data/*.ts](src/data). Example: `landmarks` and the `Landmark` interface in [src/data/landmarks.ts](src/data/landmarks.ts). Prefer adding typed objects to these files for small datasets.

- **Service layer:** Lightweight service functions live in [src/services](src/services). Example: `getWikiImage` in [src/services/wikiApi.ts](src/services/wikiApi.ts) — it calls Wikimedia REST `page/summary` and returns `string | null`. Follow this pattern: small, promise-returning helpers that the UI consumes via `useEffect`.

- **UI patterns & conventions:**
  - Pages are default-exported React components in `src/pages` (see [src/pages/CityInfo.tsx](src/pages/CityInfo.tsx)).
  - Use `useEffect` + service helpers for side-effects (image fetch in [src/pages/MainLandmark.tsx](src/pages/MainLandmark.tsx)).
  - Keep components small and declarative; prefer extracting repeated UI into small components under `src/components` (not present yet but follow existing simple structure).

- **Styling:** Tailwind is used across the app. `src/index.css` contains Tailwind directives. Use utility classes; keep CSS additions minimal and consistent with Tailwind approach.

- **TypeScript & project config:** The repo uses project references (`tsconfig.app.json`, `tsconfig.node.json`) from the root `tsconfig.json`. When adding new TS paths or build steps, prefer updating `tsconfig.app.json`.

- **Linting:** ESLint is configured (see `eslint.config.js`). Run `npm run lint` before larger PRs.

- **What to avoid / minimal-impact edits:**
  - Do not restructure the top-level routing or change the `MainLayout` semantics without explicit request.
  - Avoid introducing large runtime dependencies; this is a small client-side app with no server code.

- **Examples to reference when coding:**
  - Add a page that displays landmarks by following `src/pages/MainLandmark.tsx` + data from `src/data/landmarks.ts`.
  - Implement a new service by mirroring `src/services/wikiApi.ts` (fetch -> parse -> return typed result).

- **PR checklist for AI-generated changes:**
  1. Keep changes small and self-contained.
 2. Update `src/router/router.tsx` if you add top-level pages and include the new routes.
 3. Ensure TypeScript compiles (`npm run build`) and run the app locally with `npm run dev` to verify UI behavior.
 4. Run `npm run lint` and fix obvious lint issues.

If any section is unclear or you want more detail (example code patterns, preferred commit messages, or a test strategy), tell me which part to expand.
