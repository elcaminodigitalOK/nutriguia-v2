import { useEffect } from 'react';

declare global {
  interface Window {
    frameworkReady?: () => void | Promise<void>;
  }
}

export function useFrameworkReady() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && 
          typeof window.frameworkReady === 'function') {
        const result = window.frameworkReady();
        if (result && typeof result.catch === 'function') {
          result.catch((error: any) => {
            console.warn('Framework ready initialization failed:', error);
          });
        }
      }
    } catch (error) {
      console.warn('Framework ready initialization error:', error);
    }
  }, []);
}
