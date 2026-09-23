# mattiliikala.com

Personal portfolio site — built with React, TypeScript and Vite.

## Stack

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vitejs.dev/) — dev server and build
- [React Router](https://reactrouter.com/) — routing (`/` and `/:slug`)
- [Framer Motion](https://www.framer.com/motion/) — scroll and entrance animation
- CSS Modules — component styling

## Getting started

```bash
npm install
npm run dev       # starts the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview    # serves the production build locally
npm run lint        # eslint
```

## Project structure

```
src/
  components/   Reusable UI — Hero, About, Projects, ProjectCard, Footer,
                PhoneFrame (mobile-screenshot frame), MdsLibraryMap (diagram)
  pages/        Route-level pages — ProjectPage.tsx is the shared template
                every project detail page (/:slug) renders from
  data/         Content — projects.ts holds every project as data
  App.tsx       Routes: "/" (home) and "/:slug" (project detail), wrapped in <main>
  main.tsx      App entry — wraps the tree in MotionConfig (reduced-motion support)
public/assets/  Images and icons referenced from src/data/projects.ts
```

## Content model

Projects are data, not hand-built pages. Add or edit one in `src/data/projects.ts`:

- `projects` — client/employer work, shown in the "Projects" grid on the home page
- `ownProjects` — personal projects, shown in the "Own projects" grid
- both are combined into `allProjects`, which the project detail page uses to resolve `/:slug`

A `ProjectData` needs at minimum a `slug`, `title`, `year`, `cardImage` and `sections`.
A `ProjectSection` can be:

- plain text
- text + an image (`imageLayout: 'left' | 'right'`, sized with `imageWidth`/`imageHeight`)
- a `phoneImages` gallery — mobile screenshots, each wrapped in the `PhoneFrame` component
- the `diagram: 'mds-library-map'` animated diagram

**Always fill in `imageAlt` / `heroImageAlt` / `phoneImageAlts`** for any image that isn't purely
decorative — there's no fallback, and an image left without one renders with `alt=""`.

## Accessibility

Built to WCAG 2.2 AA: semantic headings, a `<main>` landmark, per-route page titles
(`document.title` set in `ProjectPage.tsx`), `prefers-reduced-motion` support via `MotionConfig`
in `main.tsx`, and real alt text on every informative image. When adding content — especially new
images or animated sections — re-run an automated accessibility scan (e.g. an axe-core-based tool)
against the changed page before shipping.

## Notes

- Fonts (Parkinsans, Ubuntu) are loaded from Google Fonts in `index.html`.
- No test suite yet.
