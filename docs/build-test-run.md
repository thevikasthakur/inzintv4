# Build / Test / Run

## Prerequisites

- **Node 20+** and **npm** (the repo uses `package-lock.json`; CI runs on Node 20).

## Commands

| Task | Command | Notes |
|---|---|---|
| Install | `npm ci` | clean install from the lockfile |
| Run locally | `npm run dev` | `next dev --turbopack` on http://localhost:3000 |
| Build | `npm run build` | `next build --turbopack`; **also type-checks**. A `postbuild` runs `next-sitemap`. |
| Start (prod build) | `npm start` | serves the built app |
| Test | `npm test` | `vitest run` (Vitest 2) |

## The gate (Definition of Done)

```
npm ci && npm run build && npm test
```

A green build type-checks the whole app; a green Vitest run enforces the content contracts. Both must
pass before a PR is considered done. The AI Agent route is emitted as a **static/prerendered** route
(`○`) in the build output — keep it that way.

## CI

`.github/workflows/ci.yml` runs on pull requests and pushes to `development`, with three jobs:

1. **build** — `npm ci && npm run build` (Node 20).
2. **test** — `npm ci && npm test` (Vitest).
3. **guard** (PRs only) — fails closed if the diff touches a DO-NOT-TOUCH secret path
   (`grep -E '(^|/)\.env|\.pem$'`). Mirrors `agent-autonomy/sensitive-paths.json`.

## Branch & environment model

- **`development`** — the integration branch. All feature PRs target `development`. This is where the
  AI Agent revamp is merged (tip at time of writing: `9620e6f`).
- **`main`** — production. **Never push to or merge into `main` directly** from feature work.
- Promotion `development → main` is a separate, deliberate **Release** step.

### Deployment

**No deployment target is configured in this repo.** There is no `vercel.json`/`.vercel`,
`netlify.toml`, `Dockerfile`, or deploy job in CI; the GitHub repo has zero configured environments or
deployments. `ci.yml` is a **gate only** (build + test + secret guard), not a deploy pipeline.

Consequently, "the change is ready" means: merged to `development` + green gate + documented. It does
**not** mean deployed. Deployment is a separate, human-scheduled step and is **out of scope** for the
per-ticket development lifecycle. If/when a hosting target is connected, document the deploy command
and health-check here.

## Secrets

None are needed to build or test this site. Never add secrets to the repo; `.env*` and `*.pem` are
hard DO-NOT-TOUCH paths enforced by the CI guard and `agent-autonomy/`. Do not document secret values
here.
