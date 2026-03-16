# Light & Dark Mode Feature

# 🤖 AI_FEATURE_Light-Dark-Mode

---

## Feature Identity

- **Feature Name:** Light & Dark Mode
- **Related Area:** Frontend

---

## Feature Goal

Allow visitors to switch between a light and dark color theme on the portfolio site. The selected theme persists across page refreshes using localStorage and respects the user's operating system preference as the default on first visit.

---

## Feature Scope

### In Scope
- A toggle button accessible on every page via the Header
- CSS custom properties for all theme-dependent colors
- Smooth transition when switching themes
- Persistence of theme preference in localStorage
- Respecting the user's OS/browser prefers-color-scheme as the default on first visit
- All components and pages support both themes

### Out of Scope
- No per-page theme settings
- No theme customization beyond light and dark
- No user account-based theme persistence

---

## Sub-Requirements (Feature Breakdown)

- Toggle button — visible on every page in the Header, switches between light and dark mode on click
- CSS custom properties — all theme-dependent colors defined as CSS variables on the root element
- localStorage persistence — selected theme is saved to localStorage and restored on page load
- OS preference default — if no theme is saved in localStorage, the user's prefers-color-scheme setting is used as the default
- Smooth transition — all color changes animate smoothly using CSS transitions
- Full coverage — all components and pages (Home, Portfolio, Links, Contact, Login, BackOffice, Header, Footer) support both themes

---

## User Flow / Logic (High Level)

1. Visitor arrives at the site for the first time
2. The app checks localStorage for a saved theme preference
3. If none found, the app checks the OS prefers-color-scheme setting
4. The appropriate theme is applied to the root element
5. The visitor clicks the toggle button in the Header
6. The theme switches immediately with a smooth transition
7. The new preference is saved to localStorage
8. On next visit, the saved preference is applied immediately

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/components/Header.jsx` — toggle button added here
- `src/components/Header.css` — toggle button styles
- `src/index.css` — CSS custom properties for both themes defined here
- All pages and components — must use CSS variables for all theme-dependent colors

### Backend / API
- None — this is a frontend-only feature

---

## Data Used or Modified

### localStorage
| Key | Value | Notes |
|-----|-------|-------|
| theme | "dark" or "light" | Persisted across sessions |

---

## Tech Constraints (Feature-Level)

- No external theming libraries
- CSS custom properties only — no inline styles for theme colors
- localStorage for persistence
- prefers-color-scheme media query for OS default detection
- Smooth transitions via CSS transition property on the root element

---

## Acceptance Criteria

- [ ] Toggle button is visible on every page in the Header
- [ ] Clicking the toggle switches between light and dark themes
- [ ] All colors change correctly in both themes with no hardcoded colors remaining
- [ ] Theme preference is saved to localStorage
- [ ] On page refresh, the saved theme is restored
- [ ] On first visit with no saved preference, the OS theme preference is used as default
- [ ] Theme transition is smooth — no jarring color flashes
- [ ] All pages and components look correct in both themes
- [ ] No console errors

---

## Notes for the AI

- Add a data-theme attribute to the root html element to control the active theme
- Define light theme variables and dark theme variables separately in index.css
- The toggle button should show a sun icon for light mode and a moon icon for dark mode
- Use emoji icons — no external icon libraries
- Do not add features beyond what is listed in this document
