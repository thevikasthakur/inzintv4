# Navigation Component System - Appinventiv Clone

A comprehensive, fully-featured navigation system with announcement bar, mega menus, mobile responsive design, and scroll effects.

## Components Overview

### 1. Header.tsx
The main header wrapper component that orchestrates all navigation elements.

**Features:**
- Fixed positioning with scroll-based hide/show
- Scroll progress indicator
- Integrated announcement bar
- Mobile menu toggle
- Smooth animations using Framer Motion

**Usage:**
```tsx
import Header from '@/components/layout/Header';

export default function RootLayout({ children }) {
  return (
    <>
      <Header
        showAnnouncement={true}
        announcementText="We are ranked as the #1 AI Development Company by Clutch 2024"
        announcementLink="/awards"
        announcementLinkText="Learn More"
      />
      {children}
    </>
  );
}
```

**Props:**
- `showAnnouncement` (boolean, optional): Show/hide announcement bar (default: true)
- `announcementText` (string, optional): Text for announcement
- `announcementLink` (string, optional): Link for announcement CTA
- `announcementLinkText` (string, optional): CTA button text

---

### 2. AnnouncementBar.tsx
A top banner with marquee animation and dismissible functionality.

**Features:**
- Marquee text animation on mobile
- Static centered text on desktop
- Dismissible with smooth exit animation
- Gradient background with animated shine effect
- Link to call-to-action

**Usage:**
```tsx
import AnnouncementBar from '@/components/layout/AnnouncementBar';

<AnnouncementBar
  text="We are ranked as the #1 AI Development Company by Clutch 2024"
  link="/awards"
  linkText="Learn More"
/>
```

---

### 3. Logo.tsx
Appinventiv logo component with brand identity.

**Features:**
- SVG-based logo icon
- Three color variants (default, white, dark)
- Hover animation
- Link to homepage

**Usage:**
```tsx
import Logo from '@/components/layout/Logo';

<Logo variant="default" className="custom-class" />
```

**Props:**
- `variant` ('default' | 'white' | 'dark'): Color scheme
- `className` (string, optional): Additional CSS classes

---

### 4. Navigation.tsx
Main navigation bar with menu items and search.

**Features:**
- Desktop horizontal menu
- Hover-triggered mega menus
- Integrated search modal
- Contact button
- Mobile hamburger toggle
- Smooth transitions and animations

**Usage:**
```tsx
import Navigation from '@/components/layout/Navigation';
import { navigationData } from '@/data/navigation';

<Navigation
  navigationData={navigationData}
  isScrolled={false}
  onMobileMenuClick={() => setMobileMenuOpen(true)}
/>
```

**Props:**
- `navigationData` (NavItem[]): Navigation menu structure
- `isScrolled` (boolean, optional): Scroll state for styling
- `onMobileMenuClick` (function): Handler for mobile menu toggle

---

### 5. MegaMenu.tsx
Advanced dropdown menu with multiple layout types.

**Features:**
- **Three layout types:**
  1. **Tabs Layout**: Sidebar navigation with tabbed content
  2. **Columns Layout**: Multi-column grid with categories
  3. **Grid Layout**: Card-based grid for visual items
- Featured sections with images
- Call-to-action sections
- Nested submenus
- Icon support via Lucide React
- Backdrop overlay
- Smooth animations

**Layout Types:**

#### Tabs Layout
```typescript
{
  type: 'tabs',
  tabs: [
    {
      id: 'tab-1',
      label: 'Tab Name',
      content: {
        title: 'Section Title',
        items: [...],
        featuredSection: {
          title: 'Featured',
          items: [...]
        }
      }
    }
  ]
}
```

#### Columns Layout
```typescript
{
  type: 'columns',
  columns: [
    {
      title: 'Column Title',
      items: [...]
    }
  ]
}
```

#### Grid Layout
```typescript
{
  type: 'grid',
  items: [
    {
      id: 'item-1',
      label: 'Item Name',
      href: '/path',
      description: 'Description',
      icon: 'icon-name'
    }
  ]
}
```

---

### 6. MobileMenu.tsx
Slide-in mobile navigation panel.

**Features:**
- Full-height slide-in panel from right
- Search bar
- Expandable/collapsible menu items
- Support for all mega menu types (tabs, columns, grid)
- Contact information footer
- Smooth animations
- Body scroll lock when open
- Auto-close on desktop resize

**Usage:**
```tsx
import MobileMenu from '@/components/layout/MobileMenu';

<MobileMenu
  navigationData={navigationData}
  isOpen={isMobileMenuOpen}
  onClose={() => setIsMobileMenuOpen(false)}
/>
```

---

## Navigation Data Structure

The navigation system uses a typed data structure defined in `src/data/navigation.ts`:

```typescript
interface NavItem {
  id: string;
  label: string;
  href?: string;
  submenu?: NavSubmenu;
}

interface NavSubmenu {
  type: 'tabs' | 'columns' | 'grid';
  tabs?: TabItem[];
  columns?: ColumnItem[];
  items?: MenuItem[];
  cta?: CTAItem;
}

interface MenuItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
  submenu?: MenuItem[];
}
```

---

## Icon System

The navigation uses Lucide React icons through a custom icon mapper in `src/lib/icons.tsx`.

**Available Icons:**
- sparkles, bot, message-square, brain, cpu, lightbulb
- book-open, file-text, layers, file-check
- smartphone, globe, code, rocket, server, cloud
- users, wrench, target, settings, trending-up
- bar-chart, database, activity
- dollar-sign, heart, shopping-cart, graduation-cap
- home, truck, zap, plane, film, utensils, car
- And many more...

