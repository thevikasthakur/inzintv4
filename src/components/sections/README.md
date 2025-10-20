# Homepage Sections

This directory contains all the main sections for the Appinventiv clone homepage. Each section is a standalone React component built with TypeScript, Framer Motion animations, and Tailwind CSS.

## 📁 Available Sections

### 1. **HeroSection.tsx**
The main hero section with animated elements and key metrics.

**Features:**
- Animated headline and subheadline
- Primary and secondary CTA buttons
- Background gradient and pattern effects
- Statistics/metrics display (Projects, Users, Revenue)
- Floating card animations
- Scroll indicator
- Fully mobile responsive

**Usage:**
```tsx
import { HeroSection } from '@/components/sections';

export default function HomePage() {
  return <HeroSection />;
}
```

---

### 2. **ShowcaseSection.tsx**
Client showcase with stacked card carousel featuring major brands.

**Features:**
- Stacked card carousel effect
- Auto-playing progress indicators
- Navigation controls (Previous/Next)
- Case study cards with metrics
- Featured clients: Adidas, IKEA, Pizza Hut, Americana
- Smooth transitions and animations

**Data Structure:**
Each showcase item includes:
- Brand name and description
- Key metrics (growth, conversion, rating)
- Gradient color scheme
- CTA button

---

### 3. **VideoTestimonialsSection.tsx**
Video testimonials grid with interactive play controls.

**Features:**
- 2-column responsive grid
- Video player placeholders with play buttons
- Mute/unmute controls
- Client information and ratings
- Quote display
- Company badges
- Star ratings

**Customization:**
Update the `testimonials` array to add your own video testimonials with:
- Client details
- Video URLs
- Thumbnails
- Ratings

---

### 4. **ServicesSection.tsx**
Comprehensive services grid showcasing 8 core services.

**Features:**
- 4-column responsive grid
- Icon-based service cards
- Hover effects and animations
- Feature lists for each service
- Gradient color schemes
- CTAs for each service

**Services Included:**
1. AI Development
2. Mobile App Development
3. Software Development
4. Cloud Solutions
5. Blockchain Development
6. IoT Solutions
7. Cybersecurity
8. UI/UX Design

---

### 5. **ROISection.tsx**
ROI statistics with animated counters and metrics.

**Features:**
- Animated counter components
- 3 main ROI cards (Efficiency, Growth, Innovation)
- Sub-statistics for each metric
- Gradient backgrounds
- CTA banner
- Trust indicators

**Animation:**
Uses `useMotionValue` and `useSpring` from Framer Motion for smooth number counting animations triggered on scroll.

---

### 6. **TechnologiesSection.tsx**
Technologies section with sticky header and tech stack display.

**Features:**
- Sticky animated header
- 8 technology category cards
- Tool/framework lists
- Scroll-based opacity effects
- CTA card for custom solutions
- Stats bar

**Technologies Covered:**
- Artificial Intelligence
- Cloud Computing
- Blockchain
- Internet of Things
- Big Data & Analytics
- Mobile Technologies
- Cybersecurity
- DevOps & Automation

---

### 7. **PartnersSection.tsx**
Client logos showcase with animated marquee.

**Features:**
- Auto-scrolling logo marquee
- Featured client statistics
- Major clients grid
- Trust badges
- ISO certifications
- Hover effects

**Marquee:**
Implements seamless infinite scroll using requestAnimationFrame for smooth animation.

---

### 8. **AwardsSection.tsx**
Awards and badges carousel with certifications.

**Features:**
- 3-item carousel with navigation
- Award cards with icons and descriptions
- Certifications grid
- Progress dots
- Stats display
- Category-based organization

**Data:**
Includes awards for:
- Mobile App Excellence
- Development Rankings
- AI Innovation
- UX Design
- Technology Leadership
- Client Satisfaction

---

### 9. **FAQSection.tsx**
Accordion-style FAQ section with category filtering.

