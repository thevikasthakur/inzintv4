# From WordPress Gridlock to an AI-Readable Publishing Platform: How Inzint Rebuilt La Cuisine de Bernard

## At a glance

La Cuisine de Bernard is not a small brochure website. Bernard Laurance has been publishing recipes since 2010, and the live platform now describes a library of more than **1,300 tested, photographed recipes**, many of them documented step by step. That depth is precisely what made the rebuild difficult: the content was enormously valuable, but years of publishing had left it living inside an ageing, plugin-heavy WordPress installation that was operating close to its practical limits. citeturn1view2

Our assignment was therefore much bigger than redesigning a food blog. We had to preserve a large body of existing content, move it into a cleaner publishing model, introduce a modern multilingual workflow and replace the old technical foundation **without turning a well-established website into a construction site for its readers**.

| Project | Details |
|---|---|
| **Client** | La Cuisine de Bernard, the culinary publishing platform of Bernard Laurance |
| **Core challenge** | Modernise a heavily extended WordPress website while preserving years of recipe content |
| **Legacy data** | Approximately **2 GB** WordPress database export, with inconsistent content structures |
| **Migration complications** | Base64 images embedded in text, multiple images inside individual recipe steps, inconsistent historical formatting and content patterns |
| **New stack** | Next.js with Static Site Generation, Payload CMS, MongoDB and DeepL-powered translation |
| **Launch objective** | Replace the old platform with minimal disruption to existing readers |
| **Outcome** | New lightweight publishing architecture launched with **near-zero downtime** |
| **Client feedback** | **5.0/5**, with praise for being solution-oriented, accountable, communicative and detail-oriented |

The most important part of the story is not that we replaced WordPress with fashionable technology. It is that we **converted years of accumulated publishing history into a system where the content once again became an asset rather than a technical burden**.

> **The real transformation was not WordPress → Next.js. It was unstructured publishing history → structured, reusable, machine-readable content.**

## When a successful content website starts fighting back

There is a slightly ironic problem that successful content websites eventually face: the content that made them successful can also become the thing that makes them difficult to maintain.

La Cuisine de Bernard had more than a decade of publishing history behind it. Its current pages contain detailed recipes with photographs, ingredients, cooking instructions, timings and supporting editorial information; the site describes the collection as exceeding 1,300 recipes. citeturn1view2turn2search5

The old website had grown organically around WordPress. New requirements had arrived over the years, and plugins had accumulated to satisfy them. That is not inherently a WordPress problem; it is a familiar lifecycle problem for mature websites. A system originally designed around one set of requirements gradually becomes responsible for many more.

By the time we began the project, the WordPress installation and its collection of plugins were running close to capacity. The website still worked, but maintaining, extending and modernising it had become increasingly uncomfortable.

Think of it as a much-loved professional kitchen after years of expansion.

The recipes are excellent. The chef knows where everything is. But one appliance is plugged into another extension lead, ingredients are stored wherever space happened to exist, and opening one cupboard requires moving three other things first.

**You do not fix that kitchen by buying a nicer worktop.**

You reorganise the kitchen.

For us, that meant separating four concerns that had become tangled together:

**content management, data storage, page delivery and translation.**

The rebuilding effort therefore centred on a modern publishing architecture rather than another layer of WordPress optimisation.

And there was one enormous catch.

The old content had to come with it.

## The two-gigabyte archaeological dig

The hardest engineering problem in the project was not Next.js.

It was history.

The WordPress database archive we received occupied roughly **2 GB on disk**. More importantly, its contents did not conform to one predictable structure.

Some articles contained images embedded directly inside text as **base64 data**. Some recipe steps contained a single photograph; others contained multiple photographs. Historical content had been authored at different times and under different assumptions, meaning records that looked equivalent from a reader's perspective could be represented quite differently underneath.

That transforms a supposedly simple migration into something closer to **content archaeology**.

A naïve database migration essentially assumes:

> Take field A from the old database and place it into field A in the new database.

That assumption breaks down when field A sometimes contains prose, sometimes HTML, sometimes image data, and sometimes a mixture of all three.

