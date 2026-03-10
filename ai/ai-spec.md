# AI Specification Document

**Student:** Valoree Armstrong
**Module:** Module 16
**Project:** armstrongvaloree.github.io
**Live URL:** https://armstrongvaloree.github.io

---

## Project Identity

- **Project Name:** armstrongvaloree.github.io
- **Short Description:** A personal portfolio website that showcases Valoree Armstrong as a Full Stack Developer, including her skills, projects, work history, and a contact form backed by Supabase.
- **Project Type:** Static Website (React + Vite, deployed to GitHub Pages)

---

## Goal and Scope

### Goal
Build and deploy a professional personal portfolio website that demonstrates full stack development skills, integrates Supabase for contact form submissions and admin authentication, and is accessible live at `https://armstrongvaloree.github.io`.

### In Scope
- A React application scaffolded with Vite
- Client-side routing with React Router DOM
- A Home page, Portfolio page, Links page, Contact page, Login page, and Back Office page
- Supabase integration for contact form submissions and admin authentication
- Responsive design for desktop and mobile
- Automated deployment to GitHub Pages via GitHub Actions

### Out of Scope
- No server-side rendering
- No custom backend or REST API
- No third-party CMS
- No e-commerce or payment features
- No jQuery or Axios

---

## Users and Use Cases

- **Public Visitor:** Can view the Home, Portfolio, and Links pages, and submit a message through the Contact form
- **Authenticated Admin:** Can access the Back Office by logging in via the secret Login route, view all submitted messages, delete messages, and log out

---

## Feature Index

- `./ai/features/setup-deploy.feature.md`
- `./ai/features/header-footer.feature.md`
- `./ai/features/home-page.feature.md`
- `./ai/features/portfolio-page.feature.md`
- `./ai/features/link-page.feature.md`
- `./ai/features/contact-page.feature.md`
- `./ai/features/login-page.feature.md`
- `./ai/features/back-office.feature.md`

---

## Pages / Screens / Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Landing page with introduction, technical skills, and soft skills |
| `/portfolio` | Portfolio | Education, work experience, projects, and downloadable resume |
| `/links` | Links | Curated list of links with images and descriptions |
| `/contact` | Contact | Contact form that submits to Supabase messages table |
| `/login` | Login | Secret admin login route, not in public navigation |
| `/backoffice` | Back Office | Protected admin page to view and delete submitted messages |

---

## Data and Models

### Database
- **Type:** Supabase (PostgreSQL)

### Messages Table
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key, auto-generated |
| name | text | Required |
| email | text | Required |
| message | text | Required |
| created_at | timestamp | Auto-generated |

### Auth
- Supabase Auth with email/password
- Admin user: `admin@codeboxx.com` / `C0deB0xx4dm!n`
- Admin user is pre-created in the Supabase dashboard, not via the app

---

## Tech Stack and Tools

### Frontend
- React 18
- Vite
- React Router DOM
- CSS (mobile-first, with CSS custom properties)

### Backend
- No custom backend
- Supabase handles database and authentication

### Database
- Supabase (PostgreSQL)

### Tools / Libraries
- Fetch API (no Axios)
- GitHub Actions (CI/CD)
- GitHub Pages (hosting)

---

## Repository Structure

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

## Rules for the AI

- Use junior-friendly code with clear, readable variable and function names
- Do not add features not listed in this specification or in the feature specification files
- Do not use jQuery or Axios — use the Fetch API only
- Do not use class components — use functional components only
- Reuse existing files and components when possible
- All Supabase interactions must go through `src/lib/supabaseClient.js`
- Never commit the `.env` file
- No direct commits to `main`
- Explain all changes briefly

---

## How to Run / Test the Project

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```

### Deploy
Push to the `main` branch. GitHub Actions will automatically build and deploy to `https://armstrongvaloree.github.io`.

### Environment Variables
Create a `.env` file at the root of the project:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
Add these same variables to GitHub repository settings under Settings → Secrets and variables → Actions.

---

## Definition of Done

A feature is considered complete when ALL of the following are true:

- [ ] The feature renders correctly on desktop (>768px) and mobile (≤768px)
- [ ] The feature branch has been merged into `dev`
- [ ] No console errors are present
- [ ] All interactive elements have visible feedback (hover, focus, disabled states)
- [ ] All images have appropriate `alt` text for accessibility
- [ ] The feature matches its acceptance criteria in its feature specification document
- [ ] Code is clean, readable, and follows the coding standards below

### Coding Standards
- React components: PascalCase (e.g., `Header.jsx`, `BackOffice.jsx`)
- Utility files: camelCase (e.g., `supabaseClient.js`)
- Feature spec files: kebab-case (e.g., `home-page.feature.md`)
- Branch naming: `feature/feature-name` (e.g., `feature/home-page`)
- Commit messages: `type: short description` (types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`)

### Cross-Feature Rules
- The Header and Footer must appear on every public page
- The Login and Back Office routes must not appear in public navigation
- Supabase client is imported only from `src/lib/supabaseClient.js`
- All environment variables are prefixed with `VITE_`
- The site must be fully functional at `https://armstrongvaloree.github.io`