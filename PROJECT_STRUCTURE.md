# Yume Psicologia — Project Structure & Documentation

## Overview

**Yume Psicologia** is a modern, responsive website for a psychology clinic offering online mental health services. Built with React 19, TypeScript, Tailwind CSS 4, and Vite, the site features an elegant **Japonismo Contemporâneo** design philosophy with sage green brand colors.

---

## Directory Structure

```
yume-psicologia/
├── client/                          # Frontend React application
│   ├── index.html                   # HTML entry point
│   ├── public/
│   │   └── __manus__/              # Manus-specific public assets
│   └── src/
│       ├── main.tsx                 # React entry point
│       ├── App.tsx                  # Root component with routing
│       ├── index.css                # Global styles (Tailwind + design tokens)
│       ├── pages/
│       │   ├── Home.tsx             # Main landing page (all sections)
│       │   └── NotFound.tsx         # 404 page
│       ├── components/
│       │   ├── Navbar.tsx           # Fixed navigation header
│       │   ├── Footer.tsx           # Footer with links & legal info
│       │   ├── ErrorBoundary.tsx    # React error boundary
│       │   ├── ManusDialog.tsx      # Manus integration dialog
│       │   ├── Map.tsx              # Google Maps integration
│       │   ├── sections/            # Page sections
│       │   │   ├── Hero.tsx         # Hero banner with CTA
│       │   │   ├── Services.tsx     # 4 service cards
│       │   │   ├── About.tsx        # About the clinic
│       │   │   ├── Team.tsx         # Team member profiles
│       │   │   ├── HowItWorks.tsx   # 4-step booking process
│       │   │   ├── Testimonials.tsx # Client testimonials carousel
│       │   │   ├── FAQ.tsx          # Accordion FAQ section
│       │   │   └── CTABanner.tsx    # Final CTA section
│       │   └── ui/                  # shadcn/ui components (60+ pre-built)
│       ├── contexts/
│       │   └── ThemeContext.tsx     # Light/dark theme provider
│       ├── hooks/
│       │   ├── useScrollReveal.ts   # Intersection Observer for animations
│       │   ├── useComposition.ts    # Composition utilities
│       │   └── useMobile.tsx        # Mobile detection hook
│       ├── lib/
│       │   └── utils.ts             # Utility functions (cn, etc.)
│       └── const.ts                 # Shared constants
├── server/
│   └── index.ts                     # Express server (production only)
├── shared/
│   └── const.ts                     # Shared constants
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite build configuration
├── components.json                  # shadcn/ui configuration
├── ideas.md                         # Design brainstorming document
└── pnpm-lock.yaml                   # Dependency lock file
```

---

## Key Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.1 | UI framework |
| TypeScript | 5.6.3 | Type safety |
| Tailwind CSS | 4.1.14 | Utility-first styling |
| Vite | 7.1.7 | Build tool & dev server |
| Wouter | 3.3.5 | Client-side routing |
| Framer Motion | 12.23.22 | Animations |
| Lucide React | 0.453.0 | Icon library |
| shadcn/ui | Latest | Pre-built UI components |
| Express | 4.21.2 | Production server |

---

## Design System

### Color Palette (Brand-Aligned)

All colors are defined as CSS variables in `client/src/index.css`:

```css
--primary: oklch(0.685 0.065 140);      /* #8FBF8F - Sage Green */
--secondary: oklch(0.58 0.055 140);     /* #6B9B6B - Dark Sage */
--background: oklch(0.972 0.008 80);    /* #F5F0E8 - Warm Cream */
--foreground: oklch(0.22 0.012 60);     /* #2C2A26 - Deep Ink */
```

### Typography

- **Display Font:** Cormorant Garamond (elegant, literary)
- **Body Font:** DM Sans (clean, modern)
- **Font Sizes:** Responsive scaling from mobile to desktop
- **Line Heights:** Generous (1.15–1.8) for readability

### Spacing & Radius

- **Container Padding:** 1.25rem (mobile) → 3rem (desktop)
- **Border Radius:** 0.25rem (minimal, modern aesthetic)
- **Gap/Margin Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, etc.

---

## Page Sections

