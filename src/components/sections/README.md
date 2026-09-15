# Page sections

Section components used by the App Router pages in `src/app`. Each section is a
standalone React component (Tailwind CSS, Framer Motion) and is exported from
`index.ts`.

Content rules for this directory:

- Offices, contact details, clients and positioning come from `src/data/company.ts`.
- Service page content comes from `src/data/services.ts`; pricing tiers from `src/data/pricing.ts`.
- No statistics may appear on the site unless they can be traced to the company
  profile, a published case study, the terms of service or the support page.
- The homepage renders: HeroSectionV2, HowWeDoItSection, FeaturedProjects,
  ServicesSection, VideoTestimonialsSection, ROISection (case-study outcomes),
  TechnologiesSection, PartnersSection (real clients), FAQSection, FooterSection.

The September 2026 cleanup removed the Appinventiv template sections (awards,
certifications, partnerships, press, blog, guides, ebooks, whitepapers, events,
podcasts, infographics, showcase, social impact, diversity).
