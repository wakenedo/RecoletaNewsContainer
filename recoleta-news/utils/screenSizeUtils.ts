import { useScreenSize } from '@/hooks/useScreenSize';

// Define TailwindCSS breakpoints with explicit types
export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<BreakpointKeys, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Utility function to apply values based on breakpoints
export const applyBreakpointValues = (
  breakpointValues: Partial<Record<BreakpointKeys, string | number>>,
  fallback: string = '0'
) => {
  const screenSize = useScreenSize();
  console.log('Current screen size in applyBreakpointValues:', screenSize);

  if (!screenSize) return fallback; // Return fallback if screen size is not available

  // Ensure that the breakpoint values are sorted by the correct order
  const sortedBreakpoints = Object.keys(breakpointValues) as BreakpointKeys[];
  sortedBreakpoints.sort((a, b) => breakpoints[a] - breakpoints[b]);

  // Log the sorted breakpoints for debugging
  console.log('Sorted breakpoints:', sortedBreakpoints);

  // Variable to hold the returned value
  let returnValue: string = fallback;

  // Iterate through breakpoints to find the right one
  for (const breakpoint of sortedBreakpoints) {
    console.log(
      `Checking breakpoint: ${breakpoint} (value: ${breakpointValues[breakpoint]}) against screen size: ${screenSize}`
    );

    // Update returnValue if current breakpoint is equal to or less than the screen size
    if (breakpoints[breakpoint] <= breakpoints[screenSize]) {
      returnValue = String(breakpointValues[breakpoint]);
      console.log(
        `Setting return value for breakpoint ${breakpoint}:`,
        returnValue
      );
    }
  }

  console.log('Final return value:', returnValue);

  return returnValue; // Return the last matching value
};
