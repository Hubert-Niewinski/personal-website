# SEO & Metadata Configuration

This document describes the comprehensive SEO implementation for the personal website.

## 📋 Overview

The site now includes:

- ✅ Complete metadata with Open Graph and Twitter Cards
- ✅ Structured data (Schema.org JSON-LD)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Location and language information
- ✅ Author and professional details

## 🗂️ File Structure

### Configuration Files

#### `src/constants/metadata.ts`

Centralized metadata configuration including:

- **Site Config:** Name, title, description, URL, social links
- **Author Config:**
  - Personal details (name, job title, bio, image)
  - Location: Białystok, Poland (with coordinates)
  - Languages: Polish (Native), English (Fluent), German (Intermediate)
  - Professional details (6 years experience, specialties)
  - Social profiles (LinkedIn, GitHub)
- **Keywords:** SEO keywords for the site

#### `src/lib/structured-data.ts`

Functions to generate JSON-LD structured data:

- `generatePersonSchema()` - Personal information with location and languages
- `generateWebsiteSchema()` - Website metadata
- `generateProfessionalServiceSchema()` - Service offering details
- `generateBlogSchema()` - Blog metadata
- `generateBlogPostSchema()` - Individual blog post metadata

### Route Files

#### `src/app/layout.tsx`

Root layout with comprehensive metadata:

- Page title with template
- Meta description and keywords
- Open Graph tags (locale includes en_US, pl_PL, de_DE)
- Twitter Card configuration
- Robots directives
- RSS feed link in `<head>`

#### `src/app/page.tsx`

Homepage with three types of structured data:

- Person schema (you as a professional)
- Website schema
- Professional Service schema (your services)

#### `src/app/blog/[slug]/page.tsx`

Blog post pages with:

- Dynamic metadata generation
- Open Graph article tags
- Twitter Card configuration
- Blog post structured data
- Canonical URLs

#### `src/app/sitemap.ts`

Dynamic sitemap including:

- Homepage (priority: 1.0)
- Blog listing (priority: 0.9)
- Resume page (priority: 0.8)
- Speaking page (priority: 0.8)
- All blog posts (priority: 0.7)

#### `src/app/robots.txt`

Robots configuration:

- Allows all crawlers
- Disallows: `/api/`, `/_next/`, `/admin/`
- References sitemap

## 🌍 Location & Language Information

### Location Details

- **City:** Białystok
- **Region:** Podlaskie
- **Country:** Poland
- **Coordinates:** 53.1325°N, 23.1688°E

### Language Proficiency

1. **Polish** - Native speaker
2. **English** - Fluent
3. **German** - Intermediate (Solid)

This information is included in:

- Person structured data
- Professional Service schema
- Open Graph locale tags (en_US, pl_PL, de_DE)
- Contact point available languages

## 📊 SEO Features

### Open Graph Tags

Enables rich previews on:

- LinkedIn
- Facebook
- Slack
- Discord
- WhatsApp

Includes:

- Title, description, images
- Locale with alternates (EN, PL, DE)
- Article metadata for blog posts
- Author information

### Twitter Cards

Optimized for Twitter/X sharing:

- Large image cards
- Title and description
- Author attribution

### Structured Data Benefits

Helps search engines understand:

- Who you are (Person schema)
- What you do (Professional Service)
- Where you're located (Address, Geo coordinates)
- What languages you speak
- Your expertise and experience
- Your blog content (BlogPosting schema)

## 🎯 Impact for Recruiters & Clients

### Discovery

- **Location-based searches:** "QA Engineer Białystok"
- **Language-specific searches:** "Polish QA Engineer" or "English speaking QA Poland"
- **Local business searches:** Google Maps, local directories

### Professional Profile

Structured data provides:

- Job title and occupation
- Years of experience (6 years)
- Skills and specialties
- Service area (Poland)
- Available languages
- Contact information

### Trust Signals

- Professional service schema
- Verified location
- Language proficiency
- Open to B2B cooperation

## 🔧 Customization Needed

Update these values in `src/constants/metadata.ts`:

1. **Email address:** Replace `hubert.niewinski@example.com`
2. **Twitter handle:** Replace `@yourhandle` with actual handle
3. **Social links:** Verify LinkedIn and GitHub URLs
4. **Profile image:** Ensure `/profile.jpeg` exists and is high quality

## 📈 Testing & Validation

### Tools to Test SEO

1. **Open Graph Debugger**
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test structured data for Person, ProfessionalService, BlogPosting

4. **Schema Markup Validator**
   - https://validator.schema.org/

5. **Sitemap Checker**
   - Visit: `https://hubertniewinski.com/sitemap.xml`
   - Submit to Google Search Console

### Testing Checklist

- [ ] View sitemap at `/sitemap.xml`
- [ ] View robots.txt at `/robots.txt`
- [ ] Test Open Graph tags on Facebook debugger
- [ ] Test Twitter Cards on Twitter validator
- [ ] Validate structured data with Google Rich Results
- [ ] Verify RSS feed at `/rss.xml`
- [ ] Check meta tags in browser inspector

## 🚀 Deployment

After deployment to production:

1. **Submit sitemap to Google Search Console**
   - Go to: https://search.google.com/search-console
   - Add property: `hubertniewinski.com`
   - Submit sitemap: `https://hubertniewinski.com/sitemap.xml`

2. **Verify site ownership**
   - Add verification code to `src/app/layout.tsx` (see TODO comment)

3. **Monitor performance**
   - Google Search Console for indexing status
   - Analytics for traffic sources
   - Rich results report for structured data

## 📝 Notes

- All structured data is rendered as `<script type="application/ld+json">` in the HTML
- Metadata is SSR (Server-Side Rendered) for optimal SEO
- Sitemap regenerates on build with all published blog posts
- Location coordinates are for Białystok city center
- Multi-language support indicated but content is primarily in English

---

**Result:** Complete SEO optimization including location, languages, and professional details for maximum visibility to recruiters and clients! 🎯
