## Campus101

A lightweight, production-ready campus companion for BITS Pilani (Hyderabad, Goa, Pilani) built with React + Vite. It pairs a glossy landing page with campus-specific views for transport, outlets, maps, and quick contacts.

### Links
- GitHub: https://github.com/sdeevanapalli/campus101
- Live: https://campus101.vercel.app

### Highlights
- Interactive campus cards with parallax hero and 3D hover effects
- Leaflet-powered maps with location fly-to and rich descriptions
- Campus-specific utilities: shuttle timings, auto numbers, outlets, and quick-dial shortcuts
- Route-aware scroll restore, framer-motion transitions, and Tailwind-driven theming
- Production-ready: Error boundaries, performance optimizations, SEO, analytics integration
- PWA support with service worker and manifest

---

## Quick Start

1. **Prerequisites**: Node.js 18+ and npm/yarn/pnpm
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. Open the dev server link (typically `http://localhost:5173`)

### Available Scripts
- `npm run dev` – Start development server with HMR
- `npm run build` – Create production build (outputs to `dist/`)
- `npm run preview` – Preview production build locally
- `npm run lint` – Run ESLint to check code quality

---

## Analytics Setup

### Google Analytics 4 (GA4)

1. **Create a GA4 property**:
   - Go to https://analytics.google.com
   - Create a new property and get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GA_ID=G-XXXXXXXXXX
   ```
   
   For production deployment, add the same variable in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **Other platforms**: Check their documentation for environment variable configuration

3. **Features**:
   - Automatic page view tracking on route changes
   - Custom event tracking support (see `src/App.tsx` for examples)
   - Only initializes if `VITE_GA_ID` is set (no errors in development)

### Vercel Analytics

Automatically enabled when deployed on Vercel. Tracks:
- Page views
- Web Vitals (Core Web Vitals metrics)
- Performance data

No configuration needed if deploying to Vercel.

### Additional Analytics Options

The codebase includes placeholders and instructions for:
- **Facebook Pixel**: See `index.html` comments
- **Microsoft Clarity**: Add script in `index.html`
- **Hotjar**: Add script in `index.html`
- **Plausible Analytics**: Privacy-focused alternative
- **PostHog**: Open-source analytics platform

See comments in `index.html` and `src/App.tsx` for setup instructions.

---

## Configuration

### Environment Variables

Create a `.env.local` file (or set in your deployment platform):

```env
# Google Analytics 4 Measurement ID
VITE_GA_ID=G-XXXXXXXXXX
```

### Router Configuration
- All routes are declared in `src/App.tsx`
- Uses `BrowserRouter` from `react-router-dom` (see `src/main.tsx`)
- SPA routing is handled via rewrites in `vercel.json`

### Styling
- **Framework**: Tailwind CSS
- **Global styles**: `src/index.css`
- **Component styles**: Tailwind utility classes
- **Custom components**: `src/components/ui/`

---

## Project Structure

```
src/
├── App.tsx                 # Main app component, routing, analytics setup
├── main.tsx                # React root, error boundary wrapper
├── index.css               # Global styles and Tailwind imports
├── components/
│   ├── LandingPage.tsx     # Hero section, campus cards, footer
│   ├── CampusPage.tsx      # Shared campus view (map, transport, outlets)
│   ├── ScrollToTop.tsx     # Scroll restoration on route change
│   ├── ErrorBoundary.tsx   # Error handling component
│   └── ui/                 # Reusable UI components (3D cards, parallax)
├── pages/
│   ├── Hyderabad.tsx       # Hyderabad campus page
│   ├── Goa.tsx             # Goa campus page
│   └── Pilani.tsx          # Pilani campus page
└── data/
    └── campusData.ts       # All campus metadata (locations, outlets, contacts)
