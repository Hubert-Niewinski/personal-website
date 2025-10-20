# Personal Website - Hubert Niewiński

Professional portfolio and blog for QA Engineer & Test Automation Expert.

## 🚀 Quick Start

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000

## 📦 Why pnpm?

This project uses **pnpm** instead of npm for several benefits:

- ⚡ **Faster installs** - Up to 2x faster than npm
- 💾 **Disk space efficient** - Shared dependency storage
- 🔒 **Better security** - Strict dependency resolution
- 🎯 **More reliable** - Better handling of registry issues

If you don't have pnpm installed:

```bash
npm install -g pnpm
# or
brew install pnpm  # macOS
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage with Hero & Services
│   ├── blog/                # Blog listing & posts
│   ├── resume/              # Professional experience
│   ├── speaking/            # Conference talks & presentations
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Search engine crawl rules
│
├── components/              # React components
│   ├── ui/                  # Reusable UI components (Icon, Badge, Card, etc.)
│   ├── Comments.tsx         # Giscus comments integration
│   ├── ShareButtons.tsx     # Social sharing (LinkedIn, Facebook, Copy)
│   ├── Navigation.tsx       # Main navigation
│   ├── Footer.tsx           # Site footer
│   └── ...                  # Other components
│
├── constants/               # Configuration & data
│   ├── metadata.ts          # SEO config: location, languages, social links
│   ├── blog.ts              # Blog categories
│   ├── resume.ts            # Work experience, skills, education
│   ├── speaking.ts          # Conference presentations
│   ├── services.ts          # Service offerings
│   └── styles.ts            # Centralized style constants
│
├── content/                 # MDX blog posts
│   └── *.mdx               # Blog content files
│
├── lib/                     # Utilities
│   ├── mdx.ts              # MDX processing
│   └── structured-data.ts   # Schema.org JSON-LD generators
│
└── hooks/                   # Custom React hooks
    └── useCollapsibleSections.ts
```

## 🎨 Tech Stack

- **Framework:** Next.js 15.5.4 with App Router + Turbopack
- **Package Manager:** pnpm (faster and more reliable than npm)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Content:** MDX for blog posts
- **Comments:** Giscus (GitHub Discussions)
- **Analytics:** Vercel Analytics + Speed Insights
- **Code Quality:** ESLint 9, Prettier, Husky pre-commit hooks
- **Testing:** Jest + React Testing Library

## 📝 Key Features

### Blog System

- MDX-based blog posts in `/src/content/`
- Categories: Testing, Automation, Career, Speaking
- RSS feed at `/rss.xml`
- Social share buttons
- Giscus comments (purple_dark theme)
- Structured data for SEO

### SEO & Metadata

- Comprehensive Open Graph tags
- Schema.org structured data (Person, ProfessionalService, BlogPosting)
- Location: Białystok, Poland
- Languages: Polish (Native), English (Fluent), German (Intermediate)
- Dynamic sitemap generation
- Robots.txt configuration

### Code Quality

- Pre-commit hooks: Prettier → ESLint → Jest
- ES Modules throughout
- Centralized constants (DRY principle)
- Icon system with 15+ icons
- Reusable UI components

## 🛠️ Development Commands

```bash
# Development
pnpm dev                 # Start dev server with Turbopack

# Code Quality
pnpm lint                # Run ESLint
pnpm lint:fix            # Auto-fix ESLint issues
pnpm format              # Format with Prettier
pnpm format:check        # Check formatting

# Testing
pnpm test                # Run Jest tests
pnpm test:watch          # Watch mode
pnpm test:coverage       # Generate coverage report

# Build
pnpm build               # Production build
pnpm start               # Start production server

# Dependencies
pnpm add <package>       # Add a dependency
pnpm add -D <package>    # Add a dev dependency
pnpm remove <package>    # Remove a dependency
pnpm update              # Update dependencies
```

## 📝 Content Management

### Adding Blog Posts

1. Create new `.mdx` file in `/src/content/`
2. Add frontmatter:

```mdx
---
title: 'Your Post Title'
date: '2025-10-14'
excerpt: 'Brief description'
category: 'testing' | 'automation' | 'career' | 'speaking'
tags: ['tag1', 'tag2']
published: true
readTime: '5 min read'
---

Your content here...
```

### Updating Profile

**Location & Languages:**
Edit `/src/constants/metadata.ts`:

- `authorConfig.location` - City, country
- `authorConfig.languages` - Language proficiency

**Work Experience:**
Edit `/src/constants/resume.ts`:

- `experiences` - Job history
- `skills` - Technical skills with ratings
- `education` - Degrees and certifications

**Conference Talks:**
Edit `/src/constants/speaking.ts`:

- Add new presentations with title, event, date, location, topics

## 🎯 Configuration Files

### Important Files to Update

1. **`src/constants/metadata.ts`**
   - Your email, LinkedIn, GitHub
   - Location and languages
   - Professional details

2. **`src/constants/resume.ts`**
   - Work experience
   - Skills and ratings
   - Education and certifications

3. **`src/constants/speaking.ts`**
   - Conference presentations
   - Topics and locations

4. **`src/components/Comments.tsx`**
   - Giscus repository configuration
   - Already set up for your repo

## 📚 Documentation

- **`COMPONENT_ARCHITECTURE.md`** - Component design patterns
- **`STYLE_UTILITIES.md`** - Style constants usage
- **`PRE_COMMIT_SETUP.md`** - Pre-commit hooks guide
- **`GISCUS_SETUP.md`** - Comments system setup
- **`SEO_SETUP.md`** - SEO implementation details

## 🔧 Customization

### Changing Colors

Edit `/src/app/globals.css` for theme colors and gradients.

### Modifying Navigation

Edit `/src/constants/navigation.ts` for menu items.

### Updating Social Links

Edit `/src/constants/metadata.ts` - `siteConfig.links` section.

### Adding Services

Edit `/src/constants/services.ts` for service offerings.

## 🐛 Common Issues

**Build errors:** Check TypeScript strict mode compliance
**Pre-commit fails:** Run `pnpm format` and `pnpm lint:fix`
**Comments not loading:** Verify Giscus repo ID in Comments.tsx
**RSS feed empty:** Ensure blog posts have `published: true`
**Switching from npm:** Delete `node_modules` and `package-lock.json`, then run `pnpm install`

## 📊 Analytics & SEO

- **Vercel Analytics:** Enabled automatically on production
- **Structured Data:** Visible in page source (`<script type="application/ld+json">`)
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **RSS Feed:** Available at `/rss.xml`

## 🎓 Learning Resources

- Component patterns: See `COMPONENT_ARCHITECTURE.md`
- Testing approach: Check `__tests__/` directories
- MDX syntax: https://mdxjs.com/
- Schema.org: https://schema.org/

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
