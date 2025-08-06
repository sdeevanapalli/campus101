# BITS Campus Guide - Multi-Campus Platform

A beautiful, modern web application providing comprehensive campus information for all three BITS Pilani campuses: Hyderabad, Goa, and Pilani. Built with React, TypeScript, and enhanced with stunning Aceternity UI components.

## 🚀 Features

### 🎨 Beautiful Landing Page
- **Hero Parallax Animation** - Stunning scrolling effects with campus images
- **3D Interactive Cards** - Campus selection with immersive 3D hover effects
- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Built with Aceternity UI components

### 🏫 Campus Pages
- **Interactive Maps** - Detailed campus navigation with location markers
- **Facility Information** - Complete outlet timings and services
- **Emergency Contacts** - Quick access to important phone numbers
- **Mess Schedules** - Dining timings and menu information
- **Transportation** - Bus routes and auto driver contacts (where available)

### 🎯 Key Highlights
- **Multi-Campus Support** - Hyderabad, Goa, and Pilani campuses
- **Reusable Components** - Efficient, maintainable code structure
- **Dark/Light Mode** - Toggle between themes
- **Mobile Optimized** - Perfect mobile experience
- **Fast Performance** - Optimized with Vite and React

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: React Leaflet + OpenStreetMap
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Analytics**: Google Analytics 4 + Vercel Analytics

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # Aceternity UI components
│   │   ├── 3d-card.tsx        # 3D card effects
│   │   └── hero-parallax.tsx  # Hero parallax component
│   ├── LandingPage.tsx        # Main landing page
│   └── CampusPage.tsx         # Reusable campus template
├── pages/
│   ├── Hyderabad.tsx          # Hyderabad campus page
│   ├── Goa.tsx                # Goa campus page
│   └── Pilani.tsx             # Pilani campus page
├── data/
│   └── campusData.ts          # Centralized campus data
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main router component
└── main.tsx                   # Application entry point
```

## 🚀 Development Pipeline

### Phase 1: Setup & Dependencies ✅
1. **Install React Router** for multi-page navigation
2. **Install Aceternity UI dependencies** (Framer Motion, etc.)
3. **Create directory structure** for organized code

### Phase 2: UI Components ✅
1. **Utility Functions** - Class merging for Tailwind
2. **3D Card Component** - Interactive campus selection cards
3. **Hero Parallax** - Stunning landing page animation
4. **Reusable Campus Page** - Template for all campuses

### Phase 3: Data Structure ✅
1. **Campus Data Types** - TypeScript interfaces
2. **Hyderabad Data Migration** - Extract existing data
3. **Goa & Pilani Data** - Add new campus information
4. **Hero Images Array** - Parallax background images

### Phase 4: Routing & Navigation ✅
1. **Router Setup** - Configure React Router
2. **Landing Page** - Campus selection with 3D effects
3. **Individual Campus Pages** - Use reusable template
4. **Navigation Links** - Seamless page transitions

### Phase 5: Testing & Deployment ✅
1. **Development Testing** - Verify all routes work
2. **Responsive Testing** - Mobile/desktop compatibility
3. **Performance Optimization** - Image loading, animations
4. **Production Deployment** - Ready for live hosting

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bits-campus-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

### Adding Campus Images

Place campus images in `public/images/` with the following naming:

```
public/images/
├── hyderabad-campus.jpg       # Main campus image
├── hyderabad-1.jpg           # Hero parallax images
├── hyderabad-2.jpg
├── hyderabad-3.jpg
├── hyderabad-4.jpg
├── hyderabad-5.jpg
├── goa-campus.jpg            # Main campus image
├── goa-1.jpg                 # Hero parallax images
├── goa-2.jpg
├── goa-3.jpg
├── goa-4.jpg
├── goa-5.jpg
├── pilani-campus.jpg         # Main campus image
├── pilani-1.jpg              # Hero parallax images
├── pilani-2.jpg
├── pilani-3.jpg
├── pilani-4.jpg
└── pilani-5.jpg
```

## 🎨 Customization

### Adding a New Campus

1. **Add campus data** in `src/data/campusData.ts`:
```typescript
newCampus: {
  name: "BITS Pilani, New Campus",
  slug: "new-campus",
  description: "Description of the new campus",
  image: "/images/new-campus.jpg",
  mapCenter: [latitude, longitude],
  locations: [/* location data */],
  outlets: [/* outlet data */],
  // ... other data
}
```

2. **Create a new page** in `src/pages/NewCampus.tsx`:
```typescript
import React from 'react';
import CampusPage from '../components/CampusPage';
import { campusData } from '../data/campusData';

const NewCampus = () => {
  return <CampusPage campusData={campusData.newCampus} />;
};

export default NewCampus;
```

3. **Add route** in `src/App.tsx`:
```typescript
<Route path="/new-campus" element={<NewCampus />} />
```

4. **Update landing page** to include the new campus card.

### Customizing Themes

Modify Tailwind classes in components for different color schemes:
- Primary colors: `blue-*`, `orange-*`
- Background gradients: `from-blue-50 to-orange-50`
- Dark mode: `dark:*` classes

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Collapsible sidebar** for mobile navigation
- **Responsive grid layouts** for different screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized map controls** for touch screens

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Campus101 creators**: Shriniketh Deevanapalli & Kushagra Singh
- **BITS Pilani community** for providing campus information
- **Aceternity UI** for beautiful component designs
- **OpenStreetMap** for map services
- **All contributors** who helped with campus data and feedback

## 🐛 Known Issues

- Images are currently placeholder URLs - replace with actual campus photos
- Some campus data may need verification with official sources
- Map markers could be more precise with GPS coordinates

## 🚀 Future Enhancements

- [ ] **Events Calendar** - Campus events and activities
- [ ] **Student Reviews** - Reviews for outlets and facilities
- [ ] **Real-time Updates** - Live facility status updates
- [ ] **Multi-language Support** - Regional language options
- [ ] **PWA Features** - Offline access and push notifications
- [ ] **Admin Panel** - Easy content management
- [ ] **API Integration** - Real-time data from campus systems

---

**Built with ❤️ for BITS students** | [GitHub](https://github.com) | [Live Demo](https://your-deployed-url.com)