# Product overview

## What this is

The **Inzint marketing website** — the public-facing corporate site for Inzint. It is a statically
rendered marketing site: home, services, industries, about, careers, contact, legal pages, a
`resources` knowledge area, and an `inzint-ai` section covering Inzint's AI offerings.

There is **no backend, database, authentication, or payment surface** in this repo. All page content
is authored either inline in the section components or, increasingly, as **typed content data** under
`src/data/**` that the components render. Work here is UI, content, components, and SEO.

## Who it's for

Prospective clients and candidates reading about Inzint's services, industries served, AI solutions,
and company. The site's job is to explain offerings clearly and route visitors to the `/contact` page.

## Site map (top level)

Routes live under `src/app/**`, one folder per route (App Router). Major areas:

- `/` — homepage.
- `/services/**` — consulting, data services, digital transformation, IT managed services, product
  development (each with sub-pages).
- `/industries/**` — per-industry app-development pages (fintech, healthcare, ecommerce, etc.).
- `/inzint-ai/**` — AI offerings, split into:
  - `ai-tech-solutions/**` — AI Agent Development, AI Consulting, ChatGPT Integration, Custom LLM,
    Generative AI, Machine Learning.
  - `ai-knowledge-hub/**` — AI use cases, blog, guides, resources.
- `/about/**`, `/careers/**`, `/contact`, `/hire-developers`, `/resources/**`, `/support`, and legal
  pages (`privacy-policy`, `terms-of-service`, `cancellation-refund-policy`).

## Featured area: the AI Agent Development page

The most recently revamped feature is the **AI Agent Development** page at
`/inzint-ai/ai-tech-solutions/ai-agent-development`. It positions Inzint's **autonomous AI coding
agents** — assistants that carry a software ticket through its whole lifecycle (plan → design →
develop → review → test → deploy → docs) on the customer's own repo and CI, with every change shipped
behind the customer's existing gate as a reviewable pull request. See
[modules/ai-agent-page.md](modules/ai-agent-page.md) for the full deep dive.

## Positioning guardrails (learned from this feature)

The page copy deliberately uses **no fabricated metrics** — no invented percentages, uptime figures,
or customer counts. Statistics are display strings that describe the offering qualitatively
("8 stages", "PR-first", "Your stack"). Keep this discipline when editing marketing copy.
