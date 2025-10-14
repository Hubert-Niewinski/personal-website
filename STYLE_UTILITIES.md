# Style Utilities Guide

This guide explains the centralized style utilities created to follow DRY (Don't Repeat Yourself) principles across the codebase.

## 📦 Available Utilities

### Icon Sizes (`ICON_SIZES`)

Consistent icon dimensions to avoid repeating `w-X h-X` classes:

```typescript
import { ICON_SIZES, getIconSize } from '@/constants/styles';

// Use directly
<Icon className={ICON_SIZES.md} />

// Or use helper function
<Icon className={getIconSize('lg')} />
```

**Available sizes:**

- `xs`: w-3 h-3
- `sm`: w-4 h-4
- `md`: w-5 h-5 (default)
- `lg`: w-6 h-6
- `xl`: w-8 h-8
- `2xl`: w-10 h-10
- `3xl`: w-12 h-12
- `4xl`: w-16 h-16

### Padding Sizes (`PADDING_SIZES`)

Consistent padding for buttons and interactive elements:

```typescript
import { PADDING_SIZES, getPadding } from '@/constants/styles';

// Use directly
<button className={PADDING_SIZES.lg}>Click me</button>

// Or use helper
<button className={getPadding('xl')}>Big button</button>
```

**Available sizes:**

- `xs`: px-2 py-1
- `sm`: px-3 py-2
- `md`: px-4 py-2 (default)
- `lg`: px-6 py-3
- `xl`: px-8 py-4

### Container Padding (`CONTAINER_PADDING`)

Consistent spacing for page containers and sections:

```typescript
import { CONTAINER_PADDING, getContainerPadding } from '@/constants/styles';

// Use directly
<div className={CONTAINER_PADDING.sectionLarge}>
  {/* Content */}
</div>

// Or use helper
<section className={getContainerPadding('section')}>
  {/* Content */}
</section>
```

**Available sizes:**

- `sm`: px-4 py-2
- `md`: px-4 sm:px-8 py-8 sm:py-12 lg:py-16 (default)
- `lg`: px-6 py-4
- `section`: max-w-6xl mx-auto px-4 sm:px-8
- `sectionLarge`: max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16

### Rounded Corners (`ROUNDED_SIZES`)

Consistent border radius values:

```typescript
import { ROUNDED_SIZES, getRounded } from '@/constants/styles';

// Use directly
<div className={ROUNDED_SIZES.lg}>Rounded box</div>

// Or use helper
<div className={getRounded('xl')}>Very rounded</div>
```

**Available sizes:**

- `sm`: rounded
- `md`: rounded-lg (default)
- `lg`: rounded-xl
- `xl`: rounded-2xl
- `full`: rounded-full

## 🎨 Icon System

All icons are now centralized in the `Icon` component. No more inline SVG paths!

### Using Icons

```typescript
import { Icon, LinkedInIcon, GitHubIcon } from '@/components/ui/Icon';

// Standard icon
<Icon name="email" className="w-5 h-5" />

// Social icons (filled versions)
<LinkedInIcon className="w-5 h-5" />
<GitHubIcon className="w-5 h-5" />
```

### Available Icon Names

**Social & Contact:**

- `email`, `github`

**Location & Time:**

- `location`, `calendar`

**Documents & Files:**

- `document`

**Actions:**

- `externalLink`, `arrowLeft`, `arrowRight`, `chevronDown`, `chevronUp`

**UI Elements:**

- `menu`, `close`, `search`

**Navigation:**

- `home`, `microphone`, `edit`

**Blog Categories:**

- `code` (IT & Development)
- `lightning` (Off Topic)

### Icon Usage in Constants

Navigation and blog category icons are now referenced by name:

```typescript
// constants/navigation.ts
export const navigationItems: NavigationItem[] = [
  {
    icon: 'home', // ✅ Icon name (good)
    section: '/',
    label: 'Home',
  },
  // NOT: icon: 'M16 7a4...' ❌ (old way)
];

// constants/blog.ts
export const blogCategories = {
  it: {
    icon: 'code', // ✅ Icon name (good)
    name: 'IT & Development',
  },
};
```

## 🎯 Best Practices

### DO ✅

```typescript
// Use constants for repeated patterns
import { ICON_SIZES } from '@/constants/styles';
<Icon className={ICON_SIZES.md} />

// Use Icon component for all SVGs
<Icon name="email" className="w-5 h-5" />

// Reference icons by name in constants
{ icon: 'home', label: 'Home' }
```

### DON'T ❌

```typescript
// Don't hardcode repeated size patterns
<div className="w-5 h-5">...</div>  // ❌

// Don't use inline SVGs
<svg><path d="M10..."/></svg>  // ❌

// Don't store SVG paths in data constants
{ icon: 'M10 20l4-16...', label: 'Code' }  // ❌
```

## 🔄 Migration Guide

When updating existing components:

1. **Replace hardcoded sizes** with constants:

   ```typescript
   // Before
   <Icon className="w-4 h-4" />

   // After
   import { ICON_SIZES } from '@/constants/styles';
   <Icon className={ICON_SIZES.sm} />
   ```

2. **Replace inline SVGs** with Icon component:

   ```typescript
   // Before
   <svg><path d="M3 8l7.89..."/></svg>

   // After
   import { Icon } from '@/components/ui/Icon';
   <Icon name="email" className="w-5 h-5" />
   ```

3. **Update constants** to use icon names:

   ```typescript
   // Before
   {
     icon: 'M16 7a4 4 0 11-8...';
   }

   // After
   {
     icon: 'home';
   }
   ```

## 📊 Benefits

- **DRY**: Single source of truth for sizes and icons
- **Consistency**: Same values used everywhere
- **Maintainability**: Update once, changes everywhere
- **Type Safety**: TypeScript types for all utilities
- **Performance**: No repeated SVG definitions in bundle
- **Readability**: Clear, semantic names instead of magic numbers

## 🚀 Adding New Utilities

To add a new icon:

1. Open `src/components/ui/Icon.tsx`
2. Add the SVG path to `iconPaths` object
3. Use the new icon name in your components

To add a new size constant:

1. Open `src/constants/styles.ts`
2. Add to the appropriate constant object
3. TypeScript will automatically infer the new type
