# Design Document

## Overview

A single-page React application (SPA) for Yeabsera Getachew's personal portfolio. All content lives on one page with smooth-scroll navigation between sections. The app uses a dark blue primary palette with a light/dark theme toggle persisted in localStorage.

## Tech Stack

- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Icons**: Lucide React
- **Contact form**: EmailJS (client-side email sending, no backend needed)
- **Routing**: None (single page, anchor-based navigation)
- **Deployment**: Static hosting (Netlify / GitHub Pages)

## Color System

```
Primary:       #1E3A5F  (dark blue)
Primary Light: #2E5090
Accent:        #4A90D9  (bright blue)

-- Light theme --
bg:            #F8FAFC
surface:       #FFFFFF
text:          #1A202C
text-muted:    #4A5568

-- Dark theme --
bg:            #0D1B2A
surface:       #1A2E45
text:          #E2E8F0
text-muted:    #94A3B8
```

## Project Structure

```
src/
  components/
    Navbar.jsx          # sticky nav with theme toggle + mobile hamburger
    Hero.jsx            # name, tagline, photo, CTA buttons
    About.jsx           # bio + location
    Projects.jsx        # project grid
    ProjectCard.jsx     # individual project card
    Skills.jsx          # skills grouped by category
    Contact.jsx         # contact info + contact form
    Footer.jsx          # social links + copyright
  hooks/
    useTheme.js         # manages light/dark theme + localStorage
    useActiveSection.js # IntersectionObserver for active nav link
  data/
    projects.js         # project data array
    skills.js           # skills data array
  assets/
    photo_5904759161130519710_y.jpg
    Screenshot_29-3-2026_12635_blackdiamondcar.com.jpeg
  App.jsx
  main.jsx
  index.css             # Tailwind directives + CSS variables
public/
  Professional CV Resume.pdf
```

## Component Design

### Navbar
- Fixed at top, blurs background on scroll
- Links: Home, About, Projects, Skills, Contact
- Right side: GitHub icon, LinkedIn icon, theme toggle button
- Mobile: hamburger menu collapses into a dropdown

### Hero
- Two-column layout (desktop): text left, photo right
- Photo displayed in a circular frame with a dark blue border glow
- Tagline uses a typing animation cycling through roles
- Buttons: "View Projects" (scrolls to #projects) + "Download CV" (downloads PDF)

### About
- Short bio paragraph
- Location badge (Addis Abeba)

### Projects
- Responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Each card: thumbnail, platform tag badge, title, short description, links
- Platform tags: Web | Android | AI
- Projects data:

| Title | Platform | GitHub | Live |
|---|---|---|---|
| Pneumonia Detection AI | AI | — | — |
| Sign Language Detection AI | AI | github.com/yabuti/sign_language | — |
| Fleet Management System | Web | — | — |
| Black Diamond Car Company | Web + Android | — | blackdiamondcar.com |

### Skills
- Grouped by category with icon/badge per skill:
  - Frontend: React
  - Backend: Python
  - Mobile: Flutter
  - Soft Skills: 3D Development

### Contact
- Left column: email, phone, location with icons
- Right column: contact form (name, email, message) using EmailJS
- Form validation: required fields + email format check
- Success/error toast notifications

### Footer
- GitHub (https://github.com/yabuti) and LinkedIn (placeholder) icon links
- Copyright line

## Theme System

```js
// useTheme.js
const [theme, setTheme] = useState(
  localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)
// applies 'dark' class to <html> element
// Tailwind darkMode: 'class' strategy
```

## Active Section Tracking

```js
// useActiveSection.js
// IntersectionObserver watches each section
// returns the id of the section currently most visible
// Navbar highlights the matching link
```

## Correctness Properties

1. Theme toggle always results in exactly one of {light, dark} being active — never both, never neither
2. The active nav link always corresponds to the section with the highest intersection ratio on screen
3. Contact form never submits if any required field is empty or email format is invalid
4. Resume download always targets "Professional CV Resume.pdf" and never navigates away from the page
5. All project cards with no live demo URL must not render a live demo link element
6. Social link buttons always open in a new tab (target="_blank" with rel="noopener noreferrer")
