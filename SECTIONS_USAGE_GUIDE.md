# Homepage Sections - Quick Usage Guide

## 🎯 Quick Start

All homepage sections are now available in `/src/components/sections/`. Here's how to use them:

### 1. Import Sections

```tsx
import {
  HeroSection,
  ShowcaseSection,
  ServicesSection,
  VideoTestimonialsSection,
  ROISection,
  TechnologiesSection,
  PartnersSection,
  AwardsSection,
  FAQSection,
  FooterSection
} from '@/components/sections';
```

### 2. Create Your Homepage

```tsx
// app/page.tsx
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

## 📋 Section Overview

| Section | Purpose | Key Features |
|---------|---------|--------------|
| **HeroSection** | Landing/Hero area | Animated headline, CTAs, stats, gradients |
| **ShowcaseSection** | Client portfolio | Stacked carousel, case studies, metrics |
| **ServicesSection** | Service offerings | 8 service cards, icons, feature lists |
| **VideoTestimonialsSection** | Client testimonials | Video grid, play controls, ratings |
| **ROISection** | Business impact | Animated counters, ROI metrics, CTA |
| **TechnologiesSection** | Tech stack | Sticky header, 8 tech categories |
| **PartnersSection** | Client logos | Auto-scroll marquee, trust badges |
| **AwardsSection** | Recognition | Carousel, certifications, stats |
| **FAQSection** | Questions & Answers | Accordion, category filter |
| **FooterSection** | Site footer | Links, offices, newsletter, social |

---

## 🎨 Customization Tips

### Update Section Content

Each section has data defined at the top. Example:

```tsx
// In ServicesSection.tsx
const services = [
  {
    id: 1,
    icon: Brain,
    title: 'AI Development',
    description: 'Your description here',
    // ... update these values
  },
];
```

### Change Colors

```tsx
// Update gradient colors
color: 'from-purple-500 to-pink-500'
bgColor: 'bg-purple-50'
```

### Modify Animations

```tsx
// Adjust animation timing
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}
```

---

## 🔧 Common Modifications

### 1. Update CTA Buttons

```tsx
// Find buttons in each section
<button onClick={() => yourFunction()}>
  Your Text
</button>
```

### 2. Change Images/Icons

```tsx
// Replace Lucide icons
import { YourIcon } from 'lucide-react';

// Update image sources
<img src="/your-image.jpg" alt="Description" />
```

### 3. Update Links

```tsx
// Replace placeholder links
<Link href="/your-route">Text</Link>
```

### 4. Modify Layouts

```tsx
// Change grid columns
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* items */}
</div>
```

---

## 📱 Responsive Breakpoints

All sections use these breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

Example:
```tsx
<div className="text-xl md:text-2xl lg:text-3xl">
  Responsive text
</div>
```

---

## 🎭 Animation Patterns

### Fade In On Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Stagger Children
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

### Hover Effect
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="transition-all"
>
  Content
</motion.div>
```

---

## 🚀 Integration Checklist

- [ ] Import sections in your page
- [ ] Update content arrays with your data
- [ ] Replace placeholder images
- [ ] Update CTA button links/actions
- [ ] Add your brand colors
- [ ] Configure email/contact forms
- [ ] Add analytics tracking
- [ ] Test responsive layouts
- [ ] Verify animations
- [ ] Add real video content (VideoTestimonialsSection)
- [ ] Update office locations (FooterSection)
- [ ] Connect newsletter signup
- [ ] Update social media links
- [ ] Add SEO metadata

---

## 💡 Pro Tips

1. **Performance**: Use `viewport={{ once: true }}` to prevent re-animation on scroll
2. **Loading**: Add suspense boundaries for lazy loading
3. **Images**: Use Next.js `<Image>` component for optimization
4. **Forms**: Integrate with your backend API for CTAs
5. **Analytics**: Add event tracking to buttons
6. **SEO**: Add proper meta tags and structured data
7. **A11y**: Test with screen readers
8. **Dark Mode**: Consider adding dark mode variants

---

## 🐛 Troubleshooting

### Animations not working?
- Check if Framer Motion is installed: `npm install framer-motion`
- Ensure you're using client components: `'use client'`

### Icons not showing?
- Install Lucide: `npm install lucide-react`
- Verify icon imports

### Styles not applying?
- Check Tailwind config
- Verify globals.css is imported
- Clear Next.js cache: `rm -rf .next`

### TypeScript errors?
- Run `npm run build` to check for type errors
- Ensure all dependencies are installed

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js 15](https://nextjs.org/)

---

## 🎯 Next Steps

1. **Customize Content**: Update all data arrays with your content
2. **Add Images**: Replace placeholder images with real assets
3. **Connect APIs**: Integrate forms and CTAs with your backend
4. **Test**: Test across devices and browsers
5. **Deploy**: Deploy to your hosting platform

---

## 📝 File Locations

```
src/components/sections/
├── HeroSection.tsx
├── ShowcaseSection.tsx
├── VideoTestimonialsSection.tsx
├── ServicesSection.tsx
├── ROISection.tsx
├── TechnologiesSection.tsx
├── PartnersSection.tsx
├── AwardsSection.tsx
├── FAQSection.tsx
├── FooterSection.tsx
├── index.ts (exports all sections)
└── README.md (detailed documentation)
```

---

## 🎨 Design System Reference

See `/src/app/globals.css` for:
- CSS variables
- Color palette
- Typography settings
- Spacing system
- Border radius values
- Shadow definitions
- Transition timings

---

## ✅ Production Ready

All sections are:
- ✅ TypeScript typed
- ✅ Fully responsive
- ✅ Animated with Framer Motion
- ✅ Accessible (ARIA labels)
- ✅ Performance optimized
- ✅ Mobile-first design
- ✅ Dark mode ready (with minimal changes)

---

Happy building! 🚀
