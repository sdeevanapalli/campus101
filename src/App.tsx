import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import LandingPage from './components/LandingPage';
import Hyderabad from './pages/Hyderabad';
import Goa from './pages/Goa';
import Pilani from './pages/Pilani';
import ScrollToTop from './components/ScrollToTop';

/**
 * ============================================
 * GOOGLE ANALYTICS 4 (GA4) CONFIGURATION
 * ============================================
 * 
 * SETUP:
 * Google Analytics is configured via the direct gtag.js script in index.html
 * This hook tracks page views on route changes for SPA navigation
 * 
 * The gtag script is loaded in index.html:
 * <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9TQQ0MB81"></script>
 * 
 * FEATURES:
 * - Tracks page views on route changes (SPA navigation)
 * - Automatically tracks page path and search params
 * 
 * ADDITIONAL TRACKING:
 * To track custom events, use gtag() anywhere in your components:
 * 
 *   if (typeof window !== 'undefined' && (window as any).gtag) {
 *     (window as any).gtag('event', 'button_click', {
 *       event_category: 'User Interaction',
 *       event_label: 'Campus Card Clicked',
 *       value: 1
 *     });
 *   }
 * 
 * To track exceptions:
 * 
 *   if (typeof window !== 'undefined' && (window as any).gtag) {
 *     (window as any).gtag('event', 'exception', {
 *       description: error.message,
 *       fatal: false
 *     });
 *   }
 * 
 * DOCUMENTATION: https://developers.google.com/analytics/devguides/collection/ga4
 */

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

/**
 * Custom hook to track page views with Google Analytics
 * Tracks route changes in the SPA automatically using gtag
 */
function usePageview() {
  const location = useLocation();
  
  // Track page views on route changes
  useEffect(() => {
    // Check if gtag is available (script loaded from index.html)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);
}

/**
 * ============================================
 * MAIN APP COMPONENT
 * ============================================
 * 
 * ANALYTICS PROVIDERS:
 * - Vercel Analytics: Automatically tracks performance and usage on Vercel deployments
 * - Google Analytics 4: Configured via usePageview hook above
 * 
 * TO ADD MORE ANALYTICS:
 * 1. Import your analytics library/SDK
 * 2. Initialize it in a useEffect or separate hook
 * 3. Track events as needed
 * 
 * POPULAR OPTIONS:
 * - Microsoft Clarity: https://clarity.microsoft.com
 * - Hotjar: https://www.hotjar.com
 * - Plausible Analytics: https://plausible.io (Privacy-focused, no cookies)
 * - PostHog: https://posthog.com (Open-source alternative)
 * - Mixpanel: https://mixpanel.com (Event tracking)
 */
function App() {
  usePageview();
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* 
          Campus routes - each section now has its own URL for independent analytics tracking
          Routes: /hyderabad, /hyderabad/home, /hyderabad/transport, /hyderabad/outlets, etc.
          Same pattern for /goa and /pilani
          
          The CampusPage component handles the section routing internally based on URL path
        */}
        <Route path="/hyderabad/*" element={<Hyderabad />} />
        <Route path="/goa/*" element={<Goa />} />
        <Route path="/pilani/*" element={<Pilani />} />
      </Routes>
      
      {/* 
        Vercel Analytics
        Automatically tracks page views, Web Vitals, and performance metrics
        Only active when deployed on Vercel
        Docs: https://vercel.com/docs/analytics
      */}
      <Analytics />
    </>
  );
}

export default App;
