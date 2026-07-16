# Module: AI Agent Development page

Route: **`/inzint-ai/ai-tech-solutions/ai-agent-development`**

Positions Inzint's autonomous AI coding agents. This module was revamped as one cohesive feature
across six tickets (TSK-0465 … TSK-0470); all are merged to `development` and tested. It is the
reference example of the site's **content-as-data + data-driven section** pattern.

## Files

| File | Role |
|---|---|
| `src/app/inzint-ai/ai-tech-solutions/ai-agent-development/page.tsx` | Route assembly (server component) + SEO `metadata`. Composes the four sections + footer. |
| `src/data/ai-agent-development.ts` | Typed content module (`aiAgentDevelopmentContent`) + 8 interfaces. The single source of copy. |
| `src/components/sections/ai/AIAgentHeroSection.tsx` | Hero — reads `content.hero`. |
| `src/components/sections/ai/AIAgentCapabilitiesSection.tsx` | Capability cards — maps `content.capabilities`. |
| `src/components/sections/ai/AIAgentWorkflowSection.tsx` | Vertical lifecycle timeline — maps `content.howItWorks`. |
| `src/components/sections/ai/AIAgentFAQSection.tsx` | Accordion — maps `content.faqs`. |
| `src/data/__tests__/ai-agent-development.test.ts` | Vitest content-contract tests for the data module. |

The route composes, in order:
`AIAgentHeroSection → AIAgentCapabilitiesSection → AIAgentWorkflowSection → AIAgentFAQSection →
FooterSection`. The four `ai/` sections are **direct-import defaults**; only `FooterSection` comes
from the `@/components/sections` barrel. The route is a **server component** (no `'use client'`) and
stays statically prerendered.

> Note: the data module also exposes `content.useCases` (`AIAgentUseCase[]`), which is validated by
> the test but is **not** currently rendered by any section on the route. It is available content, not
> dead data — a future "use cases" section can consume it.

## Section behavior

- **Hero** (`AIAgentHeroSection`, `'use client'`): renders `hero.badge` (icon resolved via
  `getIcon(hero.badge.icon)`), `title` + gradient `highlightedTitle`, `description`, `benefits[]`, and
  a single CTA (`ctaText` → `ctaHref`). The right-hand card renders `hero.stats` as label+value rows,
  **guarded on `hero.stats?.length`**. Stats are display strings (e.g. "8 stages"), not percentages —
  there are intentionally no animated progress bars and no fabricated metrics.
- **Capabilities** (`AIAgentCapabilitiesSection`, `'use client'`): maps `capabilities[]` into cards;
  each card resolves its icon via `getIcon(capability.icon)` and applies `capability.color` Tailwind
  gradient classes to the icon tile + feature bullets. Section heading and the closing `/contact` CTA
  are hardcoded (the data model has no section-heading/CTA fields).
- **Workflow** (`AIAgentWorkflowSection`, `'use client'`): renders `howItWorks[]` as a **vertical
  timeline** with numbered gradient nodes and a connecting rail (guarded `index < length - 1`). The
  step shape has **no icon field** — numbers only, no `getIcon`. Currently 7 steps
  (Plan → Design → Develop → Review → Test → DevOps → Docs).
- **FAQ** (`AIAgentFAQSection`, `'use client'`): a standalone accordion (Plus/Minus toggle,
  `framer-motion` `AnimatePresence` height reveal, single-open). State is `openId: string | null`
  keyed by the FAQ's string-slug `id`. It **mirrors** the shared `FAQSection` but drops the
  category filter and omits the shared section's "Still Have Questions?" CTA and quick-stats grid. The
  shared `FAQSection` is intentionally left untouched (zero blast radius on other pages).

## Design conventions shared across the sections

- AI-page design system: `'use client'` where interactive, `container`, `py-20 lg:py-32`, indigo→cyan
  gradient headings (`from-indigo-600 to-cyan-600`), `framer-motion` `whileInView` reveals with an
  `index * 0.1` stagger.
- Sections take **no props** — each reads the `aiAgentDevelopmentContent` singleton directly.
- Section headings and section-level CTAs are **hardcoded** because the data model carries no fields
  for them (CTA fields live only on `hero`). Do not invent data fields for these.

## SEO

`metadata` in `page.tsx` sets the title/description/keywords to the autonomous-AI-coding-agent
positioning, grounded verbatim in the hero copy of the data module. No fabricated claims.

## How to edit

- **Change copy** → edit `src/data/ai-agent-development.ts` only. TypeScript enforces the shape; the
  Vitest suite enforces the content contract (non-empty required fields, valid icon keys, unique FAQ
  ids, contiguous `howItWorks` step numbers). Run `npm test`.
- **Change layout/visuals** → edit the relevant section component; keep it reading from the data
  module (don't hardcode copy back in).
- **Add an icon** → it must be a real key in `iconMap` (`src/lib/icons.tsx`); an invalid `IconKey` is
  a `next build` (type) error, and the test asserts the key exists in `iconMap` (no `Circle`
  fallback). See [content-data.md](content-data.md).
