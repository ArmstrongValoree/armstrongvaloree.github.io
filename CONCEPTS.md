# CONCEPTS.md

**Student:** Valoree Armstrong
**Module:** Module 16
**Project:** armstrongvaloree.github.io

---

## Concept 1: Row Level Security (RLS) in Supabase

### Purpose in the Project
Supabase uses Row Level Security to control who can read, write, or delete data in the database. In this project, RLS policies were configured on the `messages` table so that:
- Any public visitor can **insert** a message through the contact form
- Only an authenticated admin can **select** and **delete** messages in the Back Office

Without RLS, anyone with the anon key could read or delete all messages, which would be a serious security risk.

### Why it was Challenging
RLS was challenging because the rules are not written in the application code — they are configured invisibly in the Supabase dashboard. When something was not working, there was no error message in the code to point to. I had to learn to think about security at the database level separately from the application level, which was a completely new way of thinking for me.

### Usage Location
- Configured in the Supabase dashboard under: Table Editor → messages → RLS Policies
- Referenced in: `src/lib/supabaseClient.js` — lines 1–15
- Used in: `src/pages/Contact.jsx` (public insert) and `src/pages/BackOffice.jsx` (authenticated select and delete)

---

## Concept 2: Protected Routes with Supabase Auth and authChecked State

### Purpose in the Project
The Back Office page is protected — only an authenticated admin should be able to see it. When the page loads, it checks whether there is an active Supabase session. If there is no session, the user is redirected to the login page immediately. The `authChecked` state variable prevents the page from rendering at all until the auth check has completed.

### Why it was Challenging
This was challenging because of the timing of asynchronous code. Without the `authChecked` state, the page would briefly flash its content before the auth check finished and the redirect happened. Understanding why that happened — and that I needed a loading state to hold the render until the check was done — required thinking carefully about how JavaScript handles async operations and when components re-render.

### Usage Location
- File: `src/pages/BackOffice.jsx`
- Line 10: `const [authChecked, setAuthChecked] = useState(false);`
- Line 20: `const { data: { session } } = await supabase.auth.getSession();`
- Line 69: `if (!authChecked) return null;`

---

## Concept 3: GitHub Pages Routing with React Router (MemoryRouter)

### Purpose in the Project
React Router handles navigation between pages inside the browser using JavaScript. GitHub Pages is a static file server — it only serves files that physically exist. When a visitor navigates directly to a URL like `armstrongvaloree.github.io/login`, GitHub Pages looks for a folder called `login` that does not exist and returns a 404 error.

Switching to `MemoryRouter` solves this by keeping all routing in memory inside the browser. The URL never changes from `armstrongvaloree.github.io` regardless of which page the visitor is on, so GitHub Pages always serves the same `index.html` file and React Router handles the rest.

### Why it was Challenging
This was challenging because the app worked perfectly in local development but broke on the live site. Understanding the difference between a local Vite development server (which handles all routes automatically) and a static file host (which only serves files that exist) required thinking about how web servers work at a deeper level. I also had to understand the tradeoffs — switching to `MemoryRouter` means visitors cannot bookmark individual pages or navigate directly to a route by typing a URL.

### Usage Location
- File: `src/App.jsx`
- Line 1: `import { MemoryRouter, Routes, Route } from "react-router-dom";`
- Line 12: `<MemoryRouter>`
- Line 23: `</MemoryRouter>`
