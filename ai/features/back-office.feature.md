# Back Office Feature

# 🤖 AI_FEATURE_Back-Office

---

## Feature Identity

- **Feature Name:** Back Office
- **Related Area:** Fullstack

---

## Feature Goal

Create a protected admin dashboard that allows the authenticated admin to view, read, and delete messages submitted through the contact form.

---

## Feature Scope

### In Scope
- Authentication check on page load — redirect to /login if not authenticated
- Display all messages from the Supabase messages table
- View a message in a modal
- Delete a message from the table and database
- Logout button that signs out and redirects to /login

### Out of Scope
- No pagination
- No search or filtering
- No message reply functionality
- No user management

---

## Sub-Requirements (Feature Breakdown)

- Route — Back Office is accessible at `/backoffice`
- Auth check — on mount, checks for active Supabase session; redirects to /login if none
- Messages table — fetches and displays all messages ordered by newest first
- Table columns — Name, Email, Message preview, Date, Actions
- View button — opens a modal showing full message details
- Delete button — deletes the message from Supabase and removes it from the UI
- Modal — displays full name, email, date, and message; includes a delete button
- Modal close — clicking outside the modal or the X button closes it
- Empty state — displays a message when no messages exist
- Loading state — displays a loading indicator while fetching messages
- Logout button — signs out via Supabase Auth and redirects to /login

---

## User Flow / Logic (High Level)

1. Admin navigates to /backoffice
2. Auth check runs — if no session, redirect to /login
3. If authenticated, messages are fetched from Supabase
4. Messages are displayed in a table
5. Admin clicks View to open the message modal
6. Admin clicks Delete to remove a message
7. Admin clicks Sign Out to log out and return to /login

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/pages/BackOffice.jsx` — main Back Office page component
- `src/pages/BackOffice.css` — styles for the Back Office page

### Backend / API
- Supabase messages table — SELECT and DELETE operations
- Supabase Auth — getSession and signOut operations

---

## Data Used or Modified

### Messages Table
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Used for delete operation |
| name | text | Displayed in table and modal |
| email | text | Displayed in table and modal |
| message | text | Previewed in table, full text in modal |
| created_at | timestamp | Displayed in table and modal |

---

## Tech Constraints (Feature-Level)

- Use Supabase JS client for all database and auth operations
- No external UI libraries
- Mobile-first CSS
- Do not use HTML form tags

---

## Acceptance Criteria

- [ ] Back Office loads at `/backoffice` without errors when authenticated
- [ ] Unauthenticated users are redirected to /login
- [ ] All messages are displayed in a table with correct columns
- [ ] View button opens a modal with full message details
- [ ] Delete button removes the message from the UI and database
- [ ] Modal can be closed by clicking outside or the X button
- [ ] Empty state is shown when no messages exist
- [ ] Loading state is shown while messages are being fetched
- [ ] Logout button signs out and redirects to /login
- [ ] Page is responsive on desktop and mobile
- [ ] No console errors

---

## Notes for the AI

- Keep the design clean and functional — this is an admin tool
- Use React useState and useEffect for state and data fetching
- Use React Router DOM useNavigate for redirects
- Do not add features beyond what is listed in this document
