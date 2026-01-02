import React, { Component, ErrorInfo, ReactNode } from 'react';

/**
 * ============================================
 * ERROR BOUNDARY COMPONENT
 * ============================================
 * 
 * PURPOSE:
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing
 * the entire application.
 * 
 * USAGE:
 * Wrap your app or specific routes with <ErrorBoundary>:
 * 
 *   <ErrorBoundary>
 *     <App />
 *   </ErrorBoundary>
 * 
 * OPTIONAL: INTEGRATE WITH ANALYTICS
 * To track errors in your analytics service, add tracking in componentDidCatch:
 * 
 *   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
 *     // Track in Google Analytics
 *     if (window.gtag) {
 *       window.gtag('event', 'exception', {
 *         description: error.toString(),
 *         fatal: false
 *       });
 *     }
 *     
 *     // Track in other services
 *     // Sentry.captureException(error);
 *     // LogRocket.captureException(error);
 *   }
 */

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // TODO: Integrate with error tracking service
    // 
    // EXAMPLES:
    // 
    // Google Analytics:
    // if (typeof window !== 'undefined' && (window as any).gtag) {
    //   (window as any).gtag('event', 'exception', {
    //     description: error.toString(),
    //     fatal: false,
    //     errorInfo: errorInfo.componentStack
    //   });
    // }
    // 
    // Sentry:
    // import * as Sentry from '@sentry/react';
    // Sentry.captureException(error, {
    //   contexts: {
    //     react: {
    //       componentStack: errorInfo.componentStack,
    //     },
    //   },
    // });
    // 
    // LogRocket:
    // LogRocket.captureException(error);
    // 
    // Custom error logging:
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   body: JSON.stringify({ error: error.toString(), errorInfo }),
    // });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white">Something went wrong</h1>
              <p className="text-neutral-400">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <p className="text-sm font-mono text-red-400 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:bg-neutral-700 transition-colors border border-white/10"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

