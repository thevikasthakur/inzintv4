# How Inzint Helped Turn Thotis IA From a Collection of AI Tools Into a Product Platform

There is a moment in the life of a successful software product when the problem stops being “can we build this?” and becomes “can we keep changing this without breaking everything that already works?”

That was the interesting part of Thotis IA.

Thotis is a French education and orientation platform. By the time Inzint joined the programme in April 2026, its AI product was already live: multiple specialist agents, a Next.js web application, a NestJS backend, a mobile client maintained by another team, authentication, onboarding, CRM flows, messaging, voice and CV tooling.

The engagement was not about adding a chatbot. It was about making a growing, multi-vendor AI product easier to understand, safer to evolve and more consistent for users.

| | |
|---|---|
| **Client** | Thotis IA |
| **Engagement** | AI platform re-architecture, product engineering and quality automation |
| **Delivery window** | April–August 2026 |
| **Core stack** | Next.js, NestJS, PostgreSQL, Redis, BullMQ, Supabase, Chatbase, Langflow, LiveKit |
| **Inzint scope** | Web and backend engineering, data migration, voice, integrations, security, internationalisation and automated QA |

![Thotis IA welcome experience](/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png)

## The challenge: the internal model no longer matched the experience users needed

Thotis wanted to move from a collection of separately configured AI agents to a clearer, persona-led experience. Different students needed different tools, presented in a stable order with understandable names across web and mobile.

On the surface, that looked like a catalogue redesign. Underneath, the existing product had 13 Chatbase-backed agents, duplicated availability rules, hard-coded education-level arrays and internal codenames that had leaked into the customer experience. There was no single persona-driven catalogue from which every client could render the same product.

The target model was deliberately simpler: four personas, six ordered categories, one catalogue contract, translated display names and predictable availability rules.

Then we examined the production data.

## The schema said one thing. The data said another.

A persona migration sounds straightforward: map existing education fields to the new personas, backfill the user records and launch the new catalogue.

The first data analysis showed why migrations must be designed from evidence rather than table names. Several profile-like columns that appeared to be the obvious source were null throughout the dataset. A table that seemed intended to hold onboarding answers had not been populated in the way the new feature required. The useful information lived elsewhere, particularly in profile-level data and parsed submissions arriving through the existing Typeform flow.

Even that evidence was incomplete. Some users had no usable profile record, and one student category had no reliable legacy marker at all.

The migration therefore did not pretend to know what the old system had never collected. Users who could be classified confidently were migrated deterministically. Ambiguous users received a conservative default and could correct it through the new persona switcher. Users without enough information were intercepted appropriately instead of being given an invented classification.

That decision established an important boundary for the project:

> Generative models produced language. Business rules that had to be predictable and auditable remained code and data.

Persona assignment, catalogue ordering, entitlements, quotas, badges and access rules were not delegated to an LLM.

## A new product vocabulary without breaking old conversations

The rebrand carried another constraint. Historical conversations were already tied to legacy agent identifiers. Renaming those records to match new customer-facing labels risked disconnecting chat history from the agents that created it.

We separated identity from presentation.

The legacy keys remained stable inside the system. The new catalogue mapped them to stable tool identifiers, persona-specific configuration, translated display names and human-readable subtitles. The database could preserve history while the interface evolved.

The naming rule was also made enforceable. Automated tests exercised the catalogue for all four personas and failed if a banned internal codename appeared in the response. A branding requirement that might otherwise live only in a document became a software assertion.

![Persona-aware Thotis IA home and tool catalogue](/assets/images/case-studies/thotis-ia/product-screenshots/2-home.png)

## The architecture became a platform, not a chain of exceptions

The evolved architecture assigns each concern to a clear layer:

```text
Next.js / MakerKit + Supabase session
                 |
          server-side proxy
                 |
            NestJS API
       __________|____________
      |           |            |
 PostgreSQL     Redis        BullMQ
      |
      |-- Persona + catalogue rules
      |-- Chat engine abstraction --> Chatbase / Langflow
      |-- LiveKit voice -----------> Python worker
      |                                Deepgram -> AI -> ElevenLabs
      |-- Typeform / HubSpot / Twilio / Brevo
      +-- Object storage / PDF rendering

TestZeus Hercules --> deployed product end to end
```

The Next.js application keeps backend credentials off the client by proxying requests through server routes. NestJS acts as the application API and source of truth. PostgreSQL and TypeORM maintain product state; Redis supports caching and coordination; BullMQ handles background workloads.

Conversational AI sits behind an engine abstraction. Existing Chatbase agents could remain in service while a self-hosted Langflow path was introduced selectively, without spreading provider-specific logic through every feature. Langfuse added model-level observability, and a post-generation filter applied output guardrails.

