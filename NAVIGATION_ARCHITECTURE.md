# Navigation System Architecture

## Visual Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                         HEADER COMPONENT                        │
│  (Fixed Position, Scroll Effects, State Management)            │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │ ANNOUNCEMENT│ │ NAVIGATION  │ │ MOBILE MENU │
    │     BAR     │ │     BAR     │ │   (PANEL)   │
    └─────────────┘ └─────────────┘ └─────────────┘
          │               │                 │
          │               │                 │
    ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
    │ Marquee   │   │   Logo    │   │  Search   │
    │ Animation │   │           │   │    Bar    │
    │           │   │ Menu Items│   │           │
    │  CTA Link │   │           │   │ Accordion │
    │           │   │  Search   │   │   Menus   │
    │   Close   │   │           │   │           │
    │           │   │  Contact  │   │  Contact  │
    │           │   │           │   │   Footer  │
    └───────────┘   └─────┬─────┘   └───────────┘
                          │
                    ┌─────▼─────┐
                    │ MEGA MENU │
                    │ (DROPDOWN)│
                    └─────┬─────┘
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
    ┌────────┐      ┌────────┐      ┌────────┐
    │  TABS  │      │COLUMNS │      │  GRID  │
    │ LAYOUT │      │ LAYOUT │      │ LAYOUT │
    └────────┘      └────────┘      └────────┘
         │                │                │
         ▼                ▼                ▼
    Tab Nav +       Column Groups      Card Grid
    Tab Content     with Headers       with Icons
    Featured        Nested Items       Descriptions
    Sections
    CTA Banner      CTA Banner         CTA Banner
```

---

## State Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                      APPLICATION STATE                       │
└──────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
          ┌─────────────────┐ ┌─────────────────┐
          │  Scroll State   │ │  Menu State     │
          │  - scrollY      │ │  - activeMenu   │
          │  - isScrolled   │ │  - isMobileOpen │
          │  - isVisible    │ │  - expandedItems│
          └────────┬────────┘ └────────┬────────┘
                   │                   │
                   └─────────┬─────────┘
                             ▼
                   ┌─────────────────┐
                   │  Header Props   │
                   │  - announcement │
                   │  - navigation   │
                   │  - callbacks    │
                   └────────┬────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
         Component     Component     Component
         Renders       Updates       Effects
```

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│             /src/data/navigation.ts                     │
│  ┌───────────────────────────────────────────────┐     │
│  │  navigationData: NavItem[]                    │     │
│  │  - id, label, href                            │     │
│  │  - submenu: { type, tabs, columns, items }    │     │
│  └───────────────────────────────────────────────┘     │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Import
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  Header Component                       │
│  const navigationData = import('@/data/navigation')     │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Pass as Props
                         ▼
┌─────────────────────────────────────────────────────────┐
│            Navigation & MobileMenu                      │
│  navigationData.map(item => render)                     │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Extract submenu
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   MegaMenu                              │
│  if (submenu.type === 'tabs') → TabsLayout              │
│  if (submenu.type === 'columns') → ColumnsLayout        │
│  if (submenu.type === 'grid') → GridLayout              │
└─────────────────────────────────────────────────────────┘
```

---

## Event Flow

### Desktop Navigation

```
User hovers over menu item
         │
         ▼
Navigation.handleMouseEnter(itemId)
         │
         ▼
setActiveMenu(itemId)
         │
         ▼
MegaMenu receives isOpen={true}
         │
         ▼
AnimatePresence triggers entrance animation
         │
         ▼
Backdrop renders + MegaMenu content shows
         │
         ▼
User moves mouse away
         │
         ▼
Navigation.handleMouseLeave()
         │
         ▼
setTimeout(200ms) → setActiveMenu(null)
         │
         ▼
MegaMenu receives isOpen={false}
         │
         ▼
Exit animation + Cleanup
```

### Mobile Navigation

```
User clicks hamburger icon
         │
         ▼
Navigation.onMobileMenuClick()
         │
         ▼
Header.setIsMobileMenuOpen(true)
         │
         ▼
MobileMenu receives isOpen={true}
         │
         ▼
Slide-in animation from right
         │
         ▼
Body scroll locked (overflow: hidden)
         │
         ▼
User taps menu item
         │
         ▼
MobileMenu.toggleItem(itemId)
         │
         ▼
Accordion expands/collapses
         │
         ▼
User clicks close or backdrop
         │
         ▼
MobileMenu.onClose()
         │
         ▼
Header.setIsMobileMenuOpen(false)
         │
         ▼
Slide-out animation + Body scroll restored
```

---

## Scroll Behavior Flow

```
Window scroll event
         │
         ▼
