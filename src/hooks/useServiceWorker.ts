import { useEffect, useState } from 'react';

/**
 * ============================================
 * SERVICE WORKER REGISTRATION HOOK
 * ============================================
 * 
 * Registers the service worker for PWA functionality
 * Handles installation prompts and updates
 * 
 * FEATURES:
 * - Automatic service worker registration
 * - Update detection and notification
 * - Offline support
 * - Cache management
 * - Android install prompt handling
 */

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function useServiceWorker() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Handle beforeinstallprompt event (Android Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      console.log('[PWA] Install prompt available');
    };

    // Handle app installed event
    const handleAppInstalled = () => {
      console.log('[PWA] App installed');
      setDeferredPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Only register service worker in production and if supported
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      import.meta.env.PROD
    ) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });

          console.log('[Service Worker] Registered:', registration);

          // Handle service worker updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available
                  console.log('[Service Worker] New version available');
                  // Optionally show update notification to user
                  if (window.confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute

        } catch (error) {
          console.error('[Service Worker] Registration failed:', error);
        }
      };

      // Register after page load
      if (document.readyState === 'complete') {
        registerServiceWorker();
      } else {
        window.addEventListener('load', registerServiceWorker);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Function to trigger install prompt (can be called from UI)
  const promptInstall = async () => {
    if (!deferredPrompt) {
      console.log('[PWA] Install prompt not available');
      return false;
    }

    try {
      // Show the install prompt
      await deferredPrompt.prompt();
      
      // Wait for user response
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log(`[PWA] User ${outcome} the install prompt`);
      
      // Clear the deferred prompt
      setDeferredPrompt(null);
      setIsInstallable(false);
      
      return outcome === 'accepted';
    } catch (error) {
      console.error('[PWA] Error showing install prompt:', error);
      return false;
    }
  };

  return { isInstallable, promptInstall };
}

