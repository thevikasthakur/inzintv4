# 0002 — Vitest as the repo's first test runner (content-contract tests)

_Date: 2026-07-16 · Ticket: TSK-0465 · Status: accepted_

## Context

Before this feature the repo had **no test runner** — the only quality gate was `next build` (which
type-checks). The data-driven content module (ADR 0001) introduced structured content whose invariants
(non-empty fields, valid icon keys, unique FAQ ids, contiguous step numbers) are not fully expressible
in the type system, and `getIcon()` silently falls back to `Circle` on an unknown key, so a typo would
render wrong without failing the build.

## Decision

Introduce **Vitest** as the test runner, wired into the gate and CI:

- `npm test` → `vitest run`; a `test` job added to `.github/workflows/ci.yml`.
- `vitest.config.ts` uses `environment: 'node'` (pure-data tests, no DOM) and a manual `resolve.alias`
  `@` → `./src`, avoiding an extra Vite/tsconfig-paths plugin dependency.
- First test suite: `src/data/__tests__/ai-agent-development.test.ts` — content-contract tests that
  assert well-formed content, **icon keys present in `iconMap`** (asserting membership, not
  `getIcon` truthiness, so the `Circle` fallback can't hide a typo), unique FAQ ids, and contiguous
  `howItWorks` step numbers.

## Consequences

- The gate is now `npm ci && npm run build && npm test`; every new dev ticket is expected to
  add/extend Vitest tests for the module it touches.
- Current coverage is **content contracts only** (node env). Component render/behavior tests would need
  a DOM environment (e.g. jsdom), which is **not yet configured** — tracked as doc/test debt.
- The `@ → ./src` alias must be kept in sync with `tsconfig` paths so tests import like the app.