### 1. **Navbar** (`components/Navbar.tsx`)
- Fixed header with smooth scroll transition
- Desktop navigation links + WhatsApp CTA
- Mobile hamburger menu overlay
- Smooth scroll anchors to sections

### 2. **Hero** (`components/sections/Hero.tsx`)
- Full-height banner with asymmetric layout
- Background image (right-aligned, 65% width on desktop)
- Kanji 夢 decorative element
- Staggered fade-in animations
- Primary CTA + secondary button

### 3. **Services** (`components/sections/Services.tsx`)
- 4 service cards in responsive grid
- Highlight card (Psicoterapia Individual) with sage green background
- Icons from Lucide React
- Scroll-triggered animations
- CTA button with WhatsApp integration

### 4. **About** (`components/sections/About.tsx`)
- Large heading with italic accent
- Mission statement & values
- Abstract watercolor background image
- Accessibility note about pricing & insurance

### 5. **Team** (`components/sections/Team.tsx`)
- Team member profiles with photos
- Credentials & specializations
- Social links (Instagram)
- WhatsApp contact links per member

### 6. **How It Works** (`components/sections/HowItWorks.tsx`)
- 4-step booking process
- Sage green background section
- Numbered steps with descriptions
- Simplified, human-centered approach

### 7. **Testimonials** (`components/sections/Testimonials.tsx`)
- Carousel/slider of client testimonials
- Navigation buttons (prev/next)
- Dot indicators
- Quote highlighting

### 8. **FAQ** (`components/sections/FAQ.tsx`)
- Accordion-style Q&A
- Smooth expand/collapse animations
- WhatsApp link for additional questions
- Numbered questions

### 9. **CTA Banner** (`components/sections/CTABanner.tsx`)
- Full-width call-to-action section
- Sage green background
- Kanji decoration
- Primary WhatsApp button

### 10. **Footer** (`components/Footer.tsx`)
- Brand info & social links
- Service links
- Contact information
- Legal info (CNPJ, CRP, LGPD compliance)

---

## Component Architecture

### Reusable Components

All UI components are built using **shadcn/ui** patterns:

- Buttons, cards, dialogs, forms, etc.
- Located in `client/src/components/ui/`
- Fully typed with TypeScript
- Customizable via Tailwind classes

### Custom Hooks

- **`useScrollReveal`** — Triggers fade-up animations on scroll using Intersection Observer
- **`useMobile`** — Detects mobile viewport
- **`useComposition`** — Utility for component composition

### Contexts

- **`ThemeContext`** — Manages light/dark theme (currently light-only)

---

## Styling Approach

### Tailwind CSS 4

- **Utility-first:** All styling via Tailwind classes
- **Design tokens:** CSS variables in `index.css` for consistency
- **Responsive:** Mobile-first breakpoints (sm, md, lg, xl)
- **Custom utilities:** `.fade-up`, `.stagger-children` for animations

### Global Styles

Located in `client/src/index.css`:

```css
@layer base {
  /* Base element styles */
  body { font-family: 'DM Sans'; }
  h1, h2, h3, h4 { font-family: 'Cormorant Garamond'; }
}

@layer components {
  .container { /* Custom centered container */ }
  .fade-up { /* Scroll reveal animation */ }
  .stagger-children { /* Staggered animation for lists */ }
}
```

---

## Animation & Interactions

### Scroll Reveals

- **Hook:** `useScrollReveal(threshold)`
- **Trigger:** Intersection Observer (when element enters viewport)
- **Effect:** Fade-up + translate-y with 600ms ease-out
- **Usage:** Applied to section headings and content blocks

### Hover Effects

- **Buttons:** Color transition (300ms)
- **Links:** Underline + color change
- **Cards:** Subtle lift + shadow on hover

### Page Transitions

- **Navigation:** Smooth scroll to anchors (behavior: "smooth")
- **Mobile menu:** Fade in/out overlay
- **Navbar:** Backdrop blur + shadow on scroll

---

## Development Workflow

### Scripts

```bash
# Start dev server (Vite)
pnpm dev

# Type check
pnpm check

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format
```

### Development Server

- **Port:** 3000 (default)
- **Host:** Accessible on network
- **HMR:** Hot module replacement enabled
- **Logs:** Browser console, network, session replay logged to `.manus-logs/`

