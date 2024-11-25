export interface ContainerProps {
  id?: string; // For testing purposes //
  additionalTWStyles?: string; // Additional Tailwind classes for the container //
  children: React.ReactNode; // Children to be rendered
  width?: string; // Width of the container (Tailwind classes)
  height?: string; // Height of the container (Tailwind classes)
  isFluid?: boolean; // Whether the container should be fluid
  applyMask?: boolean; // Whether to apply a mask
  maskStyle?: 'black' | 'green' | 'blue' | 'orange'; // Style of the mask
  gradientCoverage1?: string; // Coverage percentage for the first color (0 to 100)
  gradientCoverage2?: string; // Coverage percentage for the second color (0 to 100)
  verticalCoverage1?: string; // First vertical coverage (optional)
  verticalCoverage2?: string; // Second vertical coverage (optional)
  maskOpacity?: number; // Opacity for the mask (0 to 1)
  maskDirection?: 'l-r' | 'r-l' | 't-b' | 'b-t'; // Direction of the gradient
  color1?: string; // First color for the gradient
  color2?: string; // Second color for the gradient
  solidBackground?: boolean; // Whether to use a solid background color
  backgroundColor?: string; // Background color if solidBackground is true
  applyShadowEffect?: boolean; // Whether to apply shadow effect
  shadowEffect?: string; // Tailwind classes for shadow effect
  roundedCorners?:
    | ''
    | 'rounded'
    | 'rounded rounded-t-none'
    | 'rounded rounded-b-none'
    | 'rounded rounded-r-none'
    | 'rounded rounded-l-none'; // Whether to apply rounded corners
  applyBorder?: boolean; // Whether to apply border
  borderStyles?: string; // Border style (Tailwind classes)
  style?: React.CSSProperties; // Additional styles for the container
}
