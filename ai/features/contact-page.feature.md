# Contact Page Feature

# 🤖 AI_FEATURE_Contact-Page

---

## Feature Identity

- **Feature Name:** Contact Page
- **Related Area:** Fullstack

---

## Feature Goal

Create a contact page with a form that allows visitors to send messages directly to Valoree Armstrong. Messages are stored in the Supabase database and can be managed through the Back Office.

---

## Feature Scope

### In Scope
- Contact form with name, email, and message fields
- Client-side validation before submission
- Supabase INSERT to the messages table on submission
- Success feedback on successful submission
- Error feedback on failed submission
- Form clears after successful submission
- At least 2 AI-generated images relevant to the page content
- Accessible alt text on all images
- Documentation of the AI tool used to generate images

### Out of Scope
- No email notifications
- No CAPTCHA or spam protection
- No authentication required to submit
- No file attachments

---

## Sub-Requirements (Feature Breakdown)

- Route — Contact page is accessible at `/contact`
- Name field — text input, required
- Email field — email input, required
- Message field — textarea, required
- Validation — all fields must be filled before submission is attempted
- Supabase INSERT — on submit, data is inserted into the messages table
- Success message — green feedback message shown on successful submission
- Error message — red feedback message shown on failed submission
- Form reset — form fields clear after successful submission
- Secondary section — additional content section with contact links below the form
- AI-generated images — at least 2 images with alt text
- AI tool documentation — the tool used is noted in a comment or the README

---

## User Flow / Logic (High Level)

1. Visitor clicks Contact in the navigation
2. The Contact page loads at `/contact`
3. Visitor fills in name, email, and message
4. Visitor clicks Send Message
5. If any field is empty, an error message appears
6. If all fields are filled, the data is inserted into Supabase
7. On success, a green message appears and the form clears
8. On failure, a red error message appears

---

## Interfaces (Pages, Endpoints, Screens)

### Frontend
- `src/pages/Contact.jsx` — main Contact page component
- `src/pages/Contact.css` — styles for the Contact page
- `src/assets/` — AI-generated images stored here

### Backend / API
- Supabase `messages` table — INSERT operation
- RLS policy allows public insert

---

## Data Used or Modified

### Messages Table
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Auto-generated |
| name | text | From form input |
| email | text | From form input |
| message | text | From form input |
| created_at | timestamp | Auto-generated |

---

## Tech Constraints (Feature-Level)

- Use Fetch API only — no Axios
- Use Supabase JS client for database operations
- No external form libraries
- All images must have descriptive alt text
- Mobile-first CSS

---

## Acceptance Criteria

- [ ] Contact page loads at `/contact` without errors
- [ ] Form has name, email, and message fields
- [ ] Submitting with empty fields shows a validation error
- [ ] Submitting with valid data inserts a record into Supabase
- [ ] Success message appears after successful submission
- [ ] Error message appears if submission fails
- [ ] Form clears after successful submission
- [ ] At least 2 AI-generated images are present with alt text
- [ ] Page is responsive on desktop and mobile
- [ ] No console errors

---

## Notes for the AI

- Keep the design consistent with the dark navy and cyan color scheme
- Use React useState for form state management
- Do not use HTML form tags — use onClick handlers instead
- Do not add features beyond what is listed in this document

## AI Tool Used
- Images generated using Microsoft Designer (designer.microsoft.com) and NanoBanana
- Images: contact-hero.png, contact-secondary.png
