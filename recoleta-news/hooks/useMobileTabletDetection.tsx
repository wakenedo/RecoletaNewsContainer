import { useEffect, useState } from 'react';

const useMobileTabletDetection = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 999); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileOrTablet;
};

export default useMobileTabletDetection;
