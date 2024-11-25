import { useState, useEffect } from 'react';
import {
  FetchApiError,
  ApiResponseError,
  NetworkError,
} from '@/types/fetch-api-error-types'; // Reuse your error types
import { ServerUserData } from '@/components/organisms/Header';
// Import user data types

export const useUserData = (_id: string | null, accessToken: string | null) => {
  const [userData, setUserData] = useState<ServerUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchApiError | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!_id || !accessToken) {
        setLoading(false);
        setError(
          new ApiResponseError(400, 'User ID or access token not found', 'user')
        );

        return;
      }

      try {
        const response = await fetch(
          `https://recoletaapi.onrender.com/api/users/find/${_id}`,
          {
            headers: { token: `Bearer ${accessToken}` },
          }
        );

        if (!response.ok) {
          throw new ApiResponseError(
            response.status,
            'Failed to fetch user data',
            'user'
          );
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new ApiResponseError(500, 'Expected JSON response', 'user');
        }

        const data: ServerUserData = await response.json();
        setUserData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(new NetworkError(err.message, 'user'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [_id, accessToken]);

  return { userData, loading, error };
};
