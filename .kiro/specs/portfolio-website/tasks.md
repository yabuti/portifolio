# Implementation Plan: Portfolio Website

## Overview

Build a single-page React 18 + Vite + Tailwind CSS portfolio site with smooth scroll navigation, light/dark theme toggle, EmailJS contact form, and responsive layout.

## Tasks

- [x] 1. Initialize project and configure tooling
  - Scaffold Vite + React project: `npm create vite@latest portfolio -- --template react`
  - Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `emailjs-com`
  - Configure `tailwind.config.js` with `darkMode: 'class'` and dark blue color palette
  - Set up global CSS with base styles and font imports
  - Copy assets into `public/` (resume PDF, profile photo, project screenshots)
  - _Requirements: 1.5, 10.1, 11.1_

- [x] 2. Implement theme and active-section hooks
  - [x] 2.1 Create `useTheme` hook in `src/hooks/useTheme.js`
    - Read OS preference via `prefers-color-scheme` media query on first load
    - Persist selection to `localStorage`
    - Toggle `dark` class on `<html>` element
    - _Requirements: 9.2, 9.3, 9.4_
  - [ ]* 2.2 Write unit tests for `useTheme`
    - Test OS preference detection, localStorage persistence, and class toggling
    - _Requirements: 9.2, 9.3, 9.4_
  - [x] 2.3 Create `useActiveSection` hook in `src/hooks/useActiveSection.js`
    - Use `IntersectionObserver` to track which section is in view
    - Return the id of the currently visible section
    - _Requirements: 8.3_
  - [ ]* 2.4 Write unit tests for `useActiveSection`
    - Test that the correct section id is returned as sections enter/leave the viewport
    - _Requirements: 8.3_

- [x] 3. Create data files
  - [x] 3.1 Create `src/data/projects.js`
    - Export array of project objects: `{ id, title, description, platform, thumbnail, techStack, liveUrl, repoUrl }`
    - Include Black Diamond project with screenshot asset reference
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  - [x] 3.2 Create `src/data/skills.js`
    - Export skills grouped by category: Languages, Frameworks, Mobile, Tools
    - Each skill: `{ name, proficiency? }`
    - _Requirements: 4.1, 4.2_

- [x] 4. Build Navbar component
  - [x] 4.1 Create `src/components/Navbar.jsx`
    - Render nav links for Hero, About, Projects, Skills, Contact sections
    - Highlight active link using `useActiveSection`
    - Include `Theme_Toggle` button that calls `useTheme` toggle
    - Implement hamburger menu for viewports < 768px
    - _Requirements: 8.1, 8.3, 9.1, 10.2_
  - [ ]* 4.2 Write unit tests for Navbar
    - Test active link highlighting, theme toggle click, and mobile menu open/close
    - _Requirements: 8.1, 8.3, 9.1, 10.2_

- [x] 5. Build Hero section
  - [x] 5.1 Create `src/components/Hero.jsx`
    - Display Owner's name and professional tagline
    - Render "View Projects" CTA that smooth-scrolls to `#projects`
    - Render "Download Resume" CTA as `<a href="/resume.pdf" download>`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 5.1, 5.2_
  - [ ]* 5.2 Write unit tests for Hero
    - Test that name, tagline, and both CTA buttons render
    - Test that resume link has `download` attribute
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 5.2_

- [x] 6. Build About section
  - Create `src/components/About.jsx`
  - Display profile photo with descriptive `alt` text
  - Render biography paragraph and career highlights
  - _Requirements: 2.1, 2.3, 11.2_

- [x] 7. Build Skills section
  - Create `src/components/Skills.jsx`
  - Iterate over `skills.js` data, render skills grouped by category
  - Show optional proficiency indicator per skill
  - _Requirements: 4.1, 4.2_

- [x] 8. Build Projects section and ProjectCard
  - [x] 8.1 Create `src/components/ProjectCard.jsx`
    - Accept project object as prop
    - Render thumbnail, title, platform tag, short description
    - Conditionally render live demo link only when `liveUrl` is present
    - Always render repo link
    - _Requirements: 3.1, 3.3, 3.4_
  - [ ]* 8.2 Write unit tests for ProjectCard
    - Test that live demo link is omitted when `liveUrl` is absent
    - Test that repo link always renders
    - _Requirements: 3.3, 3.4_
  - [x] 8.3 Create `src/components/Projects.jsx`
    - Import `projects.js` data and render a responsive grid of `ProjectCard` components
    - _Requirements: 3.1, 3.2_

- [ ] 9. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Build Contact section
  - [x] 10.1 Create `src/components/Contact.jsx`
    - Render form with name, email, and message fields
    - Implement inline validation: required field errors and email format check
    - On valid submit, call `emailjs.send()` with form data
    - Show success confirmation on send, error message on failure
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_
  - [ ]* 10.2 Write unit tests for Contact form validation
    - Test empty field error, invalid email error, success state, and failure state
    - _Requirements: 7.3, 7.4, 7.5, 7.6_

- [x] 11. Build Footer component
  - Create `src/components/Footer.jsx`
  - Render GitHub and LinkedIn links that open in a new tab (`target="_blank" rel="noopener noreferrer"`)
  - Render any additional social/professional links
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 12. Wire everything together in App.jsx
  - Import and compose all section components in order: Navbar, Hero, About, Projects, Skills, Contact, Footer
  - Apply `useTheme` at app root to manage `dark` class on `<html>`
  - Assign `id` attributes to each section for scroll targeting and `IntersectionObserver`
  - Ensure smooth scroll behavior via `scroll-behavior: smooth` in global CSS
  - _Requirements: 8.1, 8.2, 9.2, 10.1_

- [x] 13. Accessibility and responsive polish
  - Add `alt` text to all images
  - Ensure all interactive elements are keyboard-focusable with visible focus rings
  - Verify color contrast meets WCAG 2.1 AA in both light and dark themes
  - Confirm tap targets are at least 44×44px on mobile
  - _Requirements: 10.3, 11.2, 11.3, 11.4_

- [ ] 14. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Resume PDF should be placed at `public/resume.pdf` so Vite serves it at `/resume.pdf`
- EmailJS credentials (service ID, template ID, public key) should be stored in `.env` as `VITE_EMAILJS_*` variables
