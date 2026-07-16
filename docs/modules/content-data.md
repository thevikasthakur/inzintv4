# Module: Content data layer + Vitest harness

## The `src/data/**` pattern

Page copy is authored as **typed content data** rather than hardcoded in JSX. Each data module:

1. Declares its interfaces at the top of the file.
2. Exports one typed `const` (e.g. `export const aiAgentDevelopmentContent: AIAgentDevelopmentContent
   = { … }`).
3. Is imported by the section components, which map over it.

Existing data modules: `ai-agent-development.ts`, `company.ts`, `navigation.ts`,
`navigation-inzint.ts`, `pricing.ts`. Benefits: copy lives in one place, is type-checked at build,
and is unit-testable without rendering React.

## The icon registry and the `IconKey` contract

Icons are referenced **by string key**, not by importing a `lucide-react` component into the data.

- `src/lib/icons.tsx` holds `iconMap` — a record mapping string keys (`'bot'`, `'sparkles'`, `'code'`,
  `'file-check'`, `'shield'`, `'rocket'`, `'book-open'`, … many more) to `lucide-react` components.
- `getIcon(key)` returns the mapped component, **falling back to `Circle`** if the key is unknown
  (it never throws).
- `export type IconKey = keyof typeof iconMap` — data modules type every icon field as `IconKey`, so
  an **invalid icon key is a `next build` (tsc) error**.

**Load-bearing testing rule:** because `getIcon` silently falls back to `Circle`, a test that only
checks `getIcon(key)` returns something would pass on a typo. Icon-contract tests must assert the key
is actually present in `iconMap` (`expect(iconMap).toHaveProperty(key)`), catching a fallback. Do not
weaken this to a `getIcon` truthiness check.

Do **not** invent new icon keys in content — reuse the closest existing one, or add the key to
`iconMap` (a `src/lib/icons.tsx` change) first.

## The Vitest harness

`ai-agent-development.ts` shipped with the **repo's first test runner** (introduced in TSK-0465).

- `npm test` → `vitest run`.
- `vitest.config.ts`: `test.environment = 'node'` (pure-data tests, no DOM), and a `resolve.alias`
  mapping `@` → `./src` (mirrors the tsconfig path so tests import modules the same way the app does,
  without adding a Vite/tsconfig-paths plugin dependency).
- Tests live in `src/**/__tests__/**`. Today: `src/data/__tests__/ai-agent-development.test.ts`
  (9 tests).

### What the content-contract test asserts (`ai-agent-development.test.ts`)

- **well-formed**: `hero` fully populated; `capabilities`, `howItWorks`, `useCases`, `faqs` non-empty;
  every item's required string fields non-empty and array fields non-empty.
- **icon-key contract**: every icon value (`hero.badge.icon` + each `capability.icon`) is a real key
  of `iconMap` (no `Circle` fallback).
- **invariants**: FAQ `id`s are unique; `howItWorks` `step` values are contiguous `1..n` in array
  order.

### Coverage note

Coverage is intentionally thin — it currently covers **content contracts** for the AI Agent data
module only, not React render behavior. The project's Definition of Done for every dev ticket is to
add or extend Vitest tests for the module it touches (content-shape tests for data; render/behavior
tests for components). Component render tests would need a DOM environment (e.g. jsdom), which is not
yet configured — see the doc debt in the work log.
