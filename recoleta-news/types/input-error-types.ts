// Define common error types
export enum InputErrorType {
  Required = 'required',
  InvalidEmail = 'invalidEmail',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  InvalidDate = 'invalidDate',
}

// Define error messages for each type
export const InputErrorMessages: Record<InputErrorType, string> = {
  [InputErrorType.Required]: 'This field is required.',
  [InputErrorType.InvalidEmail]: 'Please enter a valid email address.',
  [InputErrorType.MinLength]: 'The value is too short.',
  [InputErrorType.MaxLength]: 'The value is too long.',
  [InputErrorType.InvalidDate]: 'Please enter a valid date.',
};

// Define the error structure for inputs
export type InputError = {
  type: InputErrorType;
  message?: string; // Allow custom error messages if needed
};
