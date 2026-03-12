# Links Page Feature

# 🤖 AI_FEATURE_Links-Page

---

## Feature Identity

- **Feature Name:** Links Page
- **Related Area:** Frontend

---

## Feature Goal

Create a curated links page that directs visitors to Valoree Armstrong's professional profiles and learning resources, giving potential employers and collaborators easy access to her online presence.

---

## Feature Scope

### In Scope
- At least 3 curated links with title, description, icon, and call-to-action
- Each link opens in a new tab
- At least 2 AI-generated images relevant to the page content
- Accessible alt text on all images
- Documentation of the AI tool used to generate images

### Out of Scope
- No authentication or Supabase interaction
- No external API calls
- No link management through the back office

---

## Sub-Requirements (Feature Breakdown)

- Route — Links page is accessible at `/links`
- Link cards — at least 3 cards, each with an icon, title, description, and call-to-action label
- External links — all links open in a new tab using `target="_blank"` and `rel="noopener noreferrer"`
- Secondary section — an additional content section below the links
- Layout — at least 2 distinct sections, visually separated
- AI-generated images — at least 2 images generated using an AI tool, relevant to content, with alt text
- AI tool documentation — the tool used is noted in a comment or the README

---

## User Flow / Logic (High Level)

1. Visitor clicks Links in the navigation
2. The Links page loads at `/links`
3. Visitor sees the page header with title and subtitle
4. Scrolling down reveals the link cards with descriptions
5. Each card is clickable and opens the external link in a new tab
6. A secondary section appears below the links

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/pages/Links.jsx` — main Links page component
- `src/pages/Links.css` — styles for the Links page
- `src/assets/` — AI-generated images stored here

### Backend / API
- None — this is a frontend-only page

---

## Data Used or Modified

- No data is fetched or modified
- All link content is hardcoded — titles, URLs, descriptions, and icons are static

---

## Tech Constraints (Feature-Level)

- No external UI libraries
- CSS custom properties from `Layout.css` must be reused for consistent theming
- All images must have descriptive alt text
- All external links must use `target="_blank"` and `rel="noopener noreferrer"`
- Mobile-first CSS — sections must stack vertically on narrow viewports

---

## Acceptance Criteria

- [ ] Links page loads at `/links` without errors
- [ ] At least 3 link cards are displayed with icon, title, description, and call-to-action
- [ ] All links open in a new tab
- [ ] Page has at least 2 visually distinct sections
- [ ] At least 2 AI-generated images are present with alt text
- [ ] Page is responsive on desktop and mobile
- [ ] No console errors

---

## Notes for the AI

- Keep the design consistent with the dark navy and cyan color scheme established in Layout.css
- Link cards should have hover effects consistent with the rest of the site
- AI-generated images should feel relevant and professional
- Do not add features beyond what is listed in this document

## AI Tool Used
- Images generated using Microsoft Designer (designer.microsoft.com) and NanoBanana
- Images: links-hero.png, links-secondary.png
