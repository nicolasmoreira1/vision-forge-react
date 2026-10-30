import { useState } from 'react';

const STORAGE_KEY = 'vision-forge-user';
const DEMO_EMAIL = 'aluno@visionforge.com';
const DEMO_PASSWORD = 'jovi2026';

function readStoredUser() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function useAuth() {
  const [user, setUser] = useState(readStoredUser);

  function signIn(email, password) {
    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      return 'E-mail ou senha inválidos.';
    }

    window.localStorage.setItem(STORAGE_KEY, email);
    setUser(email);
    return null;
  }

  function signOut() {
    window.localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return { user, signIn, signOut };
}
