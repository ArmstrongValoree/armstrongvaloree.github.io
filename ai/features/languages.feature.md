# Languages Feature

# 🤖 AI_FEATURE_Languages

---

## Feature Identity

- **Feature Name:** Languages
- **Related Area:** Frontend

---

## Feature Goal

Allow visitors to switch between English and French on the portfolio site. All user-facing text is translated and the selected language persists across page refreshes using localStorage.

---

## Feature Scope

### In Scope
- Support for English and French
- A language switcher accessible on every page via the Header
- All user-facing text translated — navigation, headings, paragraphs, buttons, and labels
- Language preference persisted in localStorage
- Translation files organized in JSON format

### Out of Scope
- No more than two languages
- No automatic translation — all translations are hardcoded in JSON files
- No backend or API translation services
- No per-page language settings

---

## Sub-Requirements (Feature Breakdown)

- Language switcher — visible on every page in the Header, switches between EN and FR on click
- JSON translation files — one file per language containing all user-facing text keys
- Translation hook — a custom React hook that reads the active language and returns the correct translations
- localStorage persistence — selected language is saved to localStorage and restored on page load
- Full coverage — all pages and components (Home, Portfolio, Links, Contact, Header, Footer) display translated text in both languages
- Login and Back Office — these are admin-only pages and do not require translation

---

## User Flow / Logic (High Level)

1. Visitor arrives at the site
2. The app checks localStorage for a saved language preference
3. If none found, English is used as the default
4. The visitor clicks the language switcher in the Header
5. All text on the page updates immediately to the selected language
6. The new preference is saved to localStorage
7. On next visit, the saved preference is applied immediately

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/components/Header.jsx` — language switcher added here
- `src/components/Header.css` — language switcher styles
- `src/i18n/en.json` — English translation file
- `src/i18n/fr.json` — French translation file
- `src/hooks/useTranslation.js` — custom hook for accessing translations
- All public pages — Home, Portfolio, Links, Contact, Header, Footer

### Backend / API
- None — this is a frontend-only feature

---

## Data Used or Modified

### localStorage
| Key | Value | Notes |
|-----|-------|-------|
| language | "en" or "fr" | Persisted across sessions |

### Translation File Structure
```json
{
  "nav": {
    "home": "Home",
    "portfolio": "Portfolio",
    "links": "Links",
    "contact": "Contact"
  },
  "home": {
    "name": "Valoree Armstrong",
    "title": "Full Stack Developer",
    "bio": "..."
  }
}
```

---

## Tech Constraints (Feature-Level)

- No external i18n libraries — use a custom hook only
- JSON files for translation storage
- localStorage for persistence
- English is the default language if no preference is saved
- Login and Back Office pages do not require translation

---

## Acceptance Criteria

- [ ] Language switcher is visible on every page in the Header
- [ ] Clicking the switcher toggles between English and French
- [ ] All navigation links update to the correct language
- [ ] All headings, paragraphs, buttons, and labels update to the correct language
- [ ] Language preference is saved to localStorage
- [ ] On page refresh, the saved language is restored
- [ ] English is the default if no preference is saved
- [ ] Translation files are organized in src/i18n/ as en.json and fr.json
- [ ] No console errors

---

## Notes for the AI

- Use a custom React hook called useTranslation that returns the translation object for the active language
- The language switcher should display EN and FR as text labels
- Keep translations natural — do not use word-for-word literal translations
- Do not add features beyond what is listed in this document
