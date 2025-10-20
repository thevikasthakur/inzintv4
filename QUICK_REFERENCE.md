# Navigation System - Quick Reference Card

## Import Statements

```tsx
// Import everything
import { Header, Navigation, MegaMenu, MobileMenu, AnnouncementBar, Logo } from '@/components/layout';

// Import individually
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';

// Import data
import { navigationData } from '@/data/navigation';

// Import icons
import { getIcon } from '@/lib/icons';
```

---

## Component Usage

### Header (Main Component)
```tsx
<Header
  showAnnouncement={true}
  announcementText="We are #1 in AI Development"
  announcementLink="/awards"
  announcementLinkText="Learn More"
/>
```

### AnnouncementBar
```tsx
<AnnouncementBar
  text="Special announcement here"
  link="/link"
  linkText="CTA Text"
/>
```

### Logo
```tsx
<Logo variant="default" />  // or "white" | "dark"
```

### Navigation
```tsx
<Navigation
  navigationData={navigationData}
  isScrolled={false}
  onMobileMenuClick={() => setOpen(true)}
/>
```

### MobileMenu
```tsx
<MobileMenu
  navigationData={navigationData}
  isOpen={isOpen}
  onClose={() => setOpen(false)}
/>
```

---

## Navigation Data Structure

### Simple Link
```typescript
{
  id: 'contact',
  label: 'Contact',
  href: '/contact'
}
```

### With Tabs Submenu
```typescript
{
  id: 'services',
  label: 'Services',
  submenu: {
    type: 'tabs',
    tabs: [
      {
        id: 'tab-1',
        label: 'Tab Name',
        content: {
          title: 'Section Title',
          items: [
            {
              id: 'item-1',
              label: 'Service Name',
              href: '/service',
              description: 'Description',
              icon: 'sparkles'
            }
          ]
        }
      }
    ],
    cta: {
      title: 'CTA Title',
      description: 'CTA Description',
      buttonText: 'Button',
      buttonLink: '/link'
    }
  }
}
```

### With Columns Submenu
```typescript
{
  id: 'about',
  label: 'About',
  submenu: {
    type: 'columns',
    columns: [
      {
        title: 'Column Title',
        items: [
          {
            id: 'item-1',
            label: 'Item Name',
            href: '/link',
            description: 'Description',
            icon: 'icon-name'
          }
        ]
      }
    ]
  }
}
```

### With Grid Submenu
```typescript
{
  id: 'industries',
  label: 'Industries',
  submenu: {
    type: 'grid',
    items: [
      {
        id: 'fintech',
        label: 'Fintech',
        href: '/fintech',
        description: 'Financial solutions',
        icon: 'dollar-sign'
      }
    ]
  }
}
```

---

## Available Icons

### AI & Tech
`sparkles`, `bot`, `message-square`, `brain`, `cpu`, `lightbulb`

### Content
`book-open`, `file-text`, `layers`, `file-check`, `book`, `map`

### Development
`smartphone`, `globe`, `code`, `rocket`, `server`, `cloud`, `wifi`, `link`, `eye`

### Business
`users`, `wrench`, `target`, `settings`, `trending-up`

### Data
`bar-chart`, `database`, `activity`

### Industries
`dollar-sign`, `heart`, `shopping-cart`, `graduation-cap`, `home`, `truck`, `zap`, `plane`, `film`, `utensils`, `car`

### Resources
`newspaper`, `calendar`, `headphones`, `calculator`, `star`, `image`

---

## Color Classes

### Primary Colors
- `bg-primary-50` - Very light blue
- `bg-primary-100` - Light blue
- `bg-primary-600` - Main brand blue
- `bg-primary-700` - Dark blue
- `text-primary-600` - Blue text
- `border-primary-600` - Blue border
- `hover:bg-primary-700` - Hover state

### Gray Scale
- `bg-gray-50`, `bg-gray-100`, `bg-gray-200`
- `text-gray-500`, `text-gray-700`, `text-gray-900`
- `border-gray-200`, `border-gray-300`

---

## Common Patterns

### Root Layout Integration
```tsx
// app/layout.tsx
import { Header } from '@/components/layout';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Custom Header State
```tsx
'use client';
import { useState } from 'react';
import { Header } from '@/components/layout';

