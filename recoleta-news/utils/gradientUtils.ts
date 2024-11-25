import { applyBreakpointValues } from './screenSizeUtils';

// utils/gradientUtils.ts
export const getGradient = (
  direction: 't-b' | 'b-t' | 'l-r' | 'r-l',
  height: string,
  color1: string,
  color2: string,
  gradientCoverage1: string,
  gradientCoverage2: string,
  verticalCoverage1: string,
  verticalCoverage2: string
) => {
  const directions = {
    't-b': 'to bottom',
    'b-t': 'to top',
    'l-r': 'to right',
    'r-l': 'to left',
  };

  // Define the gradient with specified coverage and direction
  return {
    gradient: `linear-gradient(${directions[direction]}, ${color1} 0%, ${color2} ${gradientCoverage1}%, transparent ${gradientCoverage2}%)`,
    backgroundSize: `${verticalCoverage1}% ${verticalCoverage2}%`, // Ensure the mask does not repeat vertically
    height: `h-${height}`, // Include the height dynamically
  };
};

export const getGradientCoverageBreakpoints = (
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  xxl: string
) =>
  applyBreakpointValues({
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    '2xl': xxl,
  });