**Usage in navigation data:**
```typescript
{
  id: 'ai-dev',
  label: 'AI Development',
  href: '/ai',
  icon: 'sparkles', // Icon name
  description: 'Build AI-powered solutions'
}
```

---

## Styling & Theming

The navigation components use Tailwind CSS with custom color variables defined in `src/app/globals.css`:

```css
--color-primary-50: #e6f1ff;
--color-primary-100: #cce3ff;
--color-primary-600: #0051d4; /* Main brand color */
--color-primary-700: #003da8; /* Darker shade */
```

---

## Scroll Effects

The Header component includes several scroll-based features:

1. **Auto-hide on scroll down**: Header hides when scrolling down past 100px
2. **Show on scroll up**: Header reappears when scrolling up
3. **Scroll progress bar**: Visual indicator at bottom of header
4. **Shadow on scroll**: Adds shadow when scrolled past 50px

---

## Mobile Responsiveness

### Breakpoints:
- **Mobile**: < 1024px - Shows hamburger menu
- **Desktop**: >= 1024px - Shows full navigation

### Mobile Features:
- Slide-in panel from right
- Touch-friendly tap targets
- Expandable accordion menus
- Search bar at top
- Contact info in footer
- Body scroll lock

---

## Animations

All components use Framer Motion for smooth animations:

- **Header**: Slide down/up, opacity transitions
- **MegaMenu**: Fade and slide animations
- **MobileMenu**: Slide from right with spring physics
- **AnnouncementBar**: Marquee scrolling, fade in/out
- **Navigation Items**: Hover effects, rotation for chevrons

---

## Accessibility Features

- Semantic HTML structure
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Proper link hierarchy

---

## Performance Optimizations

1. **Lazy loading**: Mobile menu only renders when open
2. **Debounced scroll handlers**: Prevents excessive re-renders
3. **CSS transforms**: Hardware-accelerated animations
4. **Conditional rendering**: Mega menus only render when needed
5. **Event cleanup**: Proper cleanup of event listeners

---

## TypeScript Support

All components are fully typed with TypeScript for:
- Props interfaces
- Navigation data structures
- Event handlers
- Refs and state

---

## Example Integration

```tsx
// app/layout.tsx
import { Header } from '@/components/layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

---

## Customization

### Changing Colors
Update colors in `src/app/globals.css`:
```css
--color-primary-600: #YOUR_COLOR;
```

### Adding Menu Items
Edit `src/data/navigation.ts` and add new items following the data structure.

### Custom Icons
Add new icons to `src/lib/icons.tsx`:
```tsx
import { YourIcon } from 'lucide-react';

export const iconMap = {
  // ... existing icons
  'your-icon': YourIcon,
};
```

### Modifying Animations
Adjust Framer Motion props in individual components:
```tsx
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} // Adjust timing
>
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## Dependencies

- **React**: 19.1.0
- **Next.js**: 15.5.6
- **Framer Motion**: 12.23.24
- **Lucide React**: 0.546.0
- **Tailwind CSS**: 4.x
- **TypeScript**: 5.x

---

## File Structure

```
src/
├── components/
│   └── layout/
│       ├── Header.tsx           # Main header wrapper
│       ├── AnnouncementBar.tsx  # Top announcement banner
│       ├── Navigation.tsx       # Desktop navigation bar
│       ├── MegaMenu.tsx        # Mega menu dropdowns
│       ├── MobileMenu.tsx      # Mobile slide menu
│       ├── Logo.tsx            # Brand logo
│       └── index.ts            # Barrel exports
├── data/
│   └── navigation.ts           # Navigation data & types
├── lib/
│   ├── icons.tsx              # Icon mapping system
│   └── utils.ts               # Utility functions
└── app/
    └── globals.css            # Global styles & theme
```

---

## Tips & Best Practices

1. **Keep navigation data organized**: Group related items logically
2. **Use consistent icon naming**: Follow Lucide React conventions
3. **Optimize images**: Use next/image for featured sections
4. **Test on mobile**: Always verify mobile menu behavior
5. **Monitor bundle size**: Keep icon imports minimal
6. **Update meta tags**: Ensure proper SEO for navigation links

---

## Troubleshooting

### Mega menu not opening
- Check that `submenu` object exists in navigation data
- Verify `isOpen` state is being set correctly

### Icons not showing
- Confirm icon name exists in `src/lib/icons.tsx`
- Check for typos in icon names

### Mobile menu scroll issues
- Ensure body overflow is being toggled correctly
- Check z-index conflicts with other components

### Scroll effects not working
- Verify scroll event listener is attached
- Check for CSS conflicts with positioning

---

## Future Enhancements

Potential improvements for the navigation system:

- [ ] Keyboard shortcuts for search
- [ ] Recently viewed items in mega menu
- [ ] Sticky submenu headers on scroll
- [ ] Breadcrumb navigation integration
- [ ] Multi-level mobile menu depth
- [ ] Animated menu transitions between pages
- [ ] Search autocomplete with API integration
- [ ] Analytics tracking for menu interactions

---

## Support

For questions or issues:
1. Check this documentation
2. Review the TypeScript types in `src/types/index.ts`
3. Examine example usage in navigation data
4. Test in isolation using component stories

---

## License

This navigation system is part of the Appinventiv clone project.

---

**Last Updated**: October 2025
**Version**: 1.0.0
