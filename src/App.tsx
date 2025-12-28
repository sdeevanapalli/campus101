import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from "react-ga4";

import LandingPage from './components/LandingPage';
import Hyderabad from './pages/Hyderabad';
import Goa from './pages/Goa';
import Pilani from './pages/Pilani';
import ScrollToTop from './components/ScrollToTop';

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

function usePageview() {
  const location = useLocation();
  useEffect(() => {
    if (GA_ID) {
      ReactGA.initialize(GA_ID);
    }
  }, []);
  useEffect(() => {
    if (GA_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location.pathname, location.search]);
}

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
      <Analytics />
    </>
  );
}

export default App;
