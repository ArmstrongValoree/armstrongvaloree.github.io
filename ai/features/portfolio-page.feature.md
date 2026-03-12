# Portfolio Page Feature

# 🤖 AI_FEATURE_Portfolio-Page

---

## Feature Identity

- **Feature Name:** Portfolio Page
- **Related Area:** Frontend

---

## Feature Goal

Create a comprehensive portfolio page that showcases Valoree Armstrong's education, professional experience, software projects, and provides a downloadable resume — giving potential employers a complete picture of her background and capabilities.

---

## Feature Scope

### In Scope

- Education section with at least 2 entries
- Professional experience section with at least 2 entries
- Projects section with at least 3 projects, each with tech stack tags and description
- Downloadable resume PDF
- At least 2 AI-generated images relevant to the page content
- Accessible alt text on all images
- Documentation of the AI tool used to generate images

### Out of Scope

- No contact form on this page
- No authentication or Supabase interaction
- No external API calls
- No project filtering or search

---

## Sub-Requirements (Feature Breakdown)

- Route — Portfolio page is accessible at `/portfolio`
- Education section — at least 2 education entries, each with year, title, institution, and description
- Experience section — at least 2 experience entries, each with year, title, institution, and description
- Projects section — at least 3 projects, each with name, tech stack tags, and description
- Resume download — a downloadable PDF resume is available via a button or link
- Layout — at least 3 distinct sections, visually separated by spacing, backgrounds, or dividers
- AI-generated images — at least 2 images generated using an AI tool, relevant to content, with alt text
- AI tool documentation — the tool used is noted in a comment or the README
- Scroll animation — cards animate into view as the user scrolls

---

## User Flow / Logic (High Level)

1. Visitor clicks Portfolio in the navigation
2. The Portfolio page loads at `/portfolio`
3. Visitor sees the page header with title and subtitle
4. Scrolling down reveals the Education and Experience sections
5. Continuing to scroll reveals the Projects section
6. At the bottom the visitor can download the resume PDF

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend

- `src/pages/Portfolio.jsx` — main Portfolio page component
- `src/pages/Portfolio.css` — styles for the Portfolio page
- `src/assets/` — AI-generated images stored here
- `public/resume.pdf` — downloadable resume file

### Backend / API

- None — this is a frontend-only page

---

## Data Used or Modified

- No data is fetched or modified
- All content is hardcoded — education, experience, projects, and images are static

---

## Tech Constraints (Feature-Level)

- No external UI libraries
- CSS custom properties from `Layout.css` must be reused for consistent theming
- All images must have descriptive alt text
- Mobile-first CSS — sections must stack vertically on narrow viewports
- Intersection Observer API used for scroll animations — no external animation libraries

---

## Acceptance Criteria

- [ ] Portfolio page loads at `/portfolio` without errors
- [ ] At least 2 education entries are displayed
- [ ] At least 2 experience entries are displayed
- [ ] At least 3 projects are displayed with tech tags and descriptions
- [ ] Resume download button is present
- [ ] Page has at least 3 visually distinct sections
- [ ] At least 2 AI-generated images are present with alt text
- [ ] Cards animate in as the user scrolls
- [ ] Page is responsive on desktop and mobile
- [ ] No console errors

---

## Notes for the AI

- Keep the design consistent with the dark navy and cyan color scheme established in Layout.css
- Use CSS Flexbox for the layout sections
- Tech stack tags should be styled as pill/badge elements
- AI-generated images should feel relevant and professional
- Do not add features beyond what is listed in this document

## AI Tool Used

- Images generated using Microsoft Designer (designer.microsoft.com) and NanoBanana
- Images: portfolio-education.png, portfolio-projects.png
