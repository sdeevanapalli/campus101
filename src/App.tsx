import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from "react-ga4";

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
 * SETUP INSTRUCTIONS:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Add it to your .env file or deployment environment variables:
 *    VITE_GA_ID=G-XXXXXXXXXX
 * 4. The analytics will automatically initialize when the ID is present
 * 
 * FEATURES:
 * - Tracks page views on route changes (SPA navigation)
 * - Automatically tracks page path and search params
 * - Only initializes if VITE_GA_ID is set (no errors in development)
 * 
 * ADDITIONAL TRACKING:
 * To track custom events, use ReactGA.event() anywhere in your components:
 * 
 *   ReactGA.event({
 *     category: 'User Interaction',
 *     action: 'Button Click',
 *     label: 'Campus Card Clicked',
 *     value: 1
 *   });
 * 
 * To track exceptions:
 * 
 *   ReactGA.event({
 *     category: 'Error',
 *     action: 'Exception',
 *     label: error.message
 *   });
 * 
 * DOCUMENTATION: https://github.com/PriceRunner/react-ga4
 */

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

/**
 * Custom hook to track page views with Google Analytics
 * Tracks route changes in the SPA automatically
 */
function usePageview() {
  const location = useLocation();
  
  // Initialize GA4 once when the app loads
  useEffect(() => {
    if (GA_ID) {
      ReactGA.initialize(GA_ID, {
        // Optional: Configure GA4 options
        // testMode: import.meta.env.DEV, // Enable test mode in development
        // gtagOptions: {
        //   send_page_view: false, // We're sending page views manually
        // }
      });
      
      // Track initial page view
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, []);
  
  // Track page views on route changes
  useEffect(() => {
    if (GA_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
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
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/pilani" element={<Pilani />} />
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
