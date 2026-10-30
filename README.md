# Hamza Idrees · Portfolio

A responsive, multi-page portfolio presenting my backend engineering experience, professional projects, and technical skills.

[Portfolio](https://hamza-idrees.netlify.app/) · [GitHub](https://github.com/Hamza-Idrees) · [LinkedIn](https://www.linkedin.com/in/hamzaidrees2002) · [Email](mailto:hamzaidrees083@gmail.com)

## Overview

The portfolio covers my work on multi-tenant SaaS, real-time safety systems, clinical search, and booking automation. Project narratives distinguish product context from my own engineering contributions.

- **Home:** introduction, selected results, and project previews.
- **Projects:** product overviews, user workflows, engineering contributions, and technology choices for Obenan, Reddr, The Nanny Line, Rosa, and Lumen.
- **Experience:** responsibilities and outcomes at Global Software Consulting.
- **About:** education, technical toolkit, and university involvement.
- **Contact:** email, LinkedIn, GitHub, and downloadable CV.

## Implementation

Built with semantic HTML, CSS, and vanilla JavaScript. No framework, dependency installation, or build step is required.

- Responsive layouts with mobile navigation.
- Light and dark themes with a saved browser preference.
- Inter typography with system-font fallbacks; Inter loads through Google Fonts.
- Keyboard focus indicators, a skip link, and reduced-motion support.
- Downloadable PDF CV and direct links to individual projects.

## Run locally

From the repository root, start a static server:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [the local preview](http://127.0.0.1:4173/). Stop the server with `Ctrl+C`.

## Project structure

```text
index.html              Home
projects.html           Project narratives and engineering details
experience.html         Professional experience
about.html              Background and technical toolkit
contact.html            Contact links and CV download
style.css               Shared styles and responsive layouts
theme.js                Theme selection before the first paint
script.js               Navigation and theme-toggle interactions
Hamza_CV.pdf             Current downloadable CV
docs/GITHUB_PROFILE.md  Maintained copy of the GitHub profile README
```

## Updating content

Edit the relevant HTML page and use `style.css` for shared visual changes. Navigation and footer markup are present in each page, so update all five pages when changing shared links. Replace `Hamza_CV.pdf` when updating the downloadable CV.

Before deployment, check all pages at desktop and mobile widths, test both themes, and verify navigation, project anchors, and the CV download.

## Deployment

Serve the repository root with a static host. Keep the HTML files, stylesheet, scripts, and CV together so relative links continue to resolve. No build command is needed.

The portfolio link above points to the existing hosted site. Local changes appear there only after deployment.
