import { InputErrorMessages, InputErrorType } from '@/types/input-error-types';
import React from 'react';

// Define InputProps type with additional properties
export type InputProps = {
  type?: string;
  focusColor?: string;
  borderless?: boolean;
  borderColor?: string;
  textSizeXs?: string;
  textSizeMd?: string;
  roundedCorners?: 'rounded' | '';
  width?: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean; // Boolean indicating whether there's an error
  errorType?: InputErrorType; // Error type from the enum
  errorMessage?: string; // Optional custom error message
  label?: string; // Optional label
  size?: 'small' | 'medium' | 'large'; // Size variants
  leftIcon?: React.ReactNode; // Optional left icon
  rightIcon?: React.ReactNode; // Optional right icon
  disabled?: boolean; // Disabled state
};

// Input component
const Input: React.FC<InputProps> = ({
  type = 'text',
  error = false, // Default no error
  errorType, // Error type based on the enum
  errorMessage = '', // Optional custom error message
  focusColor = 'ring-blue-200',
  borderless = false,
  borderColor = 'border-gray-300',
  textSizeXs = 'text-[13px]',
  textSizeMd = 'text-[16px]',
  roundedCorners = '',
  width = 'w-full',
  placeholder,
  value,
  onChange,
  className = '',
  label,
  size = 'medium', // Default size
  leftIcon,
  rightIcon,
  disabled = false,
}) => {
  // Determine size classes based on the size prop
  const sizeClasses = {
    small: 'py-1',
    medium: 'py-2',
    large: 'py-3',
  };

  // Get the error message based on the errorType if provided
  const errorText = errorType ? InputErrorMessages[errorType] : errorMessage;

  // Base input styles
  const baseStyles = `
    ${borderless ? '' : 'border'}
    ${borderColor} 
    ${roundedCorners}
    font-sans
    ${type === 'date' ? 'px-1' : 'pl-2'}
    ${width}
    md:${textSizeMd}
    xs:${textSizeXs}
    focus:outline-none 
    focus:ring 
    ${error ? 'border-red-500 ring-red-200' : focusColor}
    ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} 
    ${error ? 'border-red-500' : borderColor} 
    ${sizeClasses[size]} 
    ${className}
  `.trim();

  return (
    <div className={`mb-4 ${error ? 'text-red-500' : ''}`}>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className={`relative items-center`}>
        {leftIcon && (
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseStyles} ${leftIcon ? 'pl-8' : ''} ${rightIcon ? 'pr-8' : ''}`}
          disabled={disabled}
        />
        {rightIcon && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </span>
        )}
      </div>
      {/* Error message */}
      {error && errorText && (
        <div className="text-red-500 text-xs mt-1">{errorText}</div>
      )}
    </div>
  );
};

export default Input;
