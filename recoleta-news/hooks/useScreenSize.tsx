import { useEffect, useState } from 'react';

type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<BreakpointKeys, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<BreakpointKeys | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < breakpoints.sm) {
        setScreenSize('xs');
      } else if (width < breakpoints.md) {
        setScreenSize('sm');
      } else if (width < breakpoints.lg) {
        setScreenSize('md');
      } else if (width < breakpoints.xl) {
        setScreenSize('lg');
      } else if (width < breakpoints['2xl']) {
        setScreenSize('xl');
      } else {
        setScreenSize('2xl');
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};
