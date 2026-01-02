import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

/**
 * ============================================
 * APPLICATION ENTRY POINT
 * ============================================
 * 
 * SETUP:
 * - React StrictMode: Helps identify problems during development
 * - BrowserRouter: Enables client-side routing
 * - ErrorBoundary: Catches and handles React errors gracefully
 * 
 * PERFORMANCE:
 * - Uses createRoot API (React 18+) for better performance
 * - Error boundary prevents entire app crash
 */

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure index.html has a <div id="root"></div> element.');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
