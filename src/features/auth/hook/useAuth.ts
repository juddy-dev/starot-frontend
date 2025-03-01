// src/features/auth/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { getUser } from '../authService';

export function useAuth() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };

    checkUser();
  }, []);

  return user;
}
