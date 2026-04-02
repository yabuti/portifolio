# Requirements Document

## Introduction

A personal portfolio website for Yeabsera Getachew, a Full Stack Developer, Android Developer, 3D Developer, and Problem Solver based in Addis Abeba. The site serves as a central hub for potential employers to learn about Yeabsera, view his projects, download his resume, and make contact. It must use a dark blue primary color palette, support both light and dark themes with a toggle, be visually appealing, fast-loading, and accessible across devices.

## Glossary

- **Portfolio_Site**: The complete portfolio web application
- **Visitor**: Any person browsing the portfolio website
- **Owner**: Yeabsera Getachew, the individual whose work and information is displayed
- **Project**: A work sample or case study displayed on the site
- **Contact_Form**: The form used by Visitors to send messages to the Owner
- **Mailer**: The backend service responsible for sending contact form submissions to the Owner
- **Theme_Toggle**: The UI control that switches between light and dark color schemes
- **Resume**: The Owner's downloadable PDF curriculum vitae (Professional CV Resume.pdf)

## Requirements

### Requirement 1: Hero / Landing Section

**User Story:** As a Visitor, I want to see a clear introduction when I land on the site, so that I immediately understand who the Owner is and what they do.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display "Yeabsera Getachew" as the Owner's name prominently on the landing section
2. THE Portfolio_Site SHALL display "Full Stack Developer | Android Developer | 3D Developer | Problem Solver" as the professional tagline beneath the Owner's name
3. THE Portfolio_Site SHALL display the Owner's profile photo (photo_5904759161130519710_y.jpg) in the hero section
4. THE Portfolio_Site SHALL display a call-to-action button that navigates the Visitor to the Projects section
5. THE Portfolio_Site SHALL display a secondary call-to-action button that triggers download of the Resume
6. WHEN a Visitor loads the page, THE Portfolio_Site SHALL render the hero section within 2 seconds on a standard broadband connection

---

### Requirement 2: About Section

**User Story:** As a Visitor, I want to read about the Owner's background and skills, so that I can assess whether they are a good fit for my needs.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display a biography paragraph describing Yeabsera's professional background in full stack web, Android, and 3D development
2. THE Portfolio_Site SHALL display a list of the Owner's technical skills
3. THE Portfolio_Site SHALL display the Owner's location as Addis Abeba

---

### Requirement 3: Projects Section

