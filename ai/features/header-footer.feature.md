# Header & Footer Feature

# 🤖 AI_FEATURE_Header-Footer

---

## Feature Identity

- **Feature Name:** Header & Footer (Project Layout)
- **Related Area:** Frontend

---

## Feature Goal

Create a consistent layout that wraps every page with a sticky header containing navigation and a personal AI-generated logo, and a footer containing contact information and a copyright notice. A Layout component connects the two so every page automatically includes both.

---

## Feature Scope

### In Scope
- A `Layout` component that wraps all page content between the header and footer
- A `Header` component that is sticky and visible on every page
- Navigation links to all main public pages inside the header
- An AI-generated personal logo in the header that navigates to the Home page
- A `Footer` component that appears on every page
- Contact information and copyright notice in the footer
- Responsive behavior — horizontal nav on desktop, icon-based bottom nav on mobile
- Consistent background and styling across all pages

### Out of Scope
- No Login or Back Office links in the header or footer navigation
- No mobile hamburger menu — mobile nav uses icons at the bottom
- No animations or transitions beyond basic hover states

---

## Sub-Requirements (Feature Breakdown)

- Layout component — wraps all pages, renders Header above and Footer below page content
- Header component — sticky or fixed, visible while scrolling, consistent styling across all pages
- Navigation links — links to Home (`/`), Portfolio (`/portfolio`), Links (`/links`), and Contact (`/contact`)
- Personal logo — AI-generated image in the header, clicking it navigates to `/`, has appropriate `alt` text
- Footer component — appears on every page, includes email, social links, and copyright notice
- Desktop navigation — links displayed horizontally at the top on screens wider than 768px
- Mobile navigation — links become icons displayed at the bottom on screens 768px and narrower
- Logo scaling — logo does not overflow or break layout on any screen size

---

## User Flow / Logic (High Level)

1. User visits any page on the site
2. The Layout component renders the Header at the top and Footer at the bottom
3. The page content renders between them
4. On desktop the user sees horizontal navigation links in the header
5. On mobile the navigation links collapse into icons fixed at the bottom of the screen
6. Clicking the logo always returns the user to the Home page

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/components/Layout.jsx` — wraps all pages with Header and Footer
- `src/components/Header.jsx` — sticky header with logo and navigation
- `src/components/Footer.jsx` — footer with contact info and copyright
- `src/App.jsx` — applies the Layout component to all routes

### Backend / API
- None — this is a frontend-only feature

---

## Data Used or Modified

- No data is fetched or modified by this feature
- Navigation links are hardcoded to internal routes
- Footer contact information is hardcoded

---

## Tech Constraints (Feature-Level)

- Use React Router DOM `<Link>` (said "link") component for all internal navigation — do not use `<a>` tags for internal links
- No external UI libraries
- CSS custom properties (variables) must be used for all theme-dependent colors
- Mobile-first CSS — base styles target mobile, media queries scale up to desktop
- Logo must be an AI-generated image saved in `src/assets/`

---

## Acceptance Criteria

- [ ] Header is visible and sticky on every page
- [ ] Header contains navigation links to Home, Portfolio, Links, and Contact
- [ ] Clicking the logo navigates to the Home page
- [ ] Logo has appropriate `alt` text
- [ ] Footer appears on every page
- [ ] Footer includes contact information and a copyright notice
- [ ] On desktop (>768px) navigation links are displayed horizontally in the header
- [ ] On mobile (≤768px) navigation links become icons at the bottom of the screen
- [ ] No content overflows the viewport on any screen size
- [ ] Login and Back Office are not visible in any public navigation

---

## Notes for the AI

- The Layout component must be applied in `App.jsx` so every route automatically gets the Header and Footer
- Do not add any routes or links for Login or Back Office in this feature
- Keep the design clean and professional — this is a portfolio site
- Explain each component clearly for a junior developer