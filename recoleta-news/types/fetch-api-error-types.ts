// Arquivo centralizador de tipos de erro de Fetch/API para o projeto.

// Base error interface
export interface FetchApiError {
  name: string;
  message: string;
  statusCode?: number;
  identifier?: string; // Optional property to identify source
}

// Error for network issues or failed fetch
export class NetworkError implements FetchApiError {
  name = 'NetworkError';

  message: string;

  identifier?: string;

  constructor(message: string, identifier?: string) {
    this.message = message;
    this.identifier = identifier;
  }
}

// Error for invalid content type (e.g., expected JSON)
export class InvalidContentTypeError implements FetchApiError {
  name = 'InvalidContentTypeError';

  message: string;

  identifier?: string;

  constructor(message: string, identifier?: string) {
    this.message = message;
    this.identifier = identifier;
  }
}

// Error for invalid data format
export class InvalidDataError implements FetchApiError {
  name = 'InvalidDataError';

  message: string;

  identifier?: string;

  constructor(message: string, identifier?: string) {
    this.message = message;
    this.identifier = identifier;
  }
}

// Error for failed API response (e.g., 404 or 500)
export class ApiResponseError implements FetchApiError {
  name = 'ApiResponseError';

  message: string;

  statusCode: number;

  identifier?: string;

  constructor(statusCode: number, message: string, identifier?: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.identifier = identifier;
  }
}
