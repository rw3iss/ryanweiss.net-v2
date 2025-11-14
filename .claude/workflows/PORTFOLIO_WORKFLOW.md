# Portfolio Data Update Workflow

This document describes the workflow for updating portfolio data from the resume Google Doc.

## Overview

The portfolio data is sourced from Ryan Weiss's resume and converted into structured data for the portfolio website. This workflow can be run to either **replace all content** or **insert only new entries**.

## Source Document

**Resume URL**: https://docs.google.com/document/d/1KDdb3txAdTjWnsQl2imkjp4l2Ed0Xua0Z9J-f6mqR48/edit

**Export Format**: Use the text export URL:
```
https://docs.google.com/document/d/1KDdb3txAdTjWnsQl2imkjp4l2Ed0Xua0Z9J-f6mqR48/export?format=txt
```

## Data Structure

### Source Sections
- **FULL-TIME POSITIONS**: Professional employment history
- **FREELANCE EXPERIENCE**: Freelance project history

### Target Structure
All work items go into the "Work" portfolio section with a `type` field:
- `type: 'fulltime'` for full-time positions
- `type: 'freelance'` for freelance projects

### Item Fields

```typescript
interface PortfolioItem {
    id: string;              // URL-friendly normalized name (e.g., 'vendidit', 'envoyai')
    name: string;            // First word of company name (e.g., 'Vendidit', 'EnvoyAI')
    description: string;     // Brief summary (truncated for cards)
    image: string;           // Path to logo/screenshot: '/media/work/{id}/logo.png'
    media: MediaItem[];      // Array of additional media
    details: string;         // Full detailed description
    tags: string[];          // 3-7 technology tags from PortfolioTag enum
    url?: string;            // Website URL (if active and valid)
    type: 'fulltime' | 'freelance';  // Employment type
    position?: string;       // Job title (e.g., 'Lead Full-stack Engineer')
    dates?: string;          // Employment period (e.g., 'June 2025 to present')
}
```

## Workflow Steps

### 1. Fetch Resume Data

```bash
# Use WebFetch tool or curl to get text export
curl "https://docs.google.com/document/d/1KDdb3txAdTjWnsQl2imkjp4l2Ed0Xua0Z9J-f6mqR48/export?format=txt" > resume.txt
```

### 2. Parse Work Items

For each work entry in the resume:

1. **Extract Company Name**: First word becomes the `name` field
2. **Create ID**: Normalize name to lowercase, remove spaces/special chars
   - Examples: "Vendidit" → "vendidit", "KK & Jay" → "kk-jay", "EnvoyAI" → "envoyai"
3. **Extract Metadata**:
   - Position/role
   - Dates
   - Website URL (if present)
   - Full description
4. **Validate URL**: Check if website is active
   - Use WebFetch to verify
   - Only include if returns 200 OK
5. **Extract Tags**: Identify 3-7 main technologies
   - Look for: frameworks, languages, databases, cloud services
   - Map to `PortfolioTag` enum values
   - Normalize similar tags (e.g., "Node" → PortfolioTag.NODEJS)
6. **Determine Type**: Set based on source section
   - FULL-TIME POSITIONS → `type: 'fulltime'`
   - FREELANCE EXPERIENCE → `type: 'freelance'`

### 3. Collect Media

For each work item:

1. **Check for existing media** in `/public/media/work/{id}/`
2. **If website URL exists and is valid**:
   - Try to fetch logo from website (favicon, og:image meta tag)
   - If no logo available, take screenshot of homepage
3. **Download media** to `/public/media/work/{id}/`
   - Primary image: `logo.png` or `screenshot.png`
   - Additional media in same directory
4. **Update image path**: Set `image: '/media/work/{id}/logo.png'`

### 4. Update Tags Enum

If new technologies are found:

1. Open `src/data/tags.ts`
2. Add new enum values following naming convention:
   - ALL_CAPS with underscores
   - Value is human-readable string
