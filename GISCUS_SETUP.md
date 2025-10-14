# Giscus Comments Setup Guide

This guide will help you set up Giscus comments for your blog.

## What is Giscus?

Giscus is a comments system powered by GitHub Discussions. It's:

- ✅ Free and open source
- ✅ No database needed
- ✅ Privacy-friendly
- ✅ Perfect for developer blogs
- ✅ GitHub authentication (spam protection)

## Setup Steps

### 1. Enable GitHub Discussions

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/personal-website`
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check ✅ **Discussions**

### 2. Install Giscus App

1. Go to: https://github.com/apps/giscus
2. Click **Install**
3. Select your `personal-website` repository
4. Grant permissions

### 3. Get Your Configuration Values

1. Go to: https://giscus.app
2. Fill in the configuration form:
   - **Repository:** `YOUR_USERNAME/personal-website`
   - **Page ↔️ Discussions Mapping:** Choose "Discussion title contains page pathname"
   - **Discussion Category:** Choose or create a category (e.g., "General" or "Blog Comments")
   - **Theme:** Choose "dark" to match your site

3. The app will generate your configuration values:
   - `repo`
   - `repoId`
   - `category`
   - `categoryId`

### 4. Update Comments Component

Open `/src/components/Comments.tsx` and update these values:

\`\`\`tsx
<Giscus
id="comments"
repo="YOUR_USERNAME/personal-website" // Update this
repoId="R_YOUR_REPO_ID" // Update this
category="General" // Update this
categoryId="DIC_YOUR_CATEGORY_ID" // Update this
mapping="pathname"
// ... rest stays the same
/>
\`\`\`

### 5. Test It Out

1. Deploy your site to Vercel
2. Visit any blog post
3. You should see the comments section at the bottom
4. Sign in with GitHub and leave a test comment
5. The comment will appear as a discussion in your GitHub repository

## Configuration Options

### Mapping Types

- **pathname** (recommended): Uses page URL path
- **url**: Uses full page URL
- **title**: Uses page title
- **og:title**: Uses Open Graph title

### Themes

Available themes for dark mode:

- `dark` (default)
- `dark_dimmed`
- `transparent_dark`
- `preferred_color_scheme` (respects user's system preference)

### Reactions

Set `reactionsEnabled="1"` to allow users to react to the main post with emojis.

## Troubleshooting

### Comments Not Showing?

1. Make sure GitHub Discussions is enabled in your repo
2. Verify Giscus app is installed for your repository
3. Double-check all IDs match what's shown on https://giscus.app
4. Clear browser cache and reload

### Wrong Discussion Category?

Update the `category` and `categoryId` in Comments.tsx to match your desired category.

## Benefits of Giscus

1. **No Database**: Comments stored in GitHub Discussions
2. **Free Forever**: No hosting costs
3. **Spam Protection**: Requires GitHub authentication
4. **Ownership**: You own all comment data
5. **Moderation**: Use GitHub's built-in moderation tools
6. **Markdown**: Full markdown support in comments
7. **Notifications**: Get notified via GitHub when someone comments

## Example Discussion

After setup, each blog post will have its own discussion thread in your repository's Discussions tab, making it easy to manage and moderate comments.

---

**Ready to set it up?** Follow the steps above and you'll have comments working in ~10 minutes! 🚀