The technical task was therefore better understood as an **extract-transform-load problem**: identify what each piece of historical content meant, normalise it into the new editorial model and only then place it in the new database.

Conceptually, a recipe that had previously existed as loosely structured WordPress content had to become something far more explicit:

```text
Recipe
├── title
├── author
├── introduction
├── ingredients
├── preparation time
├── cooking time
├── servings
├── categories
├── media
└── steps
    ├── instruction
    ├── image
    ├── image
    └── …
```

The crucial change was not merely cosmetic.

An image should be understood as an **image**, rather than an accidental sequence of characters embedded inside a paragraph. An instruction should be identifiable as an **instruction**. Multiple photographs belonging to one cooking step should remain associated with that step rather than being flattened into an arbitrary stream.

That distinction becomes enormously important downstream.

It makes editing easier for humans.

It makes templates easier for developers.

It makes translation safer.

And it gives crawlers and software a much cleaner representation from which to understand the published page.

MongoDB was well suited to the underlying content model because it stores data as flexible JSON-like documents and can accommodate data whose shape evolves over time. MongoDB itself emphasises that its flexible document model is intended to support non-uniform data, while still allowing an application to impose validation once a desired schema is established. citeturn3search2turn3search26

Payload similarly provides an officially supported MongoDB adapter and notes that MongoDB is particularly useful where a project contains dynamic fields, arrays and complex document shapes; Payload documents can closely mirror the application's field schema. citeturn3search9turn3search25

That combination mattered because **flexibility during migration did not have to mean accepting the old chaos forever**.

The old data could be accommodated while it was being interpreted, then transformed into a predictable editorial structure for future publishing.

That was the hidden work behind the new website.

Visitors would never see the migration scripts, exception handling or malformed legacy records.

And that was exactly the point.

## Rebuilding the publishing engine, not merely the pages

Once the content problem had been untangled, we could replace the ageing architecture with a stack built around distinct responsibilities.

### Next.js for the public website

The frontend was rebuilt using **Next.js with Static Site Generation**.

With Next.js Static Site Generation, page HTML is generated ahead of requests rather than requiring every visitor to trigger the complete page-building process. Next.js documents this behaviour explicitly: statically generated pages have their HTML produced at build time, and the resulting HTML and supporting assets can be efficiently cached and distributed. citeturn3search0turn3search12

For a content-heavy recipe platform, that is a particularly natural fit.

A chocolate cake recipe does not need its complete editorial content reconstructed from scratch every time somebody opens it.

The expensive work can happen earlier.

Readers receive the finished page.

Search crawlers receive the finished page.

The application can reserve dynamic behaviour for features that genuinely require it.

This architectural choice also reduces reliance on client-side JavaScript for delivering the site's primary editorial content. Google can execute JavaScript, but its own documentation describes crawling and rendering as distinct stages, with JavaScript pages entering a rendering process after initial fetching. Serving meaningful HTML directly therefore removes an unnecessary dependency from the discovery of core editorial content. citeturn4search2turn4search24

### Payload CMS for editorial control

**Payload CMS** became the publishing layer behind the website.

Payload describes itself as a Next.js-based application framework and CMS that provides an admin interface, APIs, authentication, access controls, media handling and database integration from a typed application configuration. citeturn3search13turn3search17

That gave us something the old architecture increasingly struggled to provide: a content model designed around **La Cuisine de Bernard's actual publishing needs**, rather than one assembled from the interaction of numerous unrelated plugins.

Editors still get a CMS.

Developers get predictable data.

Neither side has to pretend that a recipe is merely a generic blog post.

### MongoDB for the content model

**MongoDB** became the underlying database.

Its document-oriented structure made it possible to represent rich recipes naturally: arrays of ingredients, ordered steps, associated media and optional metadata can all exist as parts of a coherent document model. MongoDB's official documentation specifically positions its JSON-like document architecture and flexible schema as a way to model application data while allowing the structure to evolve. citeturn3search2turn3search10

That was particularly valuable after migrating a historical dataset in which uniformity could not be assumed.

