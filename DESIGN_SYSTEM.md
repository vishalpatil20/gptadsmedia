# GPT Ads Media — Design System

Always refer to this file before writing any new UI code.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0A0A0A` | Page background |
| Surface | `#0F0F0F` | Cards, elevated surfaces |
| Surface Alt | `#171717` | Secondary backgrounds, buttons |
| Text Primary | `#FFFFFF` | Headlines, body text |
| Text Muted | `#A1A1AA` | Captions, secondary text |
| Neon Accent | `#00FF94` | Primary CTAs, highlights, focus rings |
| Indigo Accent | `#6366F1` | Gradients, secondary accents |
| Border | `rgba(255,255,255,0.10)` | Card borders, dividers |

## Typography

- Font: **Geist** (sans) via Next.js Google Font
- Headings: Tight letter-spacing (`tracking-tight`), bold weight
- Body: `text-base` to `text-lg`, muted color
- Labels: `text-xs uppercase tracking-widest text-muted-foreground`

## Spacing

- Base grid: **8px**
- Section padding: `py-24` (96px) desktop, `py-16` (64px) mobile
- Container max-width: `max-w-6xl` (1152px)
- Card gap: `gap-4` (16px) to `gap-6` (24px)

## Components

### Button Primary
```
bg-primary text-primary-foreground rounded-full px-8 py-6 font-semibold
hover:opacity-90 transition-all
```

### Button Secondary
```
bg-secondary text-white border border-border rounded-full px-8 py-6
hover:bg-white/5 transition-all
```

### Card (Bento)
```
bg-card border border-border rounded-2xl p-6
hover:border-primary/30 transition-colors
```

## Motion

- Keep motion functional, not decorative.
- Use `transition-all duration-300` for hover states.
- Avoid heavy animations on mobile.

## Responsive Rules

- Mobile-first.
- Desktop: 3-column grids.
- Tablet: 2-column grids.
- Mobile: 1-column stack with `gap-6`.
