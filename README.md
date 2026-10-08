# Portfolio Template

A responsive personal portfolio built with React and Vite. Edit **one content file**—[`src/portfolio.js`](src/portfolio.js)—to customize the person, links, section copy, expertise, projects, experience, metrics, and contact details shown across the page. The React layout and visual design live separately and usually do not need to be edited.

## New to coding? We have you covered.

You do not need to understand every file to make this portfolio your own. Open the project in an IDE with an AI coding assistant and share [`AI_INSTRUCTIONS.md`](AI_INSTRUCTIONS.md) with it. The instructions guide the AI to ask for the details it needs, update your portfolio, and avoid making up facts. Most personal information can be entered in one place: [`src/portfolio.js`](src/portfolio.js).

Using ChatGPT or another AI chat without access to your IDE? Attach `AI_INSTRUCTIONS.md` and `src/portfolio.js` to the chat. If you want to build your portfolio from a resume, attach that too.

## Quick start

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Where to add your information

Open `src/portfolio.js`. It exports one `portfolio` object. Replace the sample values with your own. Keep the object keys and JavaScript syntax intact; edit the text between the quotes and the values in the arrays.

### Site and navigation

`portfolio.site` controls browser metadata and shared navigation:

- `titleSuffix`: appended after your name in the browser tab. The page title is generated as `Your Name — Professional Portfolio`.
- `description`: short page summary used as the search/browser description.
- `navigation`: the desktop and mobile menu links. Each item has a `label` and an `href`.
- `mobileMenuLabel`, `talkButtonLabel`, `backToTopLabel`, and `backToTopText`: accessible labels and button text.

If you change a navigation `href`, make sure it matches the corresponding section ID in the page (for example, `#about`).

### Person and links

`portfolio.person` is the core profile information:

- `name`: appears in the hero heading, generated logo initials, browser title, and copyright footer.
- `role`: appears above the hero heading.
- `specialties`: an array used in the hero line and the scrolling specialty strip. Add, remove, or reorder entries as needed.
- `focusLine`: the short caption over the portrait.
- `email`: used by the “Let’s talk” button and the contact link. Use an address you want to publish. Set it to an empty string to hide email links and the talk button.
- `linkedinUrl`: used by both LinkedIn links. Set this to an empty string to hide both LinkedIn links.
- `portrait.src` and `portrait.alt`: the image path and descriptive alternative text.

### Hero

`portfolio.hero` controls the hero introduction and button text:

- `emphasis`: the emphasized second line under your name.
- `introduction`: one or two sentences about your work.
- `focusLabel`: the small label shown over your portrait.
- `workButton` and `linkedinButton`: action labels.

The name itself comes from `portfolio.person.name`, so you only need to enter it once.

### About

`portfolio.about` contains the section number and label, the two heading lines, the lead paragraph, and the supporting paragraph. Keep `heading` as a two-item array: the first item is the first line and the second item is the emphasized line.

### Expertise

`portfolio.expertise` controls the section heading and the expertise tiles. Each item in `items` has:

- `title`: tile heading.
- `summary`: short text visible on the tile.
- `symbol`: a single character or short symbol displayed as its visual marker.
- `experience`: the detail revealed when the tile is hovered or opened.

Add or remove whole objects in `items` to change the number of tiles. `viewExperienceLabel` controls the expand button text.

### Work and projects

`portfolio.work` contains the section heading and a `projects` array. Each project has a `number`, `title`, `tag`, `description`, and a `metrics` array. Each project metric has a `value` and `label`. Replace all sample values with outcomes you can accurately share. Add or remove project objects to change the cards shown.

### Experience

`portfolio.experience.entries` is an array of roles. Each entry has:

- `period`: dates or date range.
- `role`: job title.
- `company`: organization and optional location.
- `bullets`: an array of responsibilities or achievements.

Add entries for more roles, or remove the sample entries you do not need.

### Career metrics and contact

- `portfolio.metrics.items` controls the four large figures and their captions. Each item has `value` and `label`; add or remove items as needed.
- `portfolio.contact` controls the section number/label, heading, emphasized word or phrase, and invitation text. The email and LinkedIn destination are read from `portfolio.person`, so update them once there.

## Add your portrait

1. Copy an image you have permission to publish into the `public` folder, for example `public/profile.jpg`.
2. In `src/portfolio.js`, set `person.portrait.src` to `/profile.jpg` (files in `public` use a leading `/` in the URL).
3. Write a useful `person.portrait.alt`, such as `Portrait of Jane Doe`.
4. Remove `public/profile-placeholder.svg` if you no longer need the placeholder.

## Styling and layout

Content belongs in `src/portfolio.js`. Visual styles, colors, section backgrounds, responsive layout, and motion effects are in `src/styles.css`. Edit that file only when you want to change the design. Some section background images are loaded from Unsplash; replace them with images you have permission to use or remove those image layers.

The page title and description are applied from `src/portfolio.js` when the React app starts. `index.html` also contains generic fallback metadata for the initial HTML document.

## Build and preview

```bash
npm run build
npm run preview
```

## Deploy with Vercel

Import the GitHub repository as a Vite project. Use `npm run build` as the build command and `dist` as the output directory. No environment variables are required by the template.

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.