**User Story:** As a Visitor, I want to browse the Owner's projects, so that I can evaluate the quality and range of their work.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display the following projects: Pneumonia Detection AI, Sign Language Detection AI, Fleet Management System, and Black Diamond Car Company website and app
2. THE Portfolio_Site SHALL display each Project with a title, thumbnail image, platform tag (Web, Android, or AI), and short description
3. WHEN a Visitor clicks on a Project, THE Portfolio_Site SHALL display a detail view with a full description, technologies used, and links to the live site or source repository
4. THE Portfolio_Site SHALL display the GitHub link (https://github.com/yabuti/sign_language) for the Sign Language Detection AI project
5. THE Portfolio_Site SHALL use Screenshot_29-3-2026_12635_blackdiamondcar.com.jpeg as the thumbnail for the Black Diamond Car Company project
6. IF a Project has no live demo URL, THEN THE Portfolio_Site SHALL omit the live demo link and display only the source code link

---

### Requirement 4: Skills / Technologies Section

**User Story:** As a Visitor, I want to see a summary of the Owner's technical skills, so that I can quickly determine technology alignment.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display skills grouped by category (e.g., Frontend, Mobile, Backend, Tools)
2. THE Portfolio_Site SHALL display React and Python under their respective categories
3. THE Portfolio_Site SHALL display Flutter under the Mobile category
4. THE Portfolio_Site SHALL display 3D Development as a soft skill

---

### Requirement 5: Resume Download

**User Story:** As a Visitor, I want to download the Owner's resume, so that I can review their qualifications offline or share them with a hiring team.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL provide a clearly labeled "Download CV" button that downloads "Professional CV Resume.pdf"
2. WHEN a Visitor clicks the resume download button, THE Portfolio_Site SHALL initiate a file download without navigating away from the page
3. IF the Resume file is unavailable, THEN THE Portfolio_Site SHALL display an error message informing the Visitor that the resume is temporarily unavailable

---

### Requirement 6: Social / Professional Links

**User Story:** As a Visitor, I want to see links to the Owner's professional profiles, so that I can verify their work history and open-source contributions.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display a GitHub icon button linking to https://github.com/yabuti
2. THE Portfolio_Site SHALL display a LinkedIn icon button as a placeholder (link to be configured later)
3. WHEN a Visitor clicks a social link, THE Portfolio_Site SHALL open the linked profile in a new browser tab

---

### Requirement 7: Contact Section

**User Story:** As a Visitor, I want to contact the Owner directly from the site, so that I can reach out easily.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display the Owner's contact details: email [email], phone [phone], and location Addis Abeba
2. THE Portfolio_Site SHALL display a contact form with fields for the Visitor's name, email address, and message
3. WHEN a Visitor submits the contact form with valid inputs, THE Mailer SHALL send the message content to the Owner's email address
4. WHEN a Visitor submits the contact form with valid inputs, THE Portfolio_Site SHALL display a confirmation message indicating the message was sent successfully
5. IF a Visitor submits the contact form with an empty required field, THEN THE Portfolio_Site SHALL display an inline validation error identifying the missing field
6. IF a Visitor submits the contact form with an invalid email address format, THEN THE Portfolio_Site SHALL display an inline validation error on the email field
7. IF the Mailer fails to deliver the message, THEN THE Portfolio_Site SHALL display an error message instructing the Visitor to try again

---

### Requirement 8: Navigation

**User Story:** As a Visitor, I want clear navigation, so that I can move between sections of the site easily.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL display a navigation bar with links to each major section (Hero, About, Projects, Skills, Contact)
2. WHEN a Visitor clicks a navigation link, THE Portfolio_Site SHALL smoothly scroll to the corresponding section
3. WHILE a Visitor scrolls the page, THE Portfolio_Site SHALL highlight the navigation link corresponding to the currently visible section

---

### Requirement 9: Light / Dark Theme

**User Story:** As a Visitor, I want to switch between light and dark themes, so that I can view the site comfortably in different lighting conditions.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use dark blue as the primary color in both light and dark themes
2. THE Portfolio_Site SHALL display a Theme_Toggle button in the navigation bar
3. WHEN a Visitor activates the Theme_Toggle, THE Portfolio_Site SHALL switch the color scheme between light and dark modes
4. WHEN a Visitor activates the Theme_Toggle, THE Portfolio_Site SHALL persist the selected theme preference in local storage
5. WHEN a Visitor loads the page for the first time with no stored preference, THE Portfolio_Site SHALL apply the theme that matches the Visitor's operating system color scheme preference

---

### Requirement 10: Responsive Design

**User Story:** As a Visitor using a mobile device, I want the site to display correctly on my screen, so that I can browse the portfolio comfortably on any device.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render correctly on viewport widths from 320px to 2560px
2. WHEN the viewport width is below 768px, THE Portfolio_Site SHALL display a collapsed navigation menu accessible via a toggle button
3. THE Portfolio_Site SHALL maintain readable font sizes and adequate tap target sizes on mobile viewports

---

### Requirement 11: Performance and Accessibility

**User Story:** As a Visitor, I want the site to load quickly and be usable with assistive technologies, so that I have a good experience regardless of my connection speed or accessibility needs.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL achieve a Lighthouse performance score of 90 or above on desktop
2. THE Portfolio_Site SHALL provide descriptive alt text for all images
3. THE Portfolio_Site SHALL be navigable using keyboard-only input
4. THE Portfolio_Site SHALL use sufficient color contrast ratios for all text elements as defined by WCAG 2.1 AA guidelines