Voice followed a separate real-time path. LiveKit handled rooms and worker dispatch; a Python worker connected speech recognition, the conversational agent and ElevenLabs speech synthesis; authenticated callbacks connected the worker to NestJS.

Around that core, the product integrated Typeform, HubSpot, Twilio, Brevo, object storage, Cloudinary and PDF generation. Automated browser testing extended into an autonomous end-to-end system based on TestZeus Hercules.

## Voice exposed the danger of “obvious” fixes

One production incident captured why integration work has to follow runtime behaviour, not only local code.

A security-hardening change found that `LIVEKIT_AGENT_WORKER_URL` was missing. The function treated that as a failure, returned `false` and caused the voice controller to respond with a 503. Every voice call stopped.

The missing URL was not a deployment mistake. It was the correct configuration.

The Python worker registered with LiveKit over WebSocket and received work through LiveKit’s own automatic dispatch mechanism. It exposed no HTTP endpoint for NestJS to call. Room metadata already carried the real dispatch signal.

The working fix restored that path, documented the reason in code and added a metric so future dispatch failures would be visible. A related global circuit breaker was changed to operate per session, preventing one failed call from affecting every caller.

![Thotis IA conversational and real-time voice experience](/assets/images/case-studies/thotis-ia/product-screenshots/3-Chat.png)

## Production investigation required better evidence, not more guesses

Another incident appeared to be an onboarding redirect bug. Static analysis found several plausible defects. They were real defects, but none explained the affected users.

The investigation eventually revealed that earlier queries had been run against a diverged legacy database while production used another PostgreSQL instance. Once the correct environment was established, the team also found that existing logs lacked enough correlated user and request information to reconstruct an affected journey end to end.

At that point, reading more code would have produced more theories, not an answer. The incident needed instrumented tracing. It was deliberately not closed merely because the plausible pull requests had merged.

That is a less glamorous part of production engineering, but an important one: knowing when the available evidence is insufficient, and improving the system so the next investigation can be factual.

## The product work went well beyond chat

Inzint worked inside the client’s multi-vendor sprint team rather than owning an isolated module. The delivered surface included:

- a redesigned home, catalogue, chat shell, sidebar, signup and onboarding experience;
- persona and category modelling shared across product clients;
- chat routing between established and alternative AI engines;
- freemium enforcement, quotas and access rules;
- CV creation, branded PDF export and guide experiences;
- LiveKit voice endpoints and hardening of the Python worker;
- CRM, form, SMS and email integrations;
- French and English internationalisation audits and fixes;
- security remediation, production incident analysis and telemetry;
- autonomous end-to-end tests against the deployed application.

![AI-assisted CV creation inside Thotis IA](/assets/images/case-studies/thotis-ia/product-screenshots/4-CV-Gen.png)

![School brochure catalogue inside Thotis IA](/assets/images/case-studies/thotis-ia/product-screenshots/5-brochure.png)

The mobile application, admin frontend, Chatbase prompt and knowledge-base authoring, guide content and Typeform configuration remained with the client or other vendors. That boundary mattered: the engagement strengthened the platform without claiming work that belonged elsewhere.

## Quality gates carried product knowledge forward

The project used several layers of testing, from unit and integration checks to browser-level validation and an autonomous end-to-end test agent. The goal was not simply to increase the number of tests. It was to encode the assumptions most likely to regress:

- every persona receives a valid, consistently ordered catalogue;
- customer-facing responses never expose internal codenames;
- quotas and access outcomes remain deterministic;
- web flows work across authentication, APIs and third-party services;
- a green end-to-end run represents a meaningful customer journey rather than a collection of weak assertions.

This is how a multi-vendor product becomes easier to change: important knowledge stops living only in the memories of the people who happened to ship the last release.

## The outcome

The Thotis IA engagement produced a clearer persona-led product, a central catalogue contract, a safer migration path, provider boundaries for conversational AI, a hardened real-time voice workflow, stronger observability and a more demanding automated quality layer.

Just as importantly, it preserved the history already embedded in the live platform. Existing conversation identifiers remained intact. Incomplete profile data was not turned into fabricated certainty. Provider decisions could evolve without forcing a rewrite of the customer experience.

The client’s final feedback gave the engagement a 5.0 rating. They thanked Inzint for the work delivered and described Inzint as committed to quality, clear in communication and accountable for outcomes.

![Client testimonial for the Thotis IA engagement](/assets/images/case-studies/thotis-ia/client-testimonial.svg)

After this project, Inzint can credibly demonstrate that we know how to re-model and migrate the data behind a live AI product, across multiple vendors and client applications, without breaking existing conversation history—and how to keep investigating when the obvious answers are not the real ones.
