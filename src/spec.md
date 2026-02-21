# Specification

## Summary
**Goal:** Build a responsive marketing website for “Jo enterprises” with core business sections and a working contact inquiry flow that stores submissions in the backend.

**Planned changes:**
- Create a responsive site with top navigation linking to Home (hero + value proposition), About, Services, and Contact (pages or anchored sections).
- Apply a consistent professional visual theme (colors, typography, spacing, component styles) across all sections.
- Add a Contact form (name, email, message) with client-side validation, success/error states, and form reset on success.
- Implement backend storage for contact inquiries with endpoints to create an inquiry and list inquiries, persisting via stable storage across upgrades.
- Add an accessible footer (business name + short tagline) and ensure keyboard navigation, visible focus states, readable headings, and sufficient contrast.
- Add and render static image assets (logo + hero/banner) from `frontend/public/assets/generated` in the header and Home hero.

**User-visible outcome:** Visitors can browse Jo enterprises’ Home/About/Services/Contact content on any device and submit a validated contact inquiry that is saved by the backend, with a consistent, accessible design and branded logo/hero visuals.
