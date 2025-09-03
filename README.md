
# Campus101 – The Chill BITS Campus Guide

Welcome to Campus101! This is your one-stop, super-friendly web app for exploring all three BITS Pilani campuses – Hyderabad, Goa, and Pilani. Whether you’re a fresher, a senior, or just campus-curious, this guide has you covered with maps, mess info, outlets, and more. Built with React, TypeScript, and some seriously cool UI magic.


## 🚀 What’s Inside?

- **Landing Page**: Parallax hero images, 3D campus cards, and a vibe that’s both modern and fun.
- **Campus Pages**: Interactive maps (Leaflet + OSM), all the outlets, mess schedules, emergency contacts, and even bus/auto info if you need to escape.
- **Dark/Light Mode**: Because everyone has a preference.
- **Mobile First**: Works great on your phone, tablet, or that ancient desktop in the library.
- **Reusable Components**: Clean code, easy to add new stuff.
- **Fast**: Vite + React = 🚀


## 🛠 Tech Stack

- React 18 + TypeScript
- React Router DOM
- Tailwind CSS (for all the pretty stuff)
- Framer Motion (animations)
- React Leaflet + OpenStreetMap (maps)
- Lucide React (icons)
- Vite (build tool)
- Google Analytics 4 + Vercel Analytics


## 📁 Folder Vibes

```
src/
  components/
    ui/              # Aceternity UI stuff (3D cards, parallax)
    LandingPage.tsx  # The main landing page
    CampusPage.tsx   # Template for all campuses
  pages/
    Hyderabad.tsx    # Hyderabad campus
    Goa.tsx          # Goa campus
    Pilani.tsx       # Pilani campus
  data/
    campusData.ts    # All the campus info
  lib/
    utils.ts         # Helper functions
  App.tsx            # Routing
  main.tsx           # App entry
```


## � How It’s Built (and How to Build More)

1. **Routing**: React Router for easy navigation.
2. **UI**: Aceternity UI for 3D cards, parallax, and general wow-factor.
3. **Data**: All campus info lives in `src/data/campusData.ts`.
4. **Pages**: Each campus gets its own page in `src/pages/`.
5. **Maps**: React Leaflet + OSM for interactive campus maps.
6. **Performance**: Vite keeps things snappy.


## 🏃‍♂️ Getting Started

You’ll need Node.js 16+ and npm (or yarn).

```bash
# Clone the repo
git clone <your-repo-url>
cd campus101

# Install dependencies
npm install

# Start the dev server
npm run dev
```


### Campus Images

Drop your campus images in `public/` like this:

```
public/
  hyderabad-campus.jpg
  hyderabad-1.jpg ... hyderabad-5.jpg
  goa-campus.jpg
  goa-1.jpg ... goa-5.jpg
  pilani-campus.jpg
  pilani-1.jpg ... pilani-5.jpg
```


## 🎨 Customizing Stuff

Want to add a new campus?

1. Add your campus data in `src/data/campusData.ts`.
2. Make a new page in `src/pages/` (copy one of the existing ones).
3. Add a route in `src/App.tsx`.
4. Update the landing page to show your new campus card.

Want to change the look?
- Tweak Tailwind classes for colors, gradients, and dark mode.


## 📱 Mobile Friendly

Works great on phones, tablets, and desktops. Collapsible sidebar, responsive grids, and touch-friendly controls.


## 🔧 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint your code
```


## OG Creators

- [Shriniketh Deevanapalli](https://www.sdeevanapalli.dev)
- Kushagra Singh



## 👥 Contributing

Anyone is welcome to contribute! Just fork, branch, code, and open a PR—no need to ask for permission. If you spot a bug or have a cool idea, send it in.

---

**Built with ❤️ for BITSians** | [GitHub](https://github.com/sdeevanapalli/campus101) | [Live Demo](https://campus101-sable.vercel.app)