import { ContentProps } from '@/types/default-types';
import {
  ApiResponseError,
  FetchApiError,
  InvalidContentTypeError,
  InvalidDataError,
  NetworkError,
} from '@/types/fetch-api-error-types';
import { useState, useEffect } from 'react';

// Custom hook for fetching carousel data
export const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState<ContentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchApiError | null>(null); // Use the FetchApiError type for the error state

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          'https://recoleta-news-api.onrender.com/api/content'
        );

        // Check if response is not ok (e.g., 404, 500 errors)
        if (!response.ok) {
          throw new ApiResponseError(
            response.status,
            'Failed to fetch content from API',
            'carousel'
          );
        }

        const contentType = response.headers.get('content-type');

        // Check if the content type is JSON
        if (!contentType || !contentType.includes('application/json')) {
          throw new InvalidContentTypeError(
            'Expected JSON response',
            'carousel'
          );
        }

        const data = await response.json();

        // Optionally validate data structure here if necessary
        if (!Array.isArray(data)) {
          throw new InvalidDataError(
            'Invalid data format received',
            'carousel'
          );
        }

        setCarouselData(data); // Set the fetched data
        setLoading(false);
      } catch (err: unknown) {
        setLoading(false);

        // Handle specific error cases based on their type
        if (
          err instanceof NetworkError ||
          err instanceof ApiResponseError ||
          err instanceof InvalidContentTypeError ||
          err instanceof InvalidDataError
        ) {
          setError(err); // Set the custom error
        } else {
          // Handle network or unexpected errors
          setError(
            new NetworkError('Network or unknown error occurred', 'carousel')
          );
        }
      }
    };

    fetchContent();
  }, []);

  return { carouselData, loading, error };
};
