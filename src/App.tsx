import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from "react-ga4";

// Import pages
import LandingPage from './components/LandingPage';
import Hyderabad from './pages/Hyderabad';
import Goa from './pages/Goa';
import Pilani from './pages/Pilani';

// Initialize Google Analytics
ReactGA.initialize("G-9EG5HKKXP1");
ReactGA.send("pageview");

function App() {
  return (
    <>
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
