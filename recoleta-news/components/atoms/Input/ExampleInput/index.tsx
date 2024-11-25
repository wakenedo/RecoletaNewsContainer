import { InputErrorType } from '@/types/input-error-types';
import { useState } from 'react';
import Container from '../../Container';
import Input from '..';
import Button from '../../Button';

const ExampleInput = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState<InputErrorType | undefined>();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting by default

    // Validation: Check if the email is empty or doesn't match the email format
    if (email === '') {
      setError(true);
      setErrorType(InputErrorType.Required); // Set error for empty email
    } else if (!emailRegex.test(email)) {
      setError(true);
      setErrorType(InputErrorType.InvalidEmail); // Set error for invalid format
    } else {
      setError(false);
      setErrorType(undefined);
      alert('Form submitted successfully!'); // Submit form if valid
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Reset error when user starts typing again
    if (error) {
      setError(false);
      setErrorType(undefined); // Reset error state as user types
    } else {
      setEmail(e.target.value); // Update email value on change
    }
  };

  return (
    <Container
      additionalTWStyles="p-4"
      width="md:w-[318px]"
      height="h-fit"
      isFluid={true}
      applyMask={false}
      solidBackground={true}
      backgroundColor="white" // Add solid background if needed
      applyShadowEffect={true}
      shadowEffect="shadow-lg" // Tailwind shadow classes
      applyBorder={true}
      borderStyles="border border-[#FF9A51]"
      roundedCorners=""
    >
      <h1 className="font-sans text-primary-title ">Hello, World!</h1>
      <p className="text-gray-800">This is a container example.</p>
      <form onSubmit={handleSubmit} className="mb-2">
        <Input
          type="email"
          placeholder="Enter your email"
          borderColor="border-[#FF9A51]"
          focusColor="ring-orange-200"
          value={email}
          onChange={e => handleChange(e)}
          label="Email"
          size="medium"
          error={error} // Trigger error UI if any error exists
          errorType={errorType} // Pass the error type
          disabled={false}
          roundedCorners=""
        />
        <div className="md:flex flex-col">
          <div className="flex-col space-x-2 ">
            <Button
              disabled={false}
              bgColor="bg-[#84F84D]"
              textColor="text-[#1f6300]"
              hoverBgColor="hover:bg-[#4BD609]"
              hoverTextColor="hover:text-[#A6FA7E]"
              activeShadow="shadow-lg"
              onClick={() => console.log('clicked')}
              type="submit"
            >
              Submit
            </Button>
            <Button
              onClick={() => console.log('Button clicked!')}
              disabled={true}
              bgColor="bg-[#84F84D]"
              textColor="text-[#1f6300]"
              hoverBgColor="hover:bg-[#4BD609]"
              hoverTextColor="hover:text-[#A6FA7E]"
              activeShadow="shadow-lg"
            >
              Disabled
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};
export default ExampleInput;
