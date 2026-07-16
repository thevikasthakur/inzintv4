# Inzint static site — documentation

_Last verified: 2026-07-16 (by docs agent)_

Start here. This is the shared knowledge base for the **Inzint marketing website**
(`INZINT/inzintv4`) — read it before working, update it after changing things.

## Navigate

- [Product overview](overview.md) — what this site is, who it's for, and the "why".
- [Architecture](architecture.md) — system shape, App Router layout, content-as-data flow,
  component structure, external services (none).
- [Modules](modules/) — per-area deep dives:
  - [AI Agent Development page](modules/ai-agent-page.md) — the `ai-agent-development` route +
    its four `ai/` sections (the most recently revamped feature).
  - [Content data layer](modules/content-data.md) — the `src/data/**` pattern, the `IconKey`
    contract, and the Vitest content-contract harness.
- [Data model](data-model.md) — the typed content interfaces (there is no database).
- [Build / Test / Run](build-test-run.md) — the gate, Vitest, Node version, branch + env model.
- [Decisions](decisions/) — ADRs (why we did it this way).
- [Work log](worklog.md) — what shipped, ticket by ticket.

## Existing reference docs (pre-dating this knowledge base)

These ad-hoc documents were written earlier and are kept for reference. They are point-in-time
snapshots (dated Nov 2025) and are **not** continuously verified — treat the structured docs above
as the source of truth where they overlap.

- [AI_PAGES_SUMMARY.md](AI_PAGES_SUMMARY.md) — inventory of the 10 InzintAI pages as first created.
- [NAVIGATION_ITEMS.md](NAVIGATION_ITEMS.md) — full navigation / mega-menu item list.
- [CTA_INVENTORY.md](CTA_INVENTORY.md) — inventory of every call-to-action in the site.
- [CTA_FIXES_SUMMARY.md](CTA_FIXES_SUMMARY.md) — record of a CTA-fix pass.

## One-line orientation

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS static marketing site. No backend,
database, auth, or payment surface — the work is UI, content, components, and SEO. Content lives as
typed data in `src/data/**`; pages in `src/app/**` compose sections from `src/components/**`.