export default function CustomHeader() {
  const [showBanner, setShowBanner] = useState(true);

  return <Header showAnnouncement={showBanner} />;
}
```

### Adding Menu Icons
```tsx
// In navigation.ts
{
  id: 'ai-dev',
  label: 'AI Development',
  href: '/ai',
  icon: 'sparkles',  // ← Add icon here
  description: 'Build AI solutions'
}
```

---

## CSS Custom Properties

```css
/* In globals.css */
--color-primary-600: #0051d4;  /* Main brand color */
--color-primary-700: #003da8;  /* Hover state */
```

---

## Responsive Breakpoints

```css
/* Mobile */
< 1024px → Shows hamburger menu

/* Desktop */
>= 1024px → Shows full navigation
```

---

## Animation Durations

```typescript
Header show/hide: 300ms
MegaMenu: 300ms
MobileMenu: spring (damping: 25, stiffness: 200)
Hover effects: 150ms
```

---

## Common Tasks

### Change Logo
Edit `/src/components/layout/Logo.tsx`

### Change Colors
Edit `/src/app/globals.css` CSS variables

### Add Menu Item
Edit `/src/data/navigation.ts`, add object to array

### Add Icon
1. Edit `/src/lib/icons.tsx`
2. Import from lucide-react
3. Add to iconMap

### Hide Announcement
```tsx
<Header showAnnouncement={false} />
```

### Custom Announcement
```tsx
<Header
  announcementText="Your text"
  announcementLink="/link"
  announcementLinkText="CTA"
/>
```

---

## File Locations

```
src/
├── components/layout/
│   ├── Header.tsx              ← Main wrapper
│   ├── AnnouncementBar.tsx     ← Top banner
│   ├── Navigation.tsx          ← Desktop nav
│   ├── MegaMenu.tsx           ← Dropdowns
│   ├── MobileMenu.tsx         ← Mobile panel
│   └── Logo.tsx               ← Brand logo
├── data/
│   └── navigation.ts          ← Menu data
├── lib/
│   └── icons.tsx              ← Icon system
└── app/
    └── globals.css            ← Styles
```

---

## TypeScript Types

```typescript
NavItem         // Top-level menu item
NavSubmenu      // Submenu configuration
TabItem         // Tab in tabs layout
ColumnItem      // Column in columns layout
MenuItem        // Individual menu link
CTAItem         // Call-to-action section
FeaturedSection // Featured items
```

---

## Accessibility

```tsx
// ARIA labels
<button aria-label="Toggle menu">

// Semantic HTML
<header>, <nav>, <button>, <a>

// Keyboard support
Tab, Enter, Escape work automatically
```

---

## Performance Tips

1. Use conditional rendering
2. Cleanup event listeners
3. Debounce scroll handlers
4. Use CSS transforms
5. Lazy load mobile menu

---

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile Safari (iOS 12+)
✅ Chrome Android (8+)

---

## Troubleshooting

**Menu not opening?**
→ Check `submenu` object exists in navigation data

**Icons not showing?**
→ Verify icon name in `/src/lib/icons.tsx`

**Mobile menu stuck?**
→ Check body overflow toggle

**Scroll effect not working?**
→ Verify event listener attached

---

## Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

---

## Example: Add New Menu Item

1. Open `/src/data/navigation.ts`
2. Add new object:
```typescript
{
  id: 'new-item',
  label: 'New Item',
  href: '/new-item'
}
```
3. Save and reload

---

## Example: Add Icon

1. Open `/src/lib/icons.tsx`
2. Import icon:
```typescript
import { NewIcon } from 'lucide-react';
```
3. Add to iconMap:
```typescript
export const iconMap = {
  // ...existing
  'new-icon': NewIcon,
};
```
4. Use in navigation:
```typescript
icon: 'new-icon'
```

---

## Support Resources

- **Full Docs**: `NAVIGATION_COMPONENTS_README.md`
- **Examples**: `HEADER_USAGE_EXAMPLE.tsx`
- **Architecture**: `NAVIGATION_ARCHITECTURE.md`
- **Summary**: `NAVIGATION_SYSTEM_SUMMARY.md`

---

## Contact

For issues or questions, refer to the comprehensive documentation files included in this project.

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Status**: Production Ready