3. Group by category (Frontend, Backend, Database, etc.)

Example:
```typescript
export enum PortfolioTag {
    // ... existing tags
    NEW_TECH = 'New Technology',
}
```

### 5. Update Portfolio Data

**Option A: Replace All Content**
1. Open `src/data/portfolioData.ts`
2. Replace entire `Work` section items array
3. Keep other sections (Featured, Hobbies, Blog) intact

**Option B: Insert New Entries Only**
1. Compare existing items by `id` field
2. Only add items with new `id` values
3. Prepend new items (most recent first)
4. Do NOT modify existing items

### 6. Update Components (if needed)

If new fields are added to `PortfolioItem` interface:

**ItemDetailView Component** (`src/components/shared/ItemDetailView/`):
- Add UI elements to display new fields
- Update layout to accommodate new metadata
- Example: Show position, dates, and URL

**CircularBelt/ThumbnailPreview Components**:
- Update tooltip or hover display if needed
- Show type indicator (fulltime/freelance) if desired

## Tag Extraction Guidelines

### Common Technology Patterns

**Frontend Frameworks**:
- React, React Native, Angular, Ember, Vue, Svelte → PortfolioTag.REACT, etc.

**Backend Frameworks**:
- Node.js, Express, NestJS, Laravel, Django, Rails → PortfolioTag.NODEJS, etc.

**Databases**:
- MySQL, PostgreSQL, MongoDB, Redis → PortfolioTag.MYSQL, etc.

**Cloud/Infrastructure**:
- AWS, GCP, Lambda, S3, EC2 → PortfolioTag.AWS, etc.

**Specialized**:
- E-commerce, CMS Development, AI/ML, Real-time, Microservices

### Tag Selection Priority
1. Primary framework/language (1-2 tags)
2. Key infrastructure (1-2 tags)
3. Notable integrations (1-2 tags)
4. Specialized concepts (1-2 tags)

Aim for 5-7 tags per item, focusing on most significant technologies.

## URL Validation

Before including a URL:

```bash
# Check if URL is active
curl -I https://example.com

# Look for 200 OK status
# If 404, 500, or connection error, do NOT include URL
```

Active URLs:
- vendidit.com ✓
- preachlogic.com ✓
- tier33.com ✓
- kkandjay.com ✓

Inactive URLs:
- adaya.com ✗
- envoyai.com ✗

## File Locations

- **Portfolio Data**: `src/data/portfolioData.ts`
- **Tags Enum**: `src/data/tags.ts`
- **Media Directory**: `public/media/work/{id}/`
- **Components**:
  - Detail View: `src/components/shared/ItemDetailView/`
  - Thumbnails: `src/components/shared/ThumbnailPreview/`
  - Carousel: `src/components/shared/CircularBelt/`

## Testing

After updating portfolio data:

```bash
# Build the project
npm run build

# Start dev server
npm run dev

# Verify:
# 1. All work items appear in Work section
# 2. Fulltime and freelance items are mixed correctly
# 3. URLs open correctly when clicked
# 4. Tags display properly
# 5. Position and dates show in detail view
# 6. Images/logos display (or show placeholder)
```

## Future Enhancements

- **Automated Resume Parsing**: Script to automatically parse Google Doc export
- **Image Fetching**: Automated logo/screenshot capture
- **Tag Suggestion**: AI-based tag extraction from descriptions
- **Duplicate Detection**: Check for similar entries before insertion
- **Version Control**: Track changes to resume data over time

## Notes

- **State Persistence**: Portfolio data does NOT persist across page refreshes (intentional)
- **Image Placeholders**: If media files don't exist, components should show placeholder
- **Sorting**: Items display in order defined in portfolioData.ts (newest first recommended)
- **Featured Section**: Manually curate 3-5 best items for Featured section

## Contact

For questions about this workflow, contact Ryan Weiss.

Last Updated: 2025-01-11