**Features:**
- Category filter tabs
- Animated accordion
- Smooth expand/collapse
- CTA section
- Support statistics
- 8 comprehensive FAQs

**Categories:**
- General
- Pricing
- Process
- Technology
- Support
- Security

---

### 10. **FooterSection.tsx**
Comprehensive footer with global office locations.

**Features:**
- Brand information and newsletter signup
- Social media links
- 4 navigation columns (Services, Company, Industries, Resources)
- Global office locations (4 offices)
- Contact information
- Trust badges
- Bottom bar with legal links
- Back-to-top button

**Offices:**
- New York, USA
- London, UK
- Dubai, UAE
- Singapore

---

## 🎨 Design System

All sections use the design system defined in `/src/app/globals.css`:

### Colors
- **Primary Blue:** `#0069ff`
- **Navy:** `#002149`
- **Gray Scale:** Various shades
- **Gradients:** Custom gradient combinations

### Typography
- **Font Family:** System UI
- **Font Weights:** Regular, Semibold, Bold
- **Responsive sizes:** Mobile-first approach

### Spacing
- **Container:** Max-width 1280px with responsive padding
- **Section Padding:** 20/32 (mobile/desktop)

### Animations
All animations use Framer Motion with:
- `initial` - Starting state
- `animate` or `whileInView` - End state
- `transition` - Animation timing
- `viewport={{ once: true }}` - Trigger once on scroll

---

## 📱 Responsive Design

All sections are fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Grid layouts automatically adjust:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

---

## 🎭 Animation Features

### Scroll-triggered Animations
- Fade in on scroll
- Slide up on scroll
- Stagger delays for grid items
- Scale animations

### Interactive Animations
- Hover effects
- Click animations
- Smooth transitions
- Transform animations

### Motion Variants
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.1 }}
```

---

## 🔧 Customization

### Update Content
Each section has data arrays/objects at the top:

```tsx
const services = [
  {
    id: 1,
    icon: Brain,
    title: 'AI Development',
    description: '...',
    // ... more fields
  },
  // ... more items
];
```

### Update Colors
Modify the color schemes in each component:

```tsx
color: 'from-purple-500 to-pink-500'
bgColor: 'bg-purple-50'
```

### Update Icons
All icons use `lucide-react`. Import and replace as needed:

```tsx
import { NewIcon } from 'lucide-react';
```

---

## 🚀 Usage Example

Create a complete homepage:

```tsx
import {
  HeroSection,
  ShowcaseSection,
  ServicesSection,
  ROISection,
  TechnologiesSection,
  PartnersSection,
  VideoTestimonialsSection,
  AwardsSection,
  FAQSection,
  FooterSection
} from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <ServicesSection />
      <VideoTestimonialsSection />
      <ROISection />
      <TechnologiesSection />
      <PartnersSection />
      <AwardsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
```

---

## 📦 Dependencies

All sections use:
- **React 19** - Component framework
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Tailwind CSS** - Styling
- **Next.js 15** - Framework

---

## ♿ Accessibility

All sections include:
- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Focus states
- Alt text (where applicable)

---

## 🎯 Performance

Optimizations included:
- `viewport={{ once: true }}` - Animations trigger once
- Lazy loading ready
- Optimized animations
- Minimal re-renders
- Efficient state management

---

## 📝 Notes

1. **Images:** Placeholder paths are used. Replace with actual image URLs.
2. **Videos:** Video player is a placeholder. Integrate with react-player or similar.
3. **Links:** Update `href="#"` with actual routes.
4. **API Integration:** Connect CTAs to your backend/forms.
5. **Analytics:** Add tracking to buttons and interactions.

---

## 🔮 Future Enhancements

Consider adding:
- Dark mode support
- More animation variants
- Loading states
- Error boundaries
- A/B testing variants
- Analytics integration
- SEO optimization
- Image optimization with next/image

---

## 📄 License

Part of the Appinventiv Clone project.
