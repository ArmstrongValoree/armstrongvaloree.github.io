# AI Specification Document

**Student:** Valoree Armstrong
**Module:** Module 16
**Project:** armstrongvaloree.github.io
**Live URL:** https://armstrongvaloree.github.io

---

## 1. Project Identity & Scope

### What This Project Is
A personal portfolio website built with React and Vite, deployed to GitHub Pages. It serves as a professional showcase for Valoree Armstrong — a Full Stack Developer transitioning from healthcare, education, and social services administration.

### In Scope
- A single-page React application with client-side routing
- A Home page, Portfolio page, Links page, Contact page, Login page, and Back Office page
- Supabase integration for contact form submissions and admin authentication
- Responsive design for desktop and mobile
- Deployment to GitHub Pages via GitHub Actions

### Out of Scope
- No server-side rendering
- No custom backend or REST API
- No third-party CMS
- No e-commerce or payment features

---

## 2. Architecture & Repository Structure

```
armstrongvaloree.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── ai/
│   ├── ai-spec.md
│   └── features/
│       ├── setup-deploy.feature.md
│       ├── header-footer.feature.md
│       ├── home-page.feature.md
│       ├── portfolio-page.feature.md
│       ├── link-page.feature.md
│       ├── contact-page.feature.md
│       ├── login-page.feature.md
│       └── back-office.feature.md
├── docs/
│   ├── script-1.md
│   ├── script-2.md
│   └── pitch-feedback.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Links.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   └── BackOffice.jsx
│   ├── lib/
│   │   └── supabaseClient.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── vite.config.js
├── CONCEPTS.md
├── README.md
└── package.json
```

---

## 3. Allowed Technologies & Constraints

| Category | Technology |
|----------|------------|
| Framework | React 18 via Vite |
| Language | JavaScript (JSX) |
| Routing | React Router DOM |
| Styling | CSS (no jQuery, no Axios) |
| Backend/Auth | Supabase |
| Deployment | GitHub Pages via GitHub Actions |
| Mobile | Not applicable (web only for this module) |

### Constraints
- No jQuery
- No Axios — use the native Fetch API for all HTTP requests
- No direct commits to `main`
- `.env` file must never be committed to GitHub
- All Supabase secrets stored in GitHub repository settings as Actions secrets

---

## 4. Coding Standards & Conventions

### File Naming
- React components: PascalCase (e.g., `Header.jsx`, `BackOffice.jsx`)
- Utility files: camelCase (e.g., `supabaseClient.js`)
- Feature spec files: kebab-case (e.g., `home-page.feature.md`)

### Component Rules
- Every component is a functional component
- Props must have default values where applicable
- No class components

### CSS Rules
- Each component has its own CSS file where needed
- CSS custom properties (variables) used for all theme-dependent colors
- Mobile-first approach: base styles target mobile, media queries scale up to desktop

### Git Conventions
- Branch naming: `feature/feature-name` (e.g., `feature/home-page`)
- Commit messages follow this format: `type: short description`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- No direct commits to `main`

---

## 5. Global Definition of Done & Cross-Feature Rules

A feature is considered complete when ALL of the following are true:

- [ ] The feature renders correctly on desktop (>768px) and mobile (≤768px)
- [ ] The feature branch has been merged into `dev`
- [ ] No console errors are present
- [ ] All interactive elements have visible feedback (hover, focus, disabled states)
- [ ] All images have appropriate `alt` text for accessibility
- [ ] The feature matches its acceptance criteria in its feature specification document
- [ ] Code is clean, readable, and follows the conventions in Section 4

### Cross-Feature Rules
- The Header and Footer must appear on every public page
- The Login and Back Office routes must not appear in public navigation
- Supabase client is imported only from `src/lib/supabaseClient.js`
- All environment variables are prefixed with `VITE_`
- The site must be fully functional at `https://armstrongvaloree.github.io`