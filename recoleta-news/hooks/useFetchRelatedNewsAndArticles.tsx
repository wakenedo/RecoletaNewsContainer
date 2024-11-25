import { ContentProps } from '@/types/default-types';
import {
  ApiResponseError,
  InvalidContentTypeError,
  InvalidDataError,
  NetworkError,
} from '@/types/fetch-api-error-types';
import { useState, useEffect } from 'react';

const useFetchRelatedNewsAndArticles = (tags: string[]) => {
  const [content, setContent] = useState<ContentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedContent = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://recoleta-news-api.onrender.com/api/related/content`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tags }), // Send the tags in the body
          }
        );

        if (!res.ok) {
          throw new Error(`API responded with status ${res.status}`);
        }

        const data = await res.json();
        setContent(data.reverse()); // Set the related content in the state
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

    if (tags.length > 0) {
      fetchRelatedContent();
    }
  }, []);

  return { content, loading, error };
};

export default useFetchRelatedNewsAndArticles;
