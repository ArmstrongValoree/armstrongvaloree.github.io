# Valoree D. Armstrong — Personal Portfolio

A full stack personal portfolio site built with React, Vite, and Supabase. Designed to showcase my education, professional experience, and software development projects, while demonstrating real-world full stack skills including authentication, database integration, and CI/CD deployment.

🌐 **Live Site:** [armstrongvaloree.github.io](https://armstrongvaloree.github.io)

---

## Features

- **Home** — Introduction, technical skills, and strengths with scroll animations
- **Portfolio** — Education, professional experience, projects with tech tags, and resume download
- **Links** — Curated links to professional profiles and learning resources
- **Contact** — Contact form with Supabase database persistence
- **Login** — Hidden admin login route using Supabase Auth
- **Back Office** — Protected admin dashboard to view and delete contact messages

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router DOM |
| Styling | CSS (custom properties, Flexbox, Grid) |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Deployment | GitHub Pages via GitHub Actions |

---

## Project Structure

```
src/
├── assets/          # AI-generated images and static assets
├── components/      # Layout, Header, Footer
├── lib/             # Supabase client
├── pages/           # Home, Portfolio, Links, Contact, Login, BackOffice
├── App.jsx          # Route definitions
└── main.jsx         # Entry point
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/armstrongvaloree/armstrongvaloree.github.io.git
cd armstrongvaloree.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root of the project:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Deployment

This project deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

```bash
git checkout main
git merge dev
git push origin main
```

---

## Database Schema

### Messages Table (Supabase)

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Auto-generated primary key |
| name | text | Submitted via contact form |
| email | text | Submitted via contact form |
| message | text | Submitted via contact form |
| created_at | timestamptz | Auto-generated timestamp |

### Row Level Security Policies
- Public users can INSERT messages
- Authenticated admin can SELECT and DELETE messages

---

## AI-Generated Images

Images were generated using **Microsoft Designer** and **NanoBanana**.

| Image | Page | Description |
|-------|------|-------------|
| home-hero.png | Home | Hero background — tech abstract |
| home-skills.png | Home | Skills section illustration |
| portfolio-education.png | Portfolio | Education and experience section |
| portfolio-projects.png | Portfolio | Projects section illustration |
| links-hero.png | Links | Links page hero |
| links-secondary.png | Links | Always Learning section |
| contact-hero.png | Contact | Contact page hero |
| contact-secondary.png | Contact | Let's Connect section |

---

## Author

**Valoree D. Armstrong**
Full Stack Developer · Saint Petersburg, FL
[LinkedIn](https://www.linkedin.com/in/valoree-armstrong-462511395) · [GitHub](https://github.com/armstrongvaloree) · [Portfolio](https://armstrongvaloree.github.io)

---

## License

This project is for educational and portfolio purposes.
