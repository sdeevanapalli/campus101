## Campus101

A lightweight campus companion for BITS Pilani (Hyderabad, Goa, Pilani) built with React + Vite. It pairs a glossy landing page with campus-specific views for transport, outlets, maps, and quick contacts.

### Links
- GitHub: https://github.com/sdeevanapalli/campus101
- Live: https://campus101-sable.vercel.app

### Highlights
- Interactive campus cards with parallax hero and 3D hover effects.
- Leaflet-powered maps with location fly-to and rich descriptions.
- Campus-specific utilities: shuttle timings, auto numbers, outlets, and quick-dial shortcuts.
- Route-aware scroll restore, framer-motion transitions, and Tailwind-driven theming.
- Vercel Analytics + GA4 instrumentation out of the box.

### Quick Start
1. Install Node 18+.
2. `npm install`
3. `npm run dev`
4. Open the dev server link (typically `http://localhost:5173`).

Common scripts:
- `npm run dev` – local dev with HMR.
- `npm run build` – production build.
- `npm run preview` – preview the production build locally.
- `npm run lint` – lint with ESLint.

### Configuration
- Analytics: GA4 Measurement ID is set in `src/App.tsx`. Swap with your own if you fork.
- Router: All routes are declared in `src/App.tsx` and use `BrowserRouter` (see `src/main.tsx`).
- Styling: Tailwind + custom components; global styles live in `src/index.css` and component-level classes.

### Project Structure (short version)
- `src/App.tsx` — routing + analytics boot.
- `src/main.tsx` — React root + router wrapper.
- `src/components/LandingPage.tsx` — hero, campus cards, footer.
- `src/components/CampusPage.tsx` — shared campus view (map, transport, outlets, quick actions).
- `src/pages/{Hyderabad|Goa|Pilani}.tsx` — campus-specific shells wiring data into `CampusPage`.
- `src/data/campusData.ts` — all campus metadata (locations, outlets, contacts, hero images, stats).
- `src/components/ui/*` — 3D card + hero parallax primitives.

### Features & Capabilities
- Campus switcher landing with CTA links to each campus page.
- Leaflet maps per campus with fly-to interactions and category-aware markers.
- Quick-access tiles for transport, outlets, and maps; inline phone links for cabs/auto/outlets.
- Searchable outlets (Hyderabad/Goa today; Pilani marked as “In Progress”).
- Motion polish via framer-motion and glassmorphism-inspired cards.

### Security, Privacy, and Use
- This codebase is not open-source; please do not copy or redistribute the code. Feel free to read it and propose changes.
- GA4/Vercel Analytics are enabled; swap or remove IDs if you do not want telemetry.
- Secrets: none stored here; keep any keys in env vars if you add new integrations.

### Contributing
- PRs are welcome. Use Conventional Commits (e.g., `feat: add goa cab cards`, `fix: handle leaflet icon paths`).
- If you cannot open a PR, send a patch to f20230414@hyderabad.bits-pilani.ac.in and f20231210@goa.bits-pilani.ac.in
- Please keep new data additions consistent with `src/data/campusData.ts` shapes and Tailwind class conventions.

### Deployment
- Built with Vite; `npm run build` outputs to `dist/`. The project is Vercel-ready (`vercel.json` provided).
- Ensure env config (if you change analytics IDs) is set in your hosting platform.

### Maintainers
- [Shriniketh Deevanapalli](https://sdeevanapalli.dev) — f20230414@hyderabad.bits-pilani.ac.in
- Kushagra Singh - f20231210@goa.bits-pilani.ac.in

Enjoy the build, and ping us if something feels off.