### DeepL for multilingual publishing

We connected the translation workflow to **DeepL**.

DeepL's API supports programmatic text translation and also provides special handling for HTML: when HTML tag handling is enabled, DeepL extracts the textual content, translates it and places the translated text back into the markup structure rather than treating the tags as ordinary text. citeturn4search0turn4search1

That capability is important for structured culinary content, where translation should change words without accidentally destroying the relationship between headings, instructions and markup.

The live site now exposes multiple language paths. Public search currently surfaces English, Spanish and Portuguese versions of La Cuisine de Bernard, among other localised URLs, providing observable evidence that the rebuilt site's multilingual content can be discovered and parsed by web search systems. citeturn0search0turn6search0turn6search1

The result is a stack in which every technology has a reasonably narrow job:

| Layer | Responsibility |
|---|---|
| **Next.js** | Deliver fast, pre-rendered public pages |
| **Payload CMS** | Give editors a structured content-management environment |
| **MongoDB** | Store rich recipe and editorial documents |
| **DeepL** | Support scalable multilingual translation |
| **Migration layer** | Turn inconsistent historical WordPress content into the new model |

That separation is what makes the architecture lighter.

Not fewer capabilities.

**Fewer accidental dependencies.**

## Making a website comfortable for search engines and AI engines

This is where the case study becomes especially relevant in 2026.

An “AI-friendly website” does not mean putting an AI chatbot in the corner of every page.

For publishers, much of AI discoverability begins with older and less glamorous disciplines: **accessible HTML, explicit content structure, stable URLs, crawl permissions and clear relationships between pieces of information**. Google similarly describes SEO as helping search systems understand content, and structured data as a method of giving machines explicit information about what a page represents. citeturn4search33turn3search7

The rebuilt La Cuisine de Bernard is much better positioned for that kind of interpretation.

Take one of the site's current recipe pages. Publicly crawlable versions expose information including the:

**recipe name, author, rating, preparation time, cooking time, total time, number of servings, difficulty, ingredients, numbered instructions, nutrition information, photographs and frequently asked questions.** citeturn0search12turn2search5

For example, the current Coconut Tuiles page is understood by the search crawler well enough to expose a distinct ingredient list, twelve ordered cooking instructions, preparation and cooking times, servings, nutrition data and questions about the recipe. citeturn2search5

That is dramatically more useful to a machine than an undifferentiated block of rich text.

Google's official documentation for recipe structured data follows essentially the same conceptual model: recipe pages can explicitly identify information such as ingredients, cooking and preparation times, reviews and nutrition information so that Search can better understand the page. citeturn3search3turn7search23

This is also where Next.js SSG becomes more than a performance choice.

Because statically generated Next.js pages contain generated HTML before the browser executes application code, the primary recipe information can be delivered directly as page content. citeturn3search0

That does **not** guarantee a search ranking.

It does **not** guarantee inclusion in an AI answer.

And no credible agency should promise either.

Google itself explicitly states that even technically compliant pages are not guaranteed to be crawled, indexed or served in Search. citeturn4search17

What a good architecture does is remove unnecessary obstacles.

### What this means for ChatGPT specifically

OpenAI now separates different forms of crawler access.

**OAI-SearchBot** is the crawler OpenAI uses for surfacing websites in ChatGPT's search features. OpenAI explicitly recommends allowing OAI-SearchBot in `robots.txt` for publishers that want to appear in ChatGPT search results. **GPTBot** is a separate crawler related to potential model-training use, while **ChatGPT-User** is used for certain user-triggered page visits. Those controls are independent. citeturn1view4

That distinction matters when describing the work.

The technically accurate claim is not:

> “We made ChatGPT index the website.”

A stronger and more trustworthy claim is:

> **“We rebuilt the website so that its primary content is delivered in structured, crawlable HTML and can be made accessible to modern search and AI discovery systems, including ChatGPT Search.”**

That wording is both defensible and future-proof.

