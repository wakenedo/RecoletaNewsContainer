// context/ScreenSizeProvider.tsx
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the screen size
const ScreenSizeContext = createContext<string | null>(null);

export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [screenSize, setScreenSize] = useState<string | null>(null);

  const determineScreenSize = () => {
    const width = window.innerWidth;

    // Determine screen size based on breakpoints
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    if (width < 1536) return 'xl';

    return '2xl';
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(determineScreenSize());
    };

    handleResize(); // Initial call to set the size

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Custom hook to use the screen size context
export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (context === null) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }

  return context;
};