Header.handleScroll()
         │
         ▼
Get currentScrollY
         │
    ┌────┴────┐
    ▼         ▼
scrollY > 50  currentScrollY > lastScrollY
    │              │
    ▼              ▼
setIsScrolled  Scrolling down?
    │              │
    │              ├─ Yes → setIsHeaderVisible(false)
    │              └─ No  → setIsHeaderVisible(true)
    │
    ▼
Update lastScrollY
         │
         ▼
Header applies CSS classes
         │
    ┌────┴────┐
    ▼         ▼
isScrolled?  isHeaderVisible?
    │              │
    ▼              ▼
Add shadow    translate-y-0
              or
              -translate-y-full
```

---

## Mega Menu Layout Selection

```
NavItem.submenu received
         │
         ▼
Check submenu.type
         │
    ┌────┴────────────┐
    ▼         ▼       ▼
  'tabs'  'columns' 'grid'
    │         │       │
    ▼         ▼       ▼
┌─────┐   ┌─────┐ ┌─────┐
│Tabs │   │Cols │ │Grid │
│     │   │     │ │     │
├─────┤   ├─────┤ ├─────┤
│Side │   │Mult │ │Card │
│Nav  │   │Col  │ │Grid │
│     │   │Grid │ │     │
├─────┤   ├─────┤ ├─────┤
│Tab  │   │Head │ │Icon │
│Cont │   │ers  │ │+    │
│ent  │   │     │ │Desc │
│     │   │     │ │     │
├─────┤   ├─────┤ ├─────┤
│Feat │   │Nest │ │     │
│ured │   │Sub  │ │     │
│     │   │menu │ │     │
└─────┘   └─────┘ └─────┘
    │         │       │
    └────┬────┴───────┘
         ▼
    Optional CTA
```

---

## Icon Resolution Flow

```
MenuItem with icon: "sparkles"
         │
         ▼
MegaMenu calls getIcon('sparkles', className)
         │
         ▼
icons.tsx → iconMap lookup
         │
         ▼
Find: sparkles → Sparkles component from lucide-react
         │
         ▼
Return <Sparkles className={className} />
         │
         ▼
Render icon in menu item
```

---

## Responsive Breakpoint Flow

```
Window resize event
         │
         ▼
Check window.innerWidth
         │
    ┌────┴────┐
    ▼         ▼
< 1024px   >= 1024px
(Mobile)   (Desktop)
    │         │
    │         └─── Hide hamburger
    │         └─── Show desktop nav
    │         └─── If mobile menu open → close it
    │
    └─── Show hamburger
    └─── Hide desktop nav
    └─── Enable mobile menu
```

---

## Animation Lifecycle

### Component Mount/Unmount

```
Component About to Mount
         │
         ▼
Framer Motion <AnimatePresence>
         │
         ▼
Initial state applied (e.g., opacity: 0, y: -10)
         │
         ▼
Component mounts in DOM
         │
         ▼
Animate to final state (e.g., opacity: 1, y: 0)
         │
         ▼
Component fully visible
         │
         ▼
isOpen changes to false
         │
         ▼
Exit animation plays (reverse of entrance)
         │
         ▼
Component unmounts from DOM
         │
         ▼
Cleanup (event listeners, body scroll, etc.)
```

---

## Color System Hierarchy

```
globals.css
    │
    ├─ :root CSS variables
    │   ├─ --appinventiv-blue: #0069ff
    │   ├─ --appinventiv-blue-dark: #0051d4
    │   └─ --appinventiv-blue-light: #e6f1ff
    │
    └─ @theme inline
        ├─ --color-primary-50 through -900
        └─ Mapped to Tailwind classes
            │
            ├─ bg-primary-600
            ├─ text-primary-600
            ├─ border-primary-600
            ├─ hover:bg-primary-700
            └─ etc.
```

---

## File Import Graph

```
Header.tsx
    │
    ├─ imports AnnouncementBar.tsx
    ├─ imports Navigation.tsx
    │      │
    │      ├─ imports Logo.tsx
    │      └─ imports MegaMenu.tsx
    │             │
    │             ├─ imports types from @/types
    │             └─ imports getIcon from @/lib/icons.tsx
    │                    │
    │                    └─ imports from lucide-react
    │
    ├─ imports MobileMenu.tsx
    │      │
    │      ├─ imports Logo.tsx
    │      ├─ imports types from @/types
    │      └─ imports getIcon from @/lib/icons.tsx
    │
    └─ imports navigationData from @/data/navigation.ts
           │
           └─ imports types from @/types
