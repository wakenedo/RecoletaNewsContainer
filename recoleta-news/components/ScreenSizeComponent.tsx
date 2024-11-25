import { useState, useEffect } from 'react';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const getDeviceScreenSize = (width: number) => {
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';

  return 'xs';
};

const ScreenSizeComponent = () => {
  const [screenSize, setScreenSize] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(getDeviceScreenSize(width));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Current screen size: {screenSize}</p>
    </div>
  );
};

export default ScreenSizeComponent;