```

---

## Features & Capabilities

### Core Features
- **Campus Selection**: Interactive landing page with campus cards
- **Interactive Maps**: Leaflet maps with location markers and fly-to animations
- **Transport Information**: Shuttle schedules, auto drivers, and cab contacts
- **Campus Outlets**: Searchable list of outlets with timings
- **Quick Contacts**: Direct phone dialing for wardens and outlets
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Performance Optimizations
- Code splitting and lazy loading
- Image optimization with lazy loading
- Optimized bundle sizes with manual chunking
- Service worker for offline support
- Efficient caching strategies

### SEO & Accessibility
- Comprehensive meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD schema)
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

### Security
- Security headers (XSS protection, content type options, frame options)
- Error boundary for graceful error handling
- Environment variable protection

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
2. **Import project in Vercel**:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your repository
3. **Configure environment variables**:
   - Add `VITE_GA_ID` in Project Settings → Environment Variables
4. **Deploy**: Vercel will automatically deploy on every push

The project includes `vercel.json` with:
- SPA routing configuration
- Security headers
- Cache optimization

### Other Platforms

See `DEPLOYMENT.md` for detailed instructions on:
- Netlify
- GitHub Pages
- Other static hosting providers

### Pre-Deployment Checklist

- [ ] Set `VITE_GA_ID` environment variable (if using GA4)
- [ ] Update `og:url` and `og:image` in `index.html` with your production URL
- [ ] Update `robots.txt` sitemap URL (if using a sitemap)
- [ ] Test production build locally: `npm run build && npm run preview`
- [ ] Verify all routes work correctly
- [ ] Check analytics integration
- [ ] Test on mobile devices
- [ ] Verify security headers (use https://securityheaders.com)

---

## PWA Configuration

### Manifest
- Location: `public/manifest.json`
- **Action Required**: Add actual icon files (`icon-192.png`, `icon-512.png`) to `public/`
- Update icon paths in `manifest.json` if using different filenames

### Service Worker
- Location: `public/sw.js`
- Handles caching strategies for assets and pages
- Update `CACHE_NAME` version when deploying updates

### PWA Testing
- Use Chrome DevTools → Application → Service Workers
- Test offline functionality
- Verify install prompts on mobile devices

---

## SEO Optimization

### Search Engine Submission

1. **Google Search Console**:
   - Submit your sitemap (create one if needed)
   - Request indexing for important pages
   - Monitor search performance

2. **Bing Webmaster Tools**:
   - Submit your sitemap
   - Monitor indexing status

### Sitemap Generation

You can generate a sitemap using tools like:
- [XML Sitemaps Generator](https://www.xml-sitemaps.com/)
- [Sitemap Generator npm package](https://www.npmjs.com/package/sitemap)

Add your sitemap URL to `public/robots.txt`:
```
Sitemap: https://campus101.vercel.app/sitemap.xml
```

---

## Security, Privacy, and Use

### Analytics
- **GA4**: Configured via environment variables (disabled if not set)
- **Vercel Analytics**: Only active on Vercel deployments
- No analytics run in development mode unless explicitly configured

### Privacy
- No tracking cookies set (except GA4 if enabled)
- No personal data collection
- All data is client-side only

### Secrets
- Never commit `.env.local` or `.env` files
- Keep API keys and secrets in environment variables
- Use your platform's secure environment variable storage

---

## Contributing

We welcome contributions! Here's how to help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Commit with Conventional Commits**:
   - `feat: add new feature`
   - `fix: resolve bug`
   - `docs: update documentation`
   - `style: format code`
   - `refactor: improve code structure`
5. **Push and create a Pull Request**

### Contribution Guidelines
- Follow existing code style and conventions
- Keep data additions consistent with `src/data/campusData.ts` structures
- Use Tailwind utility classes for styling
- Test your changes locally before submitting
- Update documentation if adding new features

### Alternative Contribution Methods
If you cannot open a PR, send patches or suggestions to:
- f20230414@hyderabad.bits-pilani.ac.in
- f20231210@goa.bits-pilani.ac.in

---

## Troubleshooting

### Build Errors
- **Node version**: Ensure you're using Node.js 18+
- **Dependencies**: Try deleting `node_modules` and `package-lock.json`, then run `npm install`
- **Type errors**: Run `npm run lint` to check for issues

### Analytics Not Working
- Verify `VITE_GA_ID` is set correctly
- Check browser console for errors
- Ensure you're not using an ad blocker
- Verify GA4 property is active

### Maps Not Loading
- Check Leaflet CSS is imported (already in `CampusPage.tsx`)
- Verify internet connection (maps require external tiles)
- Check browser console for errors

### Performance Issues
- Run `npm run build` to see bundle size report
- Use Chrome DevTools Performance tab
- Check Network tab for slow requests
- Verify images are optimized (use WebP format)

---

## Maintainers

- **[Shriniketh Deevanapalli](https://sdeevanapalli.dev)** — f20230414@hyderabad.bits-pilani.ac.in
- **Kushagra Singh** — f20231210@goa.bits-pilani.ac.in

---

## License

[Add your license here if applicable]

---

## Acknowledgments

Built with ❤️ for the BITS Pilani community.

Enjoy the build, and ping us if something feels off!
