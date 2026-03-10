# Setup & Deploy Feature
---

## Feature Identity

- **Feature Name:** Setup & Deploy
- **Related Area:** Fullstack

---

## Feature Goal

Scaffold a React + Vite application, configure it for GitHub Pages deployment, automate the build and deploy process using GitHub Actions, and connect the project to Supabase for database and authentication services.

---

## Feature Scope

### In Scope
- Scaffolding the React application using Vite
- Configuring the Vite base path for GitHub Pages
- Creating the GitHub Actions workflow for automated deployment
- Configuring the Supabase client in `src/lib/supabaseClient.js`
- Creating the `messages` table in Supabase with the correct schema
- Setting up RLS (Row Level Security) policies in Supabase
- Enabling Supabase Auth with email/password
- Creating the admin user in the Supabase dashboard
- Configuring environment variables for local development and deployment
- Adding fallback behavior when Supabase is not configured

### Out of Scope
- No custom backend or REST API
- No server-side rendering
- No Docker or containerization
- No user registration through the app

---

## Sub-Requirements (Feature Breakdown)

- Vite + React scaffold — project created using `npm create vite@latest .` with React and JavaScript selected
- Vite base path — `vite.config.js` sets `base: '/'` for the root GitHub Pages domain
- GitHub Actions workflow — file exists at `.github/workflows/deploy.yml` and triggers on push to `main`
- Workflow steps — runs `npm ci`, `npm run build`, and deploys the `dist/` folder to GitHub Pages
- GitHub Pages configuration — repository configured to serve from the Actions deployment
- Supabase client — initialized and exported from `src/lib/supabaseClient.js` using environment variables
- Messages table — created in Supabase with `id`, `name`, `email`, `message`, and `created_at` columns
- RLS policies — configured so only authenticated admins can read and delete messages; public users can insert
- Supabase Auth — email/password authentication enabled in the Supabase dashboard
- Admin user — pre-created in Supabase dashboard with email `admin@codeboxx.com` and password `C0deB0xx4dm!n`
- Environment variables — `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` stored in `.env` locally and in GitHub repository secrets for deployment
- `.gitignore` — `.env` file is listed and never committed
- Fallback behavior — app renders without crashing when Supabase variables are missing

---

## User Flow / Logic (High Level)

1. Developer runs `npm run dev` to start the local development server
2. Developer pushes completed work to the `main` branch
3. GitHub Actions workflow triggers automatically
4. Workflow installs dependencies, builds the project, and deploys the `dist/` folder
5. The live site becomes available at `https://armstrongvaloree.github.io`

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `vite.config.js` — base path configuration
- `src/lib/supabaseClient.js` — Supabase client initialization
- `.env` — local environment variables (never committed)
- `.github/workflows/deploy.yml` — automated build and deployment

### Backend / API
- No custom API endpoints
- Supabase handles all database and authentication operations

---

## Data Used or Modified

### Environment Variables
| Variable | Description |
|----------|-------------|
| VITE_SUPABASE_URL | Supabase project URL |
| VITE_SUPABASE_ANON_KEY | Supabase anonymous public key |

### Messages Table
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key, auto-generated |
| name | text | Required |
| email | text | Required |
| message | text | Required |
| created_at | timestamp | Auto-generated |

---

## Tech Constraints (Feature-Level)

- Use Fetch API only — no Axios
- All environment variables must be prefixed with `VITE_`
- The `.env` file must never be committed to GitHub
- Supabase secrets must be added to GitHub repository settings under Settings → Secrets and variables → Actions
- The deploy workflow must pass `VITE_*` variables to the build step via `env:`

---

## Acceptance Criteria

- [ ] Running `npm run dev` starts the local development server without errors
- [ ] Running `npm run build` produces a `dist/` folder without errors
- [ ] Pushing to `main` triggers the GitHub Actions workflow automatically
- [ ] The live site loads at `https://armstrongvaloree.github.io`
- [ ] The Supabase `messages` table exists with the correct schema
- [ ] RLS policies are configured in Supabase
- [ ] The admin user can log in with `admin@codeboxx.com` and `C0deB0xx4dm!n`
- [ ] The `.env` file is not present in the GitHub repository
- [ ] The app does not crash when Supabase variables are not configured

---

## Notes for the AI

- The Supabase admin user must be created manually in the Supabase dashboard — do not build a registration page
- The `supabaseClient.js` file is the only place the Supabase client should be initialized
- Do not add features beyond what is listed in this document
- Explain each configuration step clearly for a junior developer