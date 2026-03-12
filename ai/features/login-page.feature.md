# Login Page Feature

# 🤖 AI_FEATURE_Login-Page

---

## Feature Identity

- **Feature Name:** Login Page
- **Related Area:** Fullstack

---

## Feature Goal

Create a secure, hidden login page that allows the admin to authenticate using Supabase Auth and gain access to the Back Office for managing contact form messages.

---

## Feature Scope

### In Scope
- Email and password input fields
- Supabase Auth signInWithPassword on submission
- Redirect to /backoffice on successful login
- Error message on failed login attempt
- Validation that both fields are filled before submission

### Out of Scope
- No user registration
- No password reset flow
- No social login
- No link to this page in any public navigation

---

## Sub-Requirements (Feature Breakdown)

- Route — Login page is accessible at `/login`
- Hidden route — no link to /login in the header, footer, or any public navigation
- Email field — email input, required
- Password field — password input, required
- Validation — both fields must be filled before submission is attempted
- Supabase Auth — calls signInWithPassword with email and password
- Success redirect — on successful login, user is redirected to /backoffice
- Error message — red feedback message shown on failed login attempt
- Protected access — unauthenticated users who visit /backoffice are redirected to /login

---

## User Flow / Logic (High Level)

1. Admin navigates directly to /login via the URL bar
2. Admin enters email and password
3. If fields are empty, a validation error appears
4. If credentials are wrong, a red error message appears
5. If credentials are correct, admin is redirected to /backoffice
6. If an unauthenticated user visits /backoffice directly, they are redirected to /login

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/pages/Login.jsx` — main Login page component
- `src/pages/Login.css` — styles for the Login page

### Backend / API
- Supabase Auth — signInWithPassword operation

---

## Data Used or Modified

### Auth Credentials
| Field | Value |
|-------|-------|
| Email | admin@codeboxx.com |
| Password | C0deB0xx4dm!n |

---

## Tech Constraints (Feature-Level)

- Use Supabase JS client for authentication
- No external form libraries
- Do not use HTML form tags — use onClick handlers instead
- Mobile-first CSS

---

## Acceptance Criteria

- [ ] Login page loads at `/login` without errors
- [ ] Form has email and password fields
- [ ] Submitting with empty fields shows a validation error
- [ ] Submitting with wrong credentials shows a red error message
- [ ] Submitting with correct credentials redirects to /backoffice
- [ ] Unauthenticated users who visit /backoffice are redirected to /login
- [ ] No link to /login exists in any public navigation
- [ ] Page is responsive on desktop and mobile
- [ ] No console errors

---

## Notes for the AI

- Keep the design clean and minimal — this is an admin-only page
- Use React useState for form state management
- Use React Router DOM useNavigate for redirects
- Do not add features beyond what is listed in this document
