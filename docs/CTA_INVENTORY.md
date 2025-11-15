# CTA (Call-to-Action) Inventory

> **Last Updated:** 2025-11-15
> **Purpose:** Comprehensive inventory of all CTAs in the codebase for systematic review and optimization

---

## Table of Contents

1. [Navigation & Header CTAs](#1-navigation--header-ctas)
2. [Home Page CTAs](#2-home-page-ctas)
3. [Contact Page CTAs](#3-contact-page-ctas)
4. [Hire Developers Page CTAs](#4-hire-developers-page-ctas)
5. [Footer CTAs](#5-footer-ctas)
6. [Modal CTAs](#6-modal-ctas)
7. [Summary by Priority](#7-summary-by-priority)
8. [Action Items](#8-action-items)

---

## 1. Navigation & Header CTAs

### 1.1 Desktop Navigation Bar
**File:** [src/components/layout/Navigation.tsx](src/components/layout/Navigation.tsx#L120-L126)

| CTA Text | Type | Destination | Status | Priority |
|----------|------|-------------|--------|----------|
| Contact Us | Button/Link | `/contact` | ✅ Working | High |

**Notes:**
- Primary CTA in desktop navigation
- Blue background with phone icon
- Consistent across all pages

---

### 1.2 Mobile Menu
**File:** [src/components/layout/MobileMenu.tsx](src/components/layout/MobileMenu.tsx#L125-L132)

| CTA Text | Type | Destination | Status | Priority |
|----------|------|-------------|--------|----------|
| Contact Us | Button/Link | `/contact` | ✅ Working | High |

**Notes:**
- Appears in mobile menu footer
- Matches desktop navigation styling
- Good mobile UX placement

---

### 1.3 Announcement Bar
**File:** [src/components/layout/AnnouncementBar.tsx](src/components/layout/AnnouncementBar.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Learn More (Mobile) | Link | `/awards` | 63-69 | ✅ Working | Medium |
| Learn More (Desktop) | Link | `/awards` | 80-87 | ✅ Working | Medium |

**Notes:**
- Top announcement bar CTA
- Configurable destination
- Inline link with arrow icon
- Responsive design (separate mobile/desktop)

---

## 2. Home Page CTAs

### 2.1 Hero Section
**File:** [src/components/sections/HeroSection.tsx](src/components/sections/HeroSection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Book Discovery Call | Link | `/contact` | 75-78 | ✅ **FIXED** | **Critical** |
| View Portfolio | Link | `/portfolio` | 79-81 | ✅ **FIXED** | High |

**Notes:**
- Primary and secondary hero CTAs
- ✅ **FIXED:** Both CTAs now have proper destinations
- Primary: Links to contact page for booking
- Secondary: Links to portfolio page
- Most important CTAs on homepage

**Changes Made:**
- ✅ Changed from `button` to `Link` components
- ✅ Added `/contact` destination to "Book Discovery Call"
- ✅ Added `/portfolio` destination to "View Portfolio"

---

### 2.2 Services Section
**File:** [src/components/sections/ServicesSection.tsx](src/components/sections/ServicesSection.tsx)

| CTA Text | Type | Destination | Line | Count | Status | Priority |
|----------|------|-------------|------|-------|--------|----------|
| Learn More | Button | None | 167-170 | 8× | ❌ No Action | High |
| Explore All Services | Button | None | 184-186 | 1× | ❌ No Action | High |
| Schedule a Consultation | Button | None | 187-189 | 1× | ❌ No Action | High |

**Notes:**
- 8 "Learn More" buttons (one per service card)
- Text button with arrow icon
- Bottom section has two CTAs side-by-side
- All need destinations assigned

**Action Required:**
- [ ] Create individual service pages for 8 "Learn More" buttons
- [ ] Assign destination to "Explore All Services" (`/services`)
- [ ] Assign destination to "Schedule a Consultation" (calendar or `/contact`)

---

### 2.3 ROI Section
**File:** [src/components/sections/ROISection.tsx](src/components/sections/ROISection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Calculate Your ROI | Button | None | 180-183 | ❌ No Action | Medium |
| Book a Consultation | Button | None | 184-186 | ❌ No Action | High |

**Notes:**
- CTA card at section bottom
- White buttons on dark background
- "Calculate Your ROI" needs calculator tool/modal
- "Book a Consultation" duplicate of other booking CTAs

**Action Required:**
- [ ] Build ROI calculator tool/modal for "Calculate Your ROI"
- [ ] Assign destination to "Book a Consultation" (calendar or `/contact`)

---

### 2.4 FAQ Section
**File:** [src/components/sections/FAQSection.tsx](src/components/sections/FAQSection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Contact Support | Button | None | 200-202 | ❌ No Action | Medium |
| Schedule a Call | Button | None | 203-205 | ❌ No Action | High |

**Notes:**
- FAQ CTA section at bottom
- White buttons
- Support and booking options

**Action Required:**
- [ ] Assign destination to "Contact Support" (`/contact` or support email)
- [ ] Assign destination to "Schedule a Call" (calendar or `/contact`)

---

### 2.5 Showcase Section
**File:** [src/components/sections/ShowcaseSection.tsx](src/components/sections/ShowcaseSection.tsx)

| CTA Text | Type | Destination | Line | Count | Status | Priority |
|----------|------|-------------|------|-------|--------|----------|
| View Case Study | Button | None | 172-175 | Multiple | ❌ No Action | High |

**Notes:**
- Appears on each showcase card
- White button with arrow icon
- Needs individual case study pages/destinations

**Action Required:**
- [ ] Create case study pages for each client
- [ ] Assign dynamic destinations based on showcase item

---

### 2.6 Video Testimonials Section
**File:** [src/components/sections/VideoTestimonialsSection.tsx](src/components/sections/VideoTestimonialsSection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| See More Success Stories | Button | None | 202-204 | ❌ No Action | Medium |

**Notes:**
- Bottom of testimonials section
- Primary gradient button
- Should link to testimonials/case studies page

**Action Required:**
- [ ] Create testimonials archive page
- [ ] Assign destination (`/testimonials` or `/case-studies`)

---

## 3. Contact Page CTAs

### 3.1 Contact Hero Section
**File:** [src/components/sections/ContactHeroSection.tsx](src/components/sections/ContactHeroSection.tsx#L15)

| Element | Type | Notes |
|---------|------|-------|
| "Get in Touch" | Heading | Informational, not actionable |

**Notes:**
- Text-only heading
- No CTA buttons in hero

---

### 3.2 Contact Form Section
**File:** [src/components/sections/ContactFormSection.tsx](src/components/sections/ContactFormSection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Send Message | Form Submit | Form handler | 187-207 | ⚠️ Needs Backend | **Critical** |

**Notes:**
- Main contact form submit button
- Has states: Normal, Submitting, Submitted
- Gradient blue-to-purple button with send icon
- Form fields: Name, Email, Phone, Company, Service, Budget, Message

**Action Required:**
- [ ] Implement form submission handler
- [ ] Set up email notification system
- [ ] Add form validation
- [ ] Configure success/error states
- [ ] Add reCAPTCHA or spam protection

---

### 3.3 Contact CTA Section
**File:** [src/components/sections/ContactCTASection.tsx](src/components/sections/ContactCTASection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Schedule a Call | Link | `/contact` | 22-27 | ⚠️ Circular | Medium |
| View Portfolio | Link | `/portfolio` | 28-33 | ⚠️ Check Page | Medium |

**Notes:**
- Two CTAs in contact page CTA card
- "Schedule a Call" links back to `/contact` (circular reference)
- "View Portfolio" needs portfolio page to exist

**Action Required:**
- [ ] Change "Schedule a Call" to calendar booking link
- [ ] Verify `/portfolio` page exists or create it

---

## 4. Hire Developers Page CTAs

### 4.1 Hire Developers Hero Section
**File:** [src/components/sections/HireDevelopersHeroSection.tsx](src/components/sections/HireDevelopersHeroSection.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Hire Developers Now | Link | `/contact` | 46-51 | ✅ Working | **Critical** |
| How It Works | Link | `#how-it-works` | 52-57 | ✅ Working | Medium |

**Notes:**
- Primary: Gradient blue-to-purple button
- Secondary: Blue border button
- "How It Works" uses anchor link (smooth scroll)

---

### 4.2 Developer Roles Section
**File:** [src/components/sections/DeveloperRolesSection.tsx](src/components/sections/DeveloperRolesSection.tsx)

| Card Title | Destination | Line | Status | Priority |
|------------|-------------|------|--------|----------|
| Mobile Developer | `/hire-developers/mobile` | 72-93 | ⚠️ Check Page | High |
| Web Developer | `/hire-developers/web` | 72-93 | ⚠️ Check Page | High |
| AI/ML Engineer | `/hire-developers/ai-ml` | 72-93 | ⚠️ Check Page | High |
| DevOps Engineer | `/hire-developers/devops` | 72-93 | ⚠️ Check Page | High |
| Backend Developer | `/hire-developers/backend` | 72-93 | ⚠️ Check Page | High |
| QA Engineer | `/hire-developers/qa` | 72-93 | ⚠️ Check Page | High |

**Notes:**
- 6 clickable role cards
- Each links to specialized page
- Hover-interactive cards
- Clean navigation flow

**Action Required:**
- [ ] Verify all 6 role-specific pages exist
- [ ] Create missing role pages
- [ ] Ensure consistent content structure

---

## 5. Footer CTAs

### 5.1 Newsletter Subscription
**File:** [src/components/sections/FooterSection.tsx](src/components/sections/FooterSection.tsx#L147-L156)

| Element | Type | Status | Priority |
|---------|------|--------|----------|
| Email Input + Submit Button | Form | ⚠️ Needs Backend | Medium |

**Notes:**
- Newsletter signup form
- Input field with arrow button
- Needs email service integration

**Action Required:**
- [ ] Integrate email marketing service (e.g., Mailchimp, SendGrid)
- [ ] Add validation
- [ ] Configure success/error states

---

### 5.2 Social Media Links
**File:** [src/components/sections/FooterSection.tsx](src/components/sections/FooterSection.tsx#L163-L172)

| Platform | Destination | Status | Priority |
|----------|-------------|--------|----------|
| Facebook | `#` | ❌ Placeholder | Low |
| Twitter | `#` | ❌ Placeholder | Low |
| LinkedIn | `#` | ❌ Placeholder | Medium |
| Instagram | `#` | ❌ Placeholder | Low |
| YouTube | `#` | ❌ Placeholder | Low |
| GitHub | `#` | ❌ Placeholder | Low |

**Notes:**
- 6 social media links
- All currently placeholder `#`
- Icons present

**Action Required:**
- [ ] Add actual social media URLs
- [ ] Prioritize LinkedIn, Twitter for B2B
- [ ] Consider removing unused platforms

---

### 5.3 Footer Navigation Links
**File:** [src/components/sections/FooterSection.tsx](src/components/sections/FooterSection.tsx)

#### Services Column (Lines 192-198)
| Link Text | Destination | Status |
|-----------|-------------|--------|
| Custom Software Development | `#` | ❌ Placeholder |
| Mobile App Development | `#` | ❌ Placeholder |
| Web Application Development | `#` | ❌ Placeholder |
| Cloud & DevOps Services | `#` | ❌ Placeholder |
| AI & Machine Learning | `#` | ❌ Placeholder |
| UI/UX Design Services | `#` | ❌ Placeholder |
| Quality Assurance & Testing | `#` | ❌ Placeholder |
| IT Consulting | `#` | ❌ Placeholder |

#### Company Column (Lines 212-220)
| Link Text | Destination | Status |
|-----------|-------------|--------|
| About Us | `#` | ❌ Placeholder |
| Leadership Team | `#` | ❌ Placeholder |
| Careers | `#` | ❌ Placeholder |
| Blog | `#` | ❌ Placeholder |
| Press & Media | `#` | ❌ Placeholder |
| Awards & Recognition | `#` | ❌ Placeholder |
| Partnerships | `#` | ❌ Placeholder |
| Contact Us | `#` | ❌ Placeholder |

#### Industries Column (Lines 234-242)
| Link Text | Destination | Status |
|-----------|-------------|--------|
| Healthcare | `#` | ❌ Placeholder |
| Finance & Banking | `#` | ❌ Placeholder |
| E-commerce & Retail | `#` | ❌ Placeholder |
| Education | `#` | ❌ Placeholder |
| Manufacturing | `#` | ❌ Placeholder |
| Real Estate | `#` | ❌ Placeholder |
| Logistics & Transportation | `#` | ❌ Placeholder |
| Entertainment & Media | `#` | ❌ Placeholder |

#### Resources Column (Lines 256-263)
| Link Text | Destination | Status |
|-----------|-------------|--------|
| Case Studies | `#` | ❌ Placeholder |
| White Papers | `#` | ❌ Placeholder |
| Developer Resources | `#` | ❌ Placeholder |
| API Documentation | `#` | ❌ Placeholder |
| Knowledge Base | `#` | ❌ Placeholder |
| Webinars | `#` | ❌ Placeholder |
| Free Tools | `#` | ❌ Placeholder |
| FAQ | `#` | ❌ Placeholder |

**Notes:**
- 32 total footer navigation links
- All currently placeholder `#`
- Well-organized into 4 columns

**Action Required:**
- [ ] Create/assign destinations for all 32 links
- [ ] Prioritize high-traffic pages first
- [ ] Consider removing links without planned pages

---

### 5.4 Contact Information
**File:** [src/components/sections/FooterSection.tsx](src/components/sections/FooterSection.tsx)

#### Phone Numbers (Lines 306-311)
| Office | Type | Count | Status |
|--------|------|-------|--------|
| 4 Office Locations | `tel:` links | 4 | ⚠️ Check Numbers |

#### Email Addresses (Lines 314-320)
| Office | Type | Count | Status |
|--------|------|-------|--------|
| 4 Office Locations | `mailto:` links | 4 | ⚠️ Check Emails |

**Notes:**
- Phone and email CTAs for each office
- Functional link types (`tel:`, `mailto:`)

**Action Required:**
- [ ] Verify phone numbers are correct
- [ ] Verify email addresses are active
- [ ] Test links on mobile devices

---

### 5.5 Legal Links
**File:** [src/components/sections/FooterSection.tsx](src/components/sections/FooterSection.tsx#L346-L357)

| Link Text | Destination | Status | Priority |
|-----------|-------------|--------|----------|
| Privacy Policy | `#` | ❌ Placeholder | **High** |
| Terms of Service | `#` | ❌ Placeholder | **High** |
| Cookie Policy | `#` | ❌ Placeholder | Medium |
| Sitemap | `#` | ❌ Placeholder | Low |

**Notes:**
- Legal compliance links
- Privacy Policy and Terms are legally required

**Action Required:**
- [ ] **URGENT:** Create Privacy Policy page
- [ ] **URGENT:** Create Terms of Service page
- [ ] Create Cookie Policy page
- [ ] Generate sitemap.xml

---

### 5.6 Back to Top Button
**File:** [src/components/sections/FooterSection.tsx](src/components/sections/FooterSection.tsx#L375-L393)

| CTA | Type | Action | Status | Priority |
|-----|------|--------|--------|----------|
| Back to Top | Button | Scroll to top | ✅ Working | Low |

**Notes:**
- Fixed position (bottom right)
- Circular primary button with up arrow
- Good UX feature

---

## 6. Modal CTAs

### 6.1 Contact Modal
**File:** [src/components/ui/ContactModal.tsx](src/components/ui/ContactModal.tsx)

| CTA Text | Type | Destination | Line | Status | Priority |
|----------|------|-------------|------|--------|----------|
| Send Message | Form Submit | Form handler | 269-285 | ⚠️ Needs Backend | High |

**Notes:**
- Full contact form in modal popup
- States: Normal, Submitting (with loader), Success
- Gradient primary button with send icon
- Same form as contact page

**Action Required:**
- [ ] Share backend with contact page form
- [ ] Implement form submission handler
- [ ] Add validation
- [ ] Configure success/error states

---

## 7. Summary by Priority

### 🔴 Critical Priority (Immediate Action Required)

| CTA | Location | Issue | File |
|-----|----------|-------|------|
| Book Discovery Call | Hero Section | No destination | [HeroSection.tsx:74-77](src/components/sections/HeroSection.tsx#L74-L77) |
| Send Message (Contact) | Contact Page | Needs backend | [ContactFormSection.tsx:187-207](src/components/sections/ContactFormSection.tsx#L187-L207) |
| Send Message (Modal) | Contact Modal | Needs backend | [ContactModal.tsx:269-285](src/components/ui/ContactModal.tsx#L269-L285) |
| Privacy Policy | Footer | Legally required | [FooterSection.tsx:346-357](src/components/sections/FooterSection.tsx#L346-L357) |
| Terms of Service | Footer | Legally required | [FooterSection.tsx:346-357](src/components/sections/FooterSection.tsx#L346-L357) |
| Hire Developers Now | Hire Page | Already working ✅ | [HireDevelopersHeroSection.tsx:46-51](src/components/sections/HireDevelopersHeroSection.tsx#L46-L51) |

---

### 🟡 High Priority

| CTA | Location | Issue | File |
|-----|----------|-------|------|
| View Portfolio | Hero Section | No destination | [HeroSection.tsx:78-80](src/components/sections/HeroSection.tsx#L78-L80) |
| Learn More (×8) | Services Section | No destinations | [ServicesSection.tsx:167-170](src/components/sections/ServicesSection.tsx#L167-L170) |
| Explore All Services | Services Section | No destination | [ServicesSection.tsx:184-186](src/components/sections/ServicesSection.tsx#L184-L186) |
| Schedule a Consultation | Services Section | No destination | [ServicesSection.tsx:187-189](src/components/sections/ServicesSection.tsx#L187-L189) |
| Book a Consultation | ROI Section | No destination | [ROISection.tsx:184-186](src/components/sections/ROISection.tsx#L184-L186) |
| Schedule a Call | FAQ Section | No destination | [FAQSection.tsx:203-205](src/components/sections/FAQSection.tsx#L203-L205) |
| View Case Study | Showcase Section | No destinations | [ShowcaseSection.tsx:172-175](src/components/sections/ShowcaseSection.tsx#L172-L175) |
| Developer Role Cards (×6) | Hire Developers | Need page verification | [DeveloperRolesSection.tsx:72-93](src/components/sections/DeveloperRolesSection.tsx#L72-L93) |

---

### 🟢 Medium Priority

| CTA | Location | Issue | File |
|-----|----------|-------|------|
| Learn More | Announcement Bar | Working ✅ | [AnnouncementBar.tsx:63-87](src/components/layout/AnnouncementBar.tsx#L63-L87) |
| Calculate Your ROI | ROI Section | Needs tool/modal | [ROISection.tsx:180-183](src/components/sections/ROISection.tsx#L180-L183) |
| Contact Support | FAQ Section | No destination | [FAQSection.tsx:200-202](src/components/sections/FAQSection.tsx#L200-L202) |
| See More Success Stories | Testimonials | No destination | [VideoTestimonialsSection.tsx:202-204](src/components/sections/VideoTestimonialsSection.tsx#L202-L204) |
| Schedule a Call | Contact CTA | Circular reference | [ContactCTASection.tsx:22-27](src/components/sections/ContactCTASection.tsx#L22-L27) |
| View Portfolio | Contact CTA | Need page verification | [ContactCTASection.tsx:28-33](src/components/sections/ContactCTASection.tsx#L28-L33) |
| Newsletter Form | Footer | Needs backend | [FooterSection.tsx:147-156](src/components/sections/FooterSection.tsx#L147-L156) |
| Cookie Policy | Footer | Missing page | [FooterSection.tsx:346-357](src/components/sections/FooterSection.tsx#L346-L357) |

---

### ⚪ Low Priority

| CTA | Location | Issue | File |
|-----|----------|-------|------|
| Social Media Links (×6) | Footer | Placeholder URLs | [FooterSection.tsx:163-172](src/components/sections/FooterSection.tsx#L163-L172) |
| Footer Nav Links (×32) | Footer | Placeholder URLs | [FooterSection.tsx:192-263](src/components/sections/FooterSection.tsx#L192-L263) |
| Sitemap | Footer | Missing page | [FooterSection.tsx:346-357](src/components/sections/FooterSection.tsx#L346-L357) |
| Back to Top | Footer | Working ✅ | [FooterSection.tsx:375-393](src/components/sections/FooterSection.tsx#L375-L393) |

---

## 8. Action Items

### Phase 1: Critical Fixes (Week 1)

- [ ] **Hero Section CTAs**
  - [ ] Add destination to "Book Discovery Call" button
  - [ ] Add destination to "View Portfolio" button

- [ ] **Contact Forms**
  - [ ] Set up form backend (API endpoint)
  - [ ] Configure email service
  - [ ] Add form validation
  - [ ] Test submission flow
  - [ ] Add spam protection

- [ ] **Legal Pages**
  - [ ] Create Privacy Policy page
  - [ ] Create Terms of Service page
  - [ ] Link from footer

---

### Phase 2: High-Value CTAs (Week 2)

- [ ] **Service Pages**
  - [ ] Create 8 individual service pages
  - [ ] Link "Learn More" buttons
  - [ ] Create `/services` overview page
  - [ ] Link "Explore All Services"

- [ ] **Booking/Consultation CTAs**
  - [ ] Set up calendar integration (Calendly, Cal.com, etc.)
  - [ ] Update all "Schedule a Call" CTAs
  - [ ] Update all "Book a Consultation" CTAs
  - [ ] Update all "Schedule a Consultation" CTAs

- [ ] **Portfolio/Case Studies**
  - [ ] Create portfolio page
  - [ ] Create individual case study pages
  - [ ] Link "View Portfolio" CTAs
  - [ ] Link "View Case Study" buttons
  - [ ] Create testimonials archive

---

### Phase 3: Developer Hiring Flow (Week 3)

- [ ] **Role-Specific Pages**
  - [ ] Create `/hire-developers/mobile` page
  - [ ] Create `/hire-developers/web` page
  - [ ] Create `/hire-developers/ai-ml` page
  - [ ] Create `/hire-developers/devops` page
  - [ ] Create `/hire-developers/backend` page
  - [ ] Create `/hire-developers/qa` page

---

### Phase 4: Footer & Secondary CTAs (Week 4)

- [ ] **Footer Navigation**
  - [ ] Audit which pages are needed
  - [ ] Create priority pages
  - [ ] Update all footer links
  - [ ] Remove unused links

- [ ] **Newsletter**
  - [ ] Choose email service provider
  - [ ] Set up integration
  - [ ] Create welcome email
  - [ ] Test subscription flow

- [ ] **Social Media**
  - [ ] Add real social media URLs
  - [ ] Remove unused platforms

- [ ] **Contact Info**
  - [ ] Verify all phone numbers
  - [ ] Verify all email addresses
  - [ ] Test tel: and mailto: links

---

### Phase 5: Advanced Features (Week 5+)

- [ ] **ROI Calculator**
  - [ ] Design calculator logic
  - [ ] Build calculator component/modal
  - [ ] Link "Calculate Your ROI" button

- [ ] **Analytics & Tracking**
  - [ ] Add click tracking to all CTAs
  - [ ] Set up conversion tracking
  - [ ] Implement A/B testing framework

- [ ] **SEO & Performance**
  - [ ] Generate sitemap.xml
  - [ ] Create Cookie Policy page
  - [ ] Optimize CTA placement
  - [ ] Add structured data

---

## 9. CTA Optimization Recommendations

### Conversion Rate Optimization (CRO)

1. **Consolidate Booking CTAs**
   - Multiple variations: "Book Discovery Call", "Schedule a Call", "Book a Consultation", "Schedule a Consultation"
   - **Recommendation:** Standardize to one or two variations for consistency
   - Suggested: "Book a Discovery Call" (primary), "Schedule a Consultation" (secondary)

2. **Add Urgency Elements**
   - Current CTAs lack urgency
   - **Suggestions:**
     - "Book Your Free Discovery Call"
     - "Get Started Today"
     - "Limited Slots Available"

3. **Value Proposition in CTAs**
   - Many generic "Learn More" buttons
   - **Suggestions:**
     - "See How We Can Help"
     - "Get Your Custom Quote"
     - "Start Your Project"

4. **Sticky CTA for Mobile**
   - No persistent CTA on mobile
   - **Recommendation:** Add sticky "Contact Us" or "Book a Call" button

5. **Exit-Intent Popup**
   - No exit-intent capture
   - **Recommendation:** Add exit-intent modal with special offer/CTA

### A/B Testing Ideas

- [ ] Hero CTA text: "Book Discovery Call" vs "Get Started Free" vs "Schedule a Consultation"
- [ ] Hero button color: Gradient vs Solid blue vs Green
- [ ] CTA placement: Above fold vs After services section
- [ ] Form length: Full form vs 2-step form vs Just email + book call

### Analytics Setup

- [ ] Track click-through rate (CTR) for each CTA
- [ ] Set up conversion funnels
- [ ] Track form abandonment rates
- [ ] Monitor time to conversion
- [ ] A/B test top CTAs

---

## 10. Status Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Working correctly |
| ❌ | Not working / Placeholder |
| ⚠️ | Partially working / Needs attention |
| 🔴 | Critical priority |
| 🟡 | High priority |
| 🟢 | Medium priority |
| ⚪ | Low priority |

---

## Document Metadata

**Total CTAs Inventoried:** 100+
**Critical Issues:** 6
**High Priority Issues:** 20+
**Medium Priority Issues:** 8
**Low Priority Issues:** 40+

**Next Review Date:** 2025-12-15
**Owner:** Development Team
**Last Updated By:** Claude Code Analysis
