# armstrongvaloree.github.io — Project Summary

## Known Issues / To Do

_No outstanding issues._

---

## Resolved

### Rocket Elevators Dashboard — login fixed (2026-04-22)
**Was:** POST to `https://rocket-elevators-api.onrender.com/session` returned 500, then 401.  
**Root causes (both fixed):**
1. MongoDB Atlas IP allowlist was blocking Render's dynamic IPs → added `0.0.0.0/0` in Atlas → Network Access
2. Demo user password was stored as plain text but the API uses `bcrypt.compare()` → updated stored password to a bcrypt hash; fixed `server/scripts/seedUser.js` to hash on seed so this can't recur

**Live site:** https://armstrongvaloree.github.io  
**Repo:** https://github.com/ArmstrongValoree/armstrongvaloree.github.io  
**Stack:** React · Vite · Supabase · GitHub Pages  
**Deployed via:** GitHub Actions (push to `main` triggers build + deploy)

---

## What it is

A full-stack personal portfolio site built to showcase skills as a Full Stack Developer.
It is not a static brochure — it has a live database, authentication, a protected back office,
multilingual support, and real CI/CD. The goal was to make the site itself a demonstration
of the technical skills described on it.

---

## Key Features

### Pages
| Route | Purpose |
|---|---|
| `/` | Hero, technical skills, soft skills, featured projects, Why Hire Me, contact CTA |
| `/portfolio` | Education + experience timeline, full project gallery, resume download |
| `/links` | GitHub, LinkedIn, CodeBoxx Academy — with descriptions and direct links |
| `/contact` | Contact form (writes to Supabase), plus direct contact methods |
| `/login` | Hidden admin login — not linked in navigation |
| `/backoffice` | Protected message dashboard: view, read full message, delete |

### Light / Dark Mode
- Default is dark (navy/cyan neon aesthetic)
- Toggle lives in both the desktop nav and the mobile bottom nav
- Persists to localStorage; respects OS `prefers-color-scheme` on first visit
- Implemented with a `data-theme="light"` attribute on the document root and CSS custom properties — no library needed

### Language Switcher (EN / FR / SW)
- Three languages: English, French, and Swahili
- Custom React Context (`LanguageContext`) + `useTranslation` hook — no i18n library
- Translation files: `src/i18n/en.json`, `fr.json`, `sw.json`
- Selection persists to localStorage
- Full coverage: all nav, pages, forms, buttons, success/error messages, and footer

### Secret Back Office
- Admin login at `/login` — not reachable from the public UI
- Keyboard shortcut: **Alt+Shift+A** opens the login route from anywhere on the site
- Authenticated via Supabase Auth (email + password)
- Back office shows the messages table: name, email, preview, timestamp
- Actions: view full message in a modal, delete
- Protected route — unauthenticated users are redirected to login immediately

### Contact Form
- Fields: name, email, message (all required)
- Submits directly to a Supabase `messages` table via the JS SDK
- Row Level Security enforces that anyone can INSERT but only the authenticated admin can SELECT or DELETE
- Loading state prevents double-submission; success/error feedback shown inline

### Scroll Animations
- `IntersectionObserver` triggers `.slide-in` CSS class on skill cards, project cards, and section headers as they enter the viewport
- Cards stagger with `transitionDelay` based on their index

### Responsive Design
- Desktop: horizontal top nav with logo, language buttons, theme toggle
- Mobile (≤768px): bottom navigation bar with emoji icons (🏠 📄 🔗 ✉️), plus language and theme toggles
- Fully responsive layouts via Flexbox and CSS Grid — no framework

### Performance & SEO
- Hero and background images converted from PNG (~1MB+) to WebP (~40–90KB)
- `loading="lazy"` on all non-hero images
- Full Open Graph and Twitter Card meta tags
- Semantic HTML5 throughout

### No LeetCode / Challenges Section
Not included — the site is focused on professional presentation, not algorithm practice.

---

## Did I use Claude Code CLI on this one?

Yes — Claude Code (via the VS Code extension) was used actively throughout development. The workflow involved:

- A comprehensive AI spec (`ai/ai-spec.md` + `ai/features/*.feature.md`) written upfront to define scope, schema, routes, RLS policies, and acceptance criteria before a line of code was written
- Claude Code used for implementation, debugging, and iterative improvements across the full session history
- Post-launch improvements handled in this ongoing Claude Code session: image optimization, SEO meta tags, active nav highlighting, lazy loading, featured projects updates, i18n key fixes, and QR code additions

The `ai/` directory is preserved in the repo as documentation of that AI-assisted planning process.

---

## Why build it this way?

**The problem being solved:** A portfolio with only static content and no backend is hard to distinguish from a template. The goal was to make the site itself the proof — to show, not just tell, what full-stack development looks like.

**Specific choices and why:**

- **Supabase instead of a custom backend** — demonstrates real database integration, auth, and RLS in a production context without the overhead of standing up a separate server
- **No CSS framework** — shows comfort with CSS from scratch; every layout, animation, and variable was written by hand
- **No i18n library** — the three-language switcher was built with React Context and plain JSON files to demonstrate the underlying mechanics rather than outsourcing them to a package
- **MemoryRouter instead of BrowserRouter** — GitHub Pages is a static host with no server-side routing; MemoryRouter keeps all routing in-memory so deep links don't 404 (documented in `CONCEPTS.md`)
- **Secret back office** — demonstrates auth-protected routes in a real-world context; a recruiter or hiring manager can ask about it and get a live demo
- **The keyboard shortcut (Alt+Shift+A)** — small UX detail that shows intentional thinking about hidden functionality that doesn't clutter the public UI
- **GitHub Actions CI/CD** — every push to `main` builds and deploys automatically; no manual FTP or drag-and-drop

**The bigger picture:** The portfolio itself is the argument. It is a full-stack application — it has a database, authentication, protected routes, a CI/CD pipeline, multilingual support, and responsive design. Everything described on the site is demonstrated by the site.

---

## Tech Stack at a Glance

| Layer | Choice |
|---|---|
| Framework | React 18 (functional components, hooks) |
| Build tool | Vite 7 |
| Routing | React Router DOM 7 (MemoryRouter) |
| Styling | Custom CSS with CSS custom properties |
| Database + Auth | Supabase (PostgreSQL + Supabase Auth) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Languages | JavaScript (.jsx) — TypeScript installed but not used |

---

## Notable Files

| File | What it is |
|---|---|
| `src/App.jsx` | Route definitions |
| `src/components/Layout.css` | All CSS custom properties (theme variables) |
| `src/context/LanguageContext.jsx` | i18n state and switcher logic |
| `src/pages/BackOffice.jsx` | Protected admin message dashboard |
| `src/lib/supabaseClient.js` | Supabase SDK initialization |
| `ai/ai-spec.md` | Full project specification written before development |
| `CONCEPTS.md` | Three learning concepts documented during development |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
