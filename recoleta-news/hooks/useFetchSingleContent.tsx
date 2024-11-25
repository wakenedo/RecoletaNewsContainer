import { useEffect, useState } from 'react';
import { ContentProps } from '@/types/default-types';
import {
  NetworkError,
  InvalidContentTypeError,
  InvalidDataError,
  ApiResponseError,
} from '@/types/fetch-api-error-types';

const useFetchSingleContent = (type: string, id: string) => {
  const [content, setContent] = useState<ContentProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);

        // Fetch request
        const res = await fetch(
          `https://recoleta-news-api.onrender.com/api/${type}/${id}`
        );

        // Check for network errors
        if (!res) {
          throw new NetworkError('Failed to connect to server', type);
        }

        // Check response status
        if (!res.ok) {
          throw new ApiResponseError(
            res.status,
            `API responded with ${res.status}`,
            type
          );
        }

        // Check content type
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new InvalidContentTypeError(
            'Invalid content-type. Expected application/json'
          );
        }

        // Parse data
        const data = await res.json();

        // Check if data is valid
        if (!data || typeof data !== 'object') {
          throw new InvalidDataError('Invalid data format received');
        }

        // Set the content state
        setContent(data);
      } catch (err: unknown) {
        if (
          err instanceof NetworkError ||
          err instanceof ApiResponseError ||
          err instanceof InvalidContentTypeError ||
          err instanceof InvalidDataError
        ) {
          // If it's one of our custom errors, show its message
          setError(err.message);
        } else {
          // For any other unexpected error, provide a generic message
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchContent();
  }, [type, id]);

  return { content, loading, error };
};

export default useFetchSingleContent;
