# Component Architecture

## Component Tree

```
App (page.tsx - 62 lines)
│
├── Background Effects (conditional)
│
└── Navigation
    ├── Desktop Navigation
    │   ├── Logo/Name
    │   ├── Nav Links (from constants)
    │   └── Social Icons
    │
    └── Mobile Navigation
        ├── Header Bar
        ├── Hamburger Menu
        └── Dropdown Menu
│
├── HeroSection
│   ├── Profile Photo
│   ├── Title & Subtitle
│   └── CTA Button (ui/Button)
│
├── SectionDivider (ui)
│
├── ServicesSection
│   ├── Section Header
│   ├── ServiceCard (x6)
│   │   ├── Icon
│   │   ├── Title
│   │   ├── Description
│   │   └── Features List
│   └── Stats Grid (x4)
│
├── SectionDivider (ui)
│
└── Footer
    ├── About Column
    ├── Quick Links Column
    ├── Contact Column
    └── Bottom Bar
```

## Data Flow

```
Constants (Static Data)
├── navigation.ts
│   ├── navigationItems → Navigation Component
│   └── socialLinks → Navigation Component
│
└── services.ts
    ├── services → ServicesSection → ServiceCard
    └── stats → ServicesSection

Types (Type Definitions)
└── styles.ts
    ├── StyleOption → All Components
    └── styles → page.tsx

Hooks (Shared Logic)
├── useScroll.ts → Navigation Component
└── useIntersectionObserver.ts → page.tsx
```

## File Dependencies

### page.tsx depends on:
- types/styles.ts
- hooks/useIntersectionObserver.ts
- components/Navigation.tsx
- components/HeroSection.tsx
- components/ServicesSection.tsx
- components/ui/SectionDivider.tsx
- components/Footer.tsx

### Navigation.tsx depends on:
- types/styles.ts
- constants/navigation.ts
- hooks/useScroll.ts

### HeroSection.tsx depends on:
- types/styles.ts
- components/ui/Button.tsx

### ServicesSection.tsx depends on:
- types/styles.ts
- constants/services.ts
- components/ServiceCard.tsx

### ServiceCard.tsx depends on:
- types/styles.ts
- constants/services.ts (Service interface)

### Footer.tsx depends on:
- types/styles.ts

## Props Interface Patterns

All components follow a consistent prop pattern:

```typescript
interface ComponentProps {
  selectedStyle: StyleOption;
  currentStyle?: StyleConfig;  // Only for components needing style object
  // ... other specific props
}
```

This ensures:
- Type safety across all components
- Consistent styling behavior
- Easy to understand component APIs
