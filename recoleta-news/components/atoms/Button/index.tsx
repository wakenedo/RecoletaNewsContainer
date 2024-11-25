import React, { useState } from 'react';

export type ButtonProps = {
  children: React.ReactNode; // Allow any valid React node
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties; // Inline styles, if needed
  bgColor?: string; // Background color
  textColor?: string; // Text color
  hoverBgColor?: string; // Hover background color
  hoverTextColor?: string; // Hover text color
  activeShadow?: string; // Shadow effect on active
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  style,
  bgColor = 'bg-[#84F84D]', // Default background color
  textColor = 'text-darkest-gray', // Default text color
  hoverBgColor = 'hover:bg-[#84F84D]', // Default hover background color with hover prefix
  hoverTextColor = 'hover:text-quaternary-green', // Default hover text color with hover prefix
  activeShadow = 'active:shadow-lg', // Default shadow effect
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      onClick();
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 800);
    }
  };

  // Base button styles
  const baseStyles = `
    px-4 py-2 
    font-semibold 
    text-sm 
    rounded 
    transition 
    duration-300 
    ease-in-out 
    focus:outline-none 
    focus:ring
  `;

  // Combine classes
  const buttonClasses = `
    ${baseStyles} 
    ${disabled ? 'bg-recoleta_medium_gray' : bgColor} 
    ${disabled ? 'text-recoleta_light_gray' : textColor} 
    ${disabled ? '' : hoverBgColor} 
    ${disabled ? '' : hoverTextColor} 
    ${disabled ? '' : activeShadow} 
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''} 
    ${className} 
    ${isClicked ? 'transform scale-95' : ''}
  `.trim(); // Trim to avoid unnecessary whitespace

  return (
    <button
      type={type}
      className={`${buttonClasses} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
