# Data model

There is **no database** in this repo. The "data model" is the set of TypeScript interfaces that type
the static content under `src/data/**`. This page documents the AI Agent content contract
(`src/data/ai-agent-development.ts`), the reference example; other data modules
(`company.ts`, `navigation*.ts`, `pricing.ts`) follow the same "interfaces + one typed `const`" shape.

## `ai-agent-development.ts` interfaces

Root object: `aiAgentDevelopmentContent: AIAgentDevelopmentContent`.

```
AIAgentDevelopmentContent
  hero:         AIAgentHero
  capabilities: AIAgentCapability[]
  howItWorks:   AIAgentHowItWorksStep[]
  useCases:     AIAgentUseCase[]      // validated by tests; not yet rendered on the route
  faqs:         AIAgentFAQ[]
```

| Interface | Fields |
|---|---|
| `AIAgentBadge` | `icon: IconKey`, `text: string` |
| `AIAgentStat` | `label: string`, `value: string` (display string, e.g. "8 stages" — **not** a percentage) |
| `AIAgentHero` | `badge: AIAgentBadge`, `title`, `highlightedTitle` (gradient fragment after `title`), `description`, `benefits: string[]`, `ctaText`, `ctaHref`, `stats?: AIAgentStat[]` |
| `AIAgentCapability` | `icon: IconKey`, `title`, `description`, `features: string[]`, `color: string` (Tailwind gradient classes, e.g. `"from-indigo-500 to-cyan-500"`) |
| `AIAgentHowItWorksStep` | `step: number` (1-based ordinal), `title`, `description` — **no icon field** |
| `AIAgentUseCase` | `title`, `description`, `results: string[]` |
| `AIAgentFAQ` | `id: string` (stable slug, e.g. `"what-are-ai-coding-agents"`), `question`, `answer` |

## Contract rules (enforced)

- **`IconKey`** — `icon` fields are `keyof typeof iconMap` (`src/lib/icons.tsx`). Invalid key ⇒
  `next build` type error. Tests additionally assert the key exists in `iconMap` (no `Circle`
  fallback). See [modules/content-data.md](modules/content-data.md).
- **`stats.value` is a display string**, not a number/percentage — rendered as text (label + value),
  never as a CSS-width progress bar.
- **`faq.id` is a unique string slug** — the FAQ accordion keys open/close state on it; tests assert
  uniqueness.
- **`howItWorks[].step` is contiguous `1..n`** in array order — tests assert this.
- **`color` is required** on every capability (non-optional) — no missing-color guard needed in the
  component.

## Migrations

None — content is code. Changing content is a TypeScript edit reviewed and tested like any other code
change; there is no schema/migration system.
