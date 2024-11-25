import { getGradient } from '@/utils/gradientUtils';
import React from 'react';
import { ContainerProps } from '../types/default-atom-types';

const Container: React.FC<ContainerProps> = ({
  additionalTWStyles = '',
  children,
  width = 'w-full',
  height = 'h-auto',
  isFluid = true,
  applyMask = true,
  maskStyle = 'black',
  gradientCoverage1 = '0',
  gradientCoverage2 = '100',
  verticalCoverage1 = '100',
  verticalCoverage2 = '100',
  maskOpacity = 0.5,
  maskDirection = 'l-r',
  color1,
  color2,
  solidBackground = false,
  backgroundColor = '#F6F6F6',
  applyShadowEffect = false,
  shadowEffect = '',
  roundedCorners = 'rounded',
  borderStyles = '',
  applyBorder = false,
  style,
}) => {
  const colorMap = {
    black: ['#C2C2C2', '#2a2a2a'],
    green: ['#A6FA7E', '#1F6300'],
    blue: ['#7EE3FA', '#005265'],
    orange: ['#FF9A51', '#5d2700'],
  };

  const [lightColor, darkColor] =
    color1 && color2 ? [color1, color2] : colorMap[maskStyle];

  const { gradient: maskGradient, backgroundSize } = getGradient(
    maskDirection,
    height,
    lightColor,
    darkColor,
    gradientCoverage1,
    gradientCoverage2,
    verticalCoverage1,
    verticalCoverage2
  );

  const containerClasses = `
    ${additionalTWStyles} 
    ${width} 
    ${height}
    ${roundedCorners} 
    ${isFluid ? 'flex' : 'block'} 
    relative // Ensures absolutely positioned elements are relative
    ${applyShadowEffect ? shadowEffect : ''} 
    ${applyBorder ? borderStyles : ''}
  `;

  return (
    <div className={containerClasses} style={style}>
      {solidBackground && (
        <div
          className={`absolute inset-0 ${roundedCorners}`}
          style={{ backgroundColor, zIndex: 0 }}
        />
      )}

      <div
        className={`absolute inset-0 ${roundedCorners} ${applyMask ? 'block' : 'hidden'}`}
        style={{
          opacity: maskOpacity,
          backgroundImage: maskGradient,
          backgroundSize: backgroundSize,
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      <div className="relative z-20 flex-col">{children}</div>
    </div>
  );
};

export default Container;
