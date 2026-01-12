import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import LandingPage from './components/LandingPage';
import Hyderabad from './pages/Hyderabad';
import Goa from './pages/Goa';
import Pilani from './pages/Pilani';
import ScrollToTop from './components/ScrollToTop';
import { useServiceWorker } from './hooks/useServiceWorker';

// ga4 tracking via gtag script in index.html

// Declare gtag function type for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// tracks route changes for ga4
function usePageview() {
  const location = useLocation();
  
  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-P9TQQ0MB81', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);
}

// main app component with analytics and routing
function App() {
  usePageview();
  useServiceWorker(); // Register service worker for PWA support
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* campus routes - /hyderabad, /goa, /pilani */}
        <Route path="/hyderabad/*" element={<Hyderabad />} />
        <Route path="/goa/*" element={<Goa />} />
        <Route path="/pilani/*" element={<Pilani />} />
      </Routes>
      
      {/* vercel analytics - only on production */}
      <Analytics />
    </>
  );
}

export default App;
