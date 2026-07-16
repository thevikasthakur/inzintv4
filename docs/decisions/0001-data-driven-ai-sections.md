# 0001 — Data-driven AI Agent page sections

_Date: 2026-07-16 · Tickets: TSK-0465 … TSK-0470 · Status: accepted_

## Context

The AI Agent Development page (`/inzint-ai/ai-tech-solutions/ai-agent-development`) originally had copy
and structural data (capabilities lists, FAQ items, hero content) hardcoded inside the section
components, including some fabricated metrics (e.g. 95/92/98% progress bars). Copy edits meant editing
JSX, copy couldn't be validated, and the marketing claims were not grounded.

## Decision

Separate content from presentation:

- Put all page copy in a single typed module, `src/data/ai-agent-development.ts`
  (`aiAgentDevelopmentContent` + 8 interfaces), following the established `src/data/**` pattern.
- Make each section component read that singleton directly (no props) and map over it:
  `AIAgentHeroSection`, `AIAgentCapabilitiesSection`, `AIAgentWorkflowSection` (new),
  `AIAgentFAQSection` (new); the route (`page.tsx`) composes them + `FooterSection`.
- Reference icons by string `IconKey` resolved through `getIcon()`, so invalid keys fail the build.
- Keep section headings and section-level CTAs hardcoded (no data fields invented for them).
- Remove fabricated metrics; stats are qualitative display strings.
- Keep `ai/` sections as direct-import defaults (not added to the sections barrel), matching the
  existing convention for `ai/` sections.

## Consequences

- Copy is editable in one place, type-checked at build, and unit-testable (see ADR 0002).
- The new `AIAgentFAQSection` **mirrors** the shared `FAQSection` rather than extracting a shared
  primitive — zero blast radius on other pages, at the cost of some duplicated accordion markup. If a
  second data-driven FAQ consumer appears, revisit extracting a shared primitive.
- `content.useCases` exists in the data + tests but is not yet rendered on the route (available for a
  future section).
- Adding new copy that needs a new icon requires adding the key to `iconMap` first.