### Building

```bash
pnpm build
# Outputs:
# - dist/public/     (Vite static build)
# - dist/index.js    (Express server bundle)
```

### Production

```bash
NODE_ENV=production pnpm start
# Serves on port 3000
```

---

## Configuration Files

### `vite.config.ts`

- Aliases: `@` → `client/src/`, `@shared` → `shared/`
- Plugins: React, Tailwind, Manus runtime, debug collector
- Build output: `dist/public/`
- Dev server: Port 3000, network accessible

### `tsconfig.json`

- Strict mode enabled
- JSX: preserve (handled by Vite)
- Module resolution: bundler
- Path aliases for imports

### `package.json`

- Package manager: pnpm 10.4.1
- Type: module (ES modules)
- Patches: wouter@3.7.1 (custom patch)

---

## Environment Variables

Automatically injected by Manus:

- `VITE_ANALYTICS_ENDPOINT` — Analytics service URL
- `VITE_ANALYTICS_WEBSITE_ID` — Analytics tracking ID
- `VITE_APP_ID` — Application identifier
- `VITE_APP_TITLE` — Page title
- `VITE_OAUTH_PORTAL_URL` — OAuth portal (if applicable)

---

## Important Notes

### WhatsApp Integration

All CTAs link to WhatsApp with pre-filled messages:

```
https://wa.me/5511999999999?text=Olá%2C+vim+do+site+e+quero+mais+informações.
```

**Update the phone number** in:
- `client/src/components/Navbar.tsx` (line 72, 109)
- `client/src/components/sections/Services.tsx` (line 202)
- `client/src/components/sections/HowItWorks.tsx`
- `client/src/components/sections/FAQ.tsx`
- `client/src/components/sections/CTABanner.tsx`
- `client/src/components/Footer.tsx` (lines 42, 91)

### Email Addresses

Update contact email in:
- `client/src/components/Footer.tsx` (line 114)
- `client/src/components/sections/Team.tsx` (recruitment link)

### Images

All images are hosted on CDN (Manus cloud):

- Hero: `yume-hero-*.webp`
- Therapy: `yume-therapy-*.webp`
- Team: `yume-team-*.webp`
- Abstract: `yume-abstract-*.webp`
- Group: `yume-group-*.webp`

URLs are defined as constants in each section component.

---

## Responsive Design

### Breakpoints

- **Mobile:** < 640px (default)
- **Tablet:** 640px–1024px (md)
- **Desktop:** ≥ 1024px (lg)

### Mobile Optimizations

- Hamburger menu (hidden on desktop)
- Stacked layouts (grid-cols-1 → grid-cols-2/3 on larger screens)
- Adjusted font sizes & spacing
- Touch-friendly button sizes (min 44px)

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Considerations

1. **Image Optimization:** All images are WebP format, hosted on CDN
2. **Code Splitting:** Vite automatically chunks components
3. **Lazy Loading:** Intersection Observer for scroll reveals
4. **CSS:** Tailwind purges unused styles in production
5. **Analytics:** Umami script deferred for non-blocking load

---

## Accessibility

- Semantic HTML (nav, section, footer, h1–h6)
- ARIA labels on interactive elements
- Color contrast meets WCAG AA standards
- Keyboard navigation support (smooth scroll anchors)
- Focus rings visible on all interactive elements

---

## Future Enhancements

1. **Backend Integration:** Add `web-db-user` feature for form submissions
2. **Booking System:** Calendar integration for appointment scheduling
3. **Blog:** Add blog section for mental health articles
4. **Testimonials:** Dynamic testimonials from database
5. **Multi-language:** Portuguese + English versions
6. **Dark Mode:** Toggle theme switcher

---

## Support & Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
pnpm dev  # Vite will find next available port
```

**TypeScript errors:**
```bash
pnpm check  # Run type checker
```

**Build fails:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

---

## License

MIT — See LICENSE file

---

## Contact

- **Website:** yumepsicologia.com.br
- **WhatsApp:** +55 11 99999-9999 (update with real number)
- **Email:** contato@yumepsicologia.com.br
- **Instagram:** @yumepsicologia

---

**Last Updated:** March 16, 2026
**Version:** 1.0.0
