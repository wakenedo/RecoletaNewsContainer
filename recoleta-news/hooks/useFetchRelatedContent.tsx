import { ContentProps } from '@/types/default-types';
import { useState, useEffect } from 'react';

const useFetchRelatedContent = (
  type: string,
  tags: string[] | string,
  excludeId?: string
) => {
  const [content, setContent] = useState<ContentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedContent = async () => {
      try {
        setLoading(true);

        // Ensure the backend accepts both the content type and tags
        const res = await fetch(
          `https://recoleta-news-api.onrender.com/api/related/${type}`,
          {
            method: 'POST', // Send tags and type as part of the request
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tags }), // Send tags in the body
          }
        );

        if (!res.ok) {
          throw new Error(`API responded with status ${res.status}`);
        }

        const data = await res.json();

        // Exclude content with the same ID as the current one
        const filteredContent = excludeId
          ? data.filter((item: ContentProps) => item.id !== excludeId)
          : data;

        setContent(filteredContent); // Set the related content in the state
      } catch (err: unknown) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    if (tags.length > 0) {
      fetchRelatedContent();
    }
  }, [type, tags, excludeId]);

  return { content, loading, error };
};

export default useFetchRelatedContent;