```

---

## CSS Class Application Flow

```
Tailwind CSS Classes
         │
         ├─ Base Classes (utilities.css)
         ├─ Component Classes (components layer)
         └─ Custom Classes (@theme inline)
              │
              ▼
         Applied to JSX elements
              │
              ├─ Static classes: "flex items-center"
              ├─ Conditional: {isScrolled ? 'shadow-md' : ''}
              └─ Dynamic: `text-${variant}`
              │
              ▼
         PostCSS Processing
              │
              ▼
         Optimized CSS Bundle
              │
              ▼
         Rendered in Browser
```

---

## Performance Optimization Points

```
┌─────────────────────────────────────────┐
│          Performance Strategy           │
└─────────────────────────────────────────┘
                    │
    ┌───────────────┼───────────────┐
    ▼               ▼               ▼
┌────────┐    ┌────────┐    ┌────────┐
│Render  │    │Event   │    │Animation│
│Optim   │    │Optim   │    │Optim   │
└────┬───┘    └────┬───┘    └────┬───┘
     │             │             │
     │             │             │
     ├─ Conditional rendering   ├─ CSS transforms
     │  (mega menus)             │  (hardware accel)
     │                           │
     ├─ Lazy states              ├─ requestAnimationFrame
     │  (mobile menu)            │  for scroll
     │                           │
     ├─ React.memo               ├─ Framer Motion
     │  (potential)              │  optimization
     │                           │
     └─ No unnecessary          ├─ Debounced scroll
        re-renders              │  handlers
                                │
                                └─ Event cleanup
                                   (prevent leaks)
```

---

## Testing Strategy Map

```
┌─────────────────────────────────────────┐
│            Testing Layers               │
└─────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
    ┌──────┐   ┌──────┐   ┌──────┐
    │ Unit │   │Integr│   │ E2E  │
    │ Tests│   │ation │   │Tests │
    └──┬───┘   └──┬───┘   └──┬───┘
       │          │          │
       │          │          │
Individual     Component   Full User
Components     Interaction  Journeys
       │          │          │
       ├─ Logo   ├─ Header  ├─ Open Menu
       ├─ Icon   │  + Nav   ├─ Navigate
       │  Map    │  + Mega  ├─ Close
       │         │          │
       └─ Utils  └─ Mobile  └─ Search
                    Menu
```

---

## Deployment Checklist Flow

```
Pre-Deployment
      │
      ├─ Build Test
      │   └─ npm run build
      │
      ├─ Type Check
      │   └─ tsc --noEmit
      │
      ├─ Lint Check
      │   └─ npm run lint
      │
      ├─ Component Tests
      │   └─ npm run test
      │
      └─ Manual QA
          │
          ├─ Desktop: Chrome, Firefox, Safari
          ├─ Mobile: iOS Safari, Chrome Android
          ├─ Test all mega menu types
          ├─ Test mobile menu
          ├─ Test scroll behavior
          └─ Test accessibility
              │
              ▼
         All Pass?
              │
         ┌────┴────┐
         ▼         ▼
        Yes       No
         │         │
         │         └─ Fix Issues → Repeat
         │
         ▼
    Deploy to Production
         │
         ▼
    Monitor Performance
         │
         ├─ Core Web Vitals
         ├─ JavaScript Errors
         ├─ User Interactions
         └─ Analytics
```

---

## Architecture Benefits

1. **Modularity**: Each component is self-contained
2. **Reusability**: Components can be used independently
3. **Type Safety**: Full TypeScript coverage
4. **Maintainability**: Clear separation of concerns
5. **Scalability**: Easy to add new menu items/types
6. **Performance**: Optimized rendering and animations
7. **Accessibility**: Built-in a11y features
8. **Responsiveness**: Mobile-first approach
9. **Flexibility**: Easy to customize and extend
10. **Documentation**: Comprehensive guides and examples

---

## Key Design Patterns Used

1. **Container/Presenter**: Header (container) → Navigation (presenter)
2. **Composition**: Header composes AnnouncementBar + Navigation + MobileMenu
3. **Render Props**: MegaMenu uses render functions for layouts
4. **State Management**: Local state with useState hooks
5. **Effect Management**: useEffect for side effects
6. **Event Delegation**: Parent handles child events
7. **Conditional Rendering**: Show/hide based on state
8. **Animation Lifecycle**: AnimatePresence for mount/unmount
9. **Responsive Design**: Mobile-first with breakpoints
10. **Type-Driven Development**: TypeScript interfaces guide implementation

---

This architecture ensures a robust, scalable, and maintainable navigation system that can grow with your application's needs.