Crawler access remains a separate deployment setting. A production `robots.txt` must permit **OAI-SearchBot** before anyone can accurately claim that ChatGPT Search crawling is explicitly enabled. OpenAI identifies OAI-SearchBot, not GPTBot, as the relevant control. citeturn1view4

For La Cuisine de Bernard's multilingual architecture, the same discipline should extend to `hreflang`, canonicals and XML sitemaps. Google specifically supports language-variant declarations through HTML or XML sitemaps and notes that sitemaps are especially helpful for large sites and sites containing substantial image/media content. citeturn7search17turn4search7

In other words:

**AI optimisation begins with information architecture.**

Before an AI system can recommend a recipe, it has to be able to discover the page, retrieve it and understand what it is looking at.

The rebuild moved the site significantly closer to that ideal.

## Going live without making readers pay for the rebuild

Large migrations have an uncomfortable final moment.

Eventually somebody has to switch the new system on.

That moment is particularly dangerous for a content website with years of existing URLs. Broken routes, missing media or badly handled redirects can turn an otherwise successful development project into a search and user-experience problem overnight.

Google's own site-migration guidance consequently emphasises mapping existing URLs and handling redirects carefully when website architecture changes. Permanent redirects tell both users and Google where moved content now lives. citeturn7search2turn7search7

We launched the La Cuisine de Bernard replacement with **near-zero downtime**.

That is an important detail because we were not launching an empty greenfield application. We were replacing the engine beneath an established content platform while trying to make the handover almost invisible to its audience.

The best infrastructure migrations are strangely anticlimactic.

Months of engineering culminate in readers visiting the same recipe they wanted for dinner.

Nothing explodes.

That is success.

The client's feedback shows that the less visible part of the project, the problem solving, was noticed.

![Client feedback for the La Cuisine de Bernard project](/assets/images/case-studies/bernard/client-testimonial.svg)

The feedback record shows a **5.0 rating**, with a displayed project period of **25 April to 18 August 2026**.

The client's comment was:

> “Inzint took this project very seriously and managed to find the right solutions.”

The client described Inzint as solution oriented, clear in communication, accountable for outcomes and attentive to detail.

*Source: client feedback received after the project.*

That quote captures the real differentiator in a migration of this kind.

The problem was never going to be solved simply by knowing how to write React components.

The difficult part was encountering thousands of pieces of historical content that did not behave as expected and continuing to find a sensible way forward.

## The result: less baggage, more runway

The strongest way to describe the project is as a change in what La Cuisine de Bernard can do next.

Before the rebuild, the website was constrained by an ageing WordPress implementation, numerous plugins and historical data that lacked a consistent structure.

After the rebuild, content lives behind a modern Next.js/Payload/MongoDB architecture, while the public site exposes rich recipe information as readily parseable page content. Current crawled pages demonstrate distinct ingredients, instructions, timing, servings, authorship and supporting information rather than forcing search systems to infer everything from a single generic content blob. citeturn2search5turn2search6

The visible transformation can be summarised simply:

| Before | After |
|---|---|
| Plugin-heavy WordPress installation | Purpose-built Next.js publishing application |
| Historical content accumulated in inconsistent formats | Content normalised around a reusable editorial model |
| Database and page behaviour tightly coupled to WordPress | MongoDB-backed content exposed through Payload CMS |
| Translation difficult to scale consistently | DeepL-powered translation workflow |
| Large amount of runtime/platform baggage | Pre-rendered public content through Next.js SSG |
| Difficult legacy content relationships | Explicit recipe fields, steps and media relationships |
| Risky major-platform replacement | Near-zero-downtime launch |
| Website designed primarily for browser-era publishing | Architecture better suited to both human readers and machine discovery |

The final lesson is perhaps counter-intuitive.

**Making a website ready for AI did not require replacing Bernard's content with AI-generated content.**

Quite the opposite.

The live website prominently describes Bernard's recipes as personally developed, cooked, tested and photographed, and says the collection contains more than 1,300 recipes developed over years of publishing. citeturn1view2

What we changed was the infrastructure surrounding that human expertise.

The recipes remained Bernard's.

The technology simply became better at carrying them.

And that is a useful principle for any organisation sitting on years of valuable content:

