# Personal Website - Hubert Niewiński

Professional portfolio and blog for QA Engineer & Test Automation Expert.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

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
npm run dev              # Start dev server with Turbopack

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting

# Testing
npm test                 # Run Jest tests
npm run test:watch       # Watch mode
npm run test:coverage    # Generate coverage report

# Build
npm run build            # Production build
npm start                # Start production server
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
**Pre-commit fails:** Run `npm run format` and `npm run lint:fix`
**Comments not loading:** Verify Giscus repo ID in Comments.tsx
**RSS feed empty:** Ensure blog posts have `published: true`

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
