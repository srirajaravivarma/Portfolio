# AI Instructions for This Portfolio

Use this file as project context when asking an AI assistant to customize or improve this portfolio. The site is a React + Vite project. Its content is designed to be edited in one place: `src/portfolio.js`.

## Copy and use this prompt

In Codex, open this repository and send:

> Read `AI_INSTRUCTIONS.md`, `README.md`, and `src/portfolio.js`. Help me update this portfolio. Ask me only for the information needed to complete my request. If I provide a resume, read the whole file and use it as the source for relevant professional information. Do not invent or infer facts about me, my work, employers, projects, dates, tools, or results. Ask me about any missing, unreadable, ambiguous, or conflicting information before filling it in. Put portfolio text and profile data in `src/portfolio.js`. Keep the existing layout and visual design unless I ask for design changes. Make the requested changes, then summarize the files changed and tell me how to preview the result locally. Do not commit, push, or deploy unless I explicitly ask.

For ChatGPT or another assistant without access to your workspace, attach this file, `src/portfolio.js`, and the resume. If the request involves code or layout, also attach the relevant source file, usually `src/main.jsx` or `src/styles.css`.

## Project editing rules for the AI

1. **Use `src/portfolio.js` for content.** It contains the name, profession, specialties, links, portrait, headings, descriptions, expertise tiles, projects, experience, career metrics, and contact copy. Prefer changing this file instead of adding portfolio text to JSX.
2. **Do not make up personal facts.** Use only details the portfolio owner supplies. If requested information is missing, ask the portfolio owner for it. Do not assume or invent it.
3. **Preserve the template.** Keep the existing React + Vite architecture, responsive layout, interactions, and color system unless the owner requests a change.
4. **Keep JavaScript valid.** Preserve object keys, quotes, commas, and array/object structure in `src/portfolio.js`. When adding a project, role, metric, or expertise item, follow the shape of its neighboring entries.
5. **Handle private information carefully.** This repository is public. Do not add home addresses, birth dates, personal identifiers, confidential employer information, private client data, or other details the owner has not explicitly chosen to publish.
6. **Treat links and images as public.** Use only contact links and images the owner wants public and has permission to publish. Files in `public/` are served from the site root, so `public/profile.jpg` is referenced as `/profile.jpg`.
7. **Do not publish changes automatically.** Editing local files does not authorize a Git commit, push to GitHub, or deployment to Vercel. Wait for a clear request before taking those actions.
8. **Keep dependencies unchanged when possible.** A content-only edit should not need a new package or a change to the build setup.
9. **Report the result clearly.** Say which files changed, what content was updated, and how the owner can run the site locally. Mention any details still needed from the owner.

## If the user provides a resume

Treat the resume as the source of truth for the professional information to add to the portfolio. Read the entire document, including all pages and any readable tables, headers, and footers, before editing. Extract every relevant professional fact that maps to the portfolio fields and update the matching values in `src/portfolio.js`. When asked to populate the portfolio from a resume, review every portfolio section and update all fields the resume supports.

- Preserve the meaning, dates, job titles, organization names, tools, qualifications, project details, and results as written. You may make wording clearer, but do not strengthen claims, calculate missing results, or turn responsibilities into achievements unless the resume supports that wording.
- Do not fill gaps with assumptions. If a portfolio field has no information in the resume, if any text or page cannot be read, or if details conflict, do not guess. Ask the user concise questions identifying the exact missing or unclear fields. Leave those fields unchanged or as placeholders until the user answers.
- If a resume includes sensitive details that are not normally needed on a public portfolio—such as a home address, date of birth, government ID, or private client data—do not copy them into the site. Ask before publishing personal contact details beyond the configured email and LinkedIn links.
- If the file format cannot be read, tell the user which part could not be parsed and ask for a readable PDF, document, or pasted text. Do not pretend to have reviewed unreadable content.
- Before finishing, summarize which resume sections were used, which portfolio fields were updated, and list any questions that remain. Do not commit, push, or deploy unless the user explicitly asks.

## Information map

All of these fields are in `src/portfolio.js`:

- `site`: browser title suffix and description, navigation labels/anchors, and shared button/accessibility labels.
- `person`: name, role, specialties, portrait caption, email, LinkedIn URL, and portrait path/alt text.
- `hero`: emphasized heading, introduction, portrait label, and action button labels. The main name comes from `person.name`.
- `about`: section label, two-line heading, and introduction paragraphs.
- `expertise`: heading, tile action label, and each tile's title, summary, symbol, and expanded experience detail.
- `work`: section heading and project cards, including each project's result metrics.
- `experience`: role dates, job titles, organizations, locations, and achievement bullets.
- `metrics`: large career figures and their captions.
- `contact`: contact heading and invitation copy. The actual email and LinkedIn destination come from `person` above.

The page title is generated from `person.name` plus `site.titleSuffix`; the meta description comes from `site.description`. The logo initials are generated from the first letters of the name.

## Typical requests

You can ask an AI assistant to:

- “Help me fill in `src/portfolio.js`. Ask me for the missing information one section at a time.”
- “Update the portfolio with these biography and work details. Do not change the design.”
- “Add this project to the Work section using the existing project format.”
- “Replace the portrait with `public/profile.jpg` and update its alternative text.”
- “Review the public-facing copy for spelling and clarity without changing any facts.”
- “Change the page palette to [describe your preferred colors], while keeping the existing content.”

## Preview locally

From the project folder, run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173/`. Stop the server with `Ctrl+C`.

For a production build, run `npm run build`. The generated site is written to `dist/`.