> **Your old website may not have a content problem. It may have a content-access problem.**

Sometimes the highest-value digital transformation is not creating more information.

It is finally giving the information you already own a structure worthy of it.

## Publication and SEO package for Inzint.com

### Recommended page title

**How Inzint Rebuilt La Cuisine de Bernard: WordPress to Next.js, Payload CMS & MongoDB**

This keeps the recognisable client name while naturally including the technologies prospects researching similar migrations are likely to care about.

A more narrative alternative is:

**From WordPress Gridlock to an AI-Readable Website: La Cuisine de Bernard × Inzint**

For search-led acquisition, I would use the first title as the HTML `<title>` and the more emotional second version as the visible case-study headline.

### Recommended meta description

> **See how Inzint migrated La Cuisine de Bernard from a plugin-heavy WordPress site to Next.js, Payload CMS and MongoDB, preserving 1,300+ recipes with near-zero downtime.**

The client's current public website supports the “1,300+ recipes” description, while our launch records support the near-zero-downtime statement. citeturn1view2

### Recommended slug

```text
/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration
```

### Search themes to target naturally

The copy already creates legitimate topical relevance around **WordPress to Next.js migration**, **WordPress content migration**, **Payload CMS development**, **MongoDB content migration**, **headless CMS migration**, **Next.js website development**, **large-scale CMS migration**, **multilingual website development**, **recipe website development** and **AI-ready website architecture**.

These should remain topics in the narrative rather than being repeated mechanically. Google's SEO guidance centres on making content useful and understandable to users and search systems, not on artificially inserting phrases for ranking. citeturn4search33

### Make the case study itself machine-readable

For the Inzint publication, use a very explicit information hierarchy:

```text
Client
Industry
Project type
Challenge
Legacy platform
Solution
Technology stack
Migration challenge
Implementation
Launch
Outcome
Client testimonial
Date
Author / Inzint
```

Google describes structured data as a mechanism for explicitly communicating what information on a page represents. For the case-study article itself, `Article` structured data is appropriate; the corporate pages should also maintain accurate `Organization` structured data. Google says Organization markup can help it understand and disambiguate an organisation's administrative details. citeturn7search0turn7search1turn7search3

The client quote, project dates, named technologies and link to the finished website should appear as actual HTML text rather than only inside decorative graphics. That gives both conventional crawlers and AI retrieval systems something explicit to retrieve.

### One important ChatGPT deployment check

Before publishing the sentence “optimised for ChatGPT” or similar, verify the live site's `robots.txt`.

OpenAI's current documentation says **OAI-SearchBot** is the control relevant to ChatGPT Search visibility and recommends permitting it for sites that want to appear in ChatGPT search results. GPTBot controls a different purpose and does not need to be allowed merely to participate in ChatGPT Search. citeturn1view4

A defensible Inzint claim after verifying that configuration would be:

> **“The rebuilt architecture delivers structured, server-accessible content and is configured for discovery by conventional search crawlers and AI search systems such as ChatGPT Search.”**

That is considerably more credible than promising “AI rankings”.

### Claims worth keeping and claims worth avoiding

The case study has several unusually strong proof points already: a **2 GB legacy export**, irregular historical content, base64 media embedded inside text, 1,300+ live recipes, a complete architecture replacement, multilingual publishing, near-zero downtime and a documented 5.0 client review. The client's website publicly corroborates the 1,300+ figure, while our project records document the migration details and launch experience. citeturn1view2

There is therefore no reason to invent a “300% performance increase”, “95 Lighthouse score”, “40% SEO improvement” or ranking uplift unless Inzint has analytics, Core Web Vitals or Search Console data that proves those numbers.

The public evidence supports a much more believable story:

**Inzint inherited a website carrying more than a decade of valuable but inconsistent content, reconstructed that content into a modern publishing architecture, launched the replacement without materially interrupting its readers, and left La Cuisine de Bernard with a foundation that is easier for editors, developers, traditional search engines and modern AI discovery systems to understand.**

That is a stronger case study because the difficult parts are real.
