# Architecture

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js `15.5.x` (App Router), built with `--turbopack` |
| UI library | React `19.1` |
| Language | TypeScript `5` (path alias `@/*` → `./src/*`) |
| Styling | Tailwind CSS `3.4` (+ `tailwind-merge`, `clsx`) |
| Animation | `framer-motion` |
| Icons | `lucide-react`, wrapped by a project icon registry (`src/lib/icons.tsx`) |
| Tests | Vitest `2` (`npm test` → `vitest run`) |
| Sitemap | `next-sitemap` (runs as a `postbuild` step) |
| Package manager | npm (`package-lock.json`); Node 20+ |

There is **no backend, database, auth, or payment surface**. Pages are statically renderable; the
build emits static/prerendered routes.

## Directory shape

```
src/
  app/**            App Router pages — one folder per route (about, services, industries,
                    inzint-ai/**, careers, contact, legal, resources, …). Route folders hold page.tsx
                    (server component by default) and compose sections.
  components/
    ui/             reusable UI primitives (Modal, ContactModal, AnimatedCodeScreen, …)
    layout/         header, navigation, mega-menu, mobile menu, logo, announcement bars
    sections/       page sections — the bulk of the UI. Homepage/shared sections at the top level;
      ai/           AI-page sections (AIAgent* , GenerativeAI*, AIServiceTemplate, …)
      industry/     industry-page sections
      services/     services-page sections
      index.ts      barrel that re-exports homepage/shared sections (NOT ai/ sections — see note)
  data/**           static content as typed data (company, navigation, pricing, ai-agent-development)
    __tests__/      Vitest tests for the data modules (e.g. ai-agent-development.test.ts)
  lib/              icons.tsx (icon registry + getIcon + IconKey), utils.ts
  types/            shared types (index.ts)
  styles/           global styles (Tailwind)
public/**           static assets (images, fonts, icons)
scripts/*.js        one-off asset/image-processing scripts
```

## How a page is built (data flow)

1. A **route** (`src/app/<path>/page.tsx`) is a server component. It sets `metadata` (SEO) and
   composes a handful of **section** components in order, then a `FooterSection`.
2. **Section** components (`src/components/sections/**`) render the actual UI. Newer sections are
   **data-driven**: they import a typed content object from `src/data/**` and map over it, rather than
   hardcoding copy. Interactive sections are client components (`'use client'`); purely presentational
   ones can be server components.
3. **Content data** (`src/data/**`) holds the copy as a typed `export const`, with interfaces declared
   at the top of the file. This keeps copy editable in one place and type-checked at build time.
4. **Icons** are referenced by string key (`IconKey`) in the data and resolved to a `lucide-react`
   component at render time via `getIcon()` from `src/lib/icons.tsx`. See
   [data-model.md](data-model.md) for the `IconKey` contract.

## Component export conventions

- Homepage/shared sections are re-exported from the `src/components/sections/index.ts` **barrel** and
  imported as named exports (e.g. `import { FooterSection } from '@/components/sections'`).
- **`ai/` sections are NOT in the barrel.** They are `export default` and imported **directly** by
  their route (e.g. `import AIAgentHeroSection from '@/components/sections/ai/AIAgentHeroSection'`).
  Follow this pattern for new `ai/` sections. (This is a deliberate, load-bearing convention — several
  tickets in the AI Agent revamp depended on it.)

## External services / integrations

None wired in this repo. No API calls, no environment-driven data, no third-party runtime services.
The only "external" step is `next-sitemap` at build time. Deployment targets are **not** configured in
this repo (see [build-test-run.md](build-test-run.md)).

## Modules (deep dives)

- [AI Agent Development page](modules/ai-agent-page.md)
- [Content data layer + Vitest harness](modules/content-data.md)
