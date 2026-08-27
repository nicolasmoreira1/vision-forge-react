import { useEffect, useState } from 'react';

function resolveInitialValue(initialValue) {
  return typeof initialValue === 'function' ? initialValue() : initialValue;
}

function normalizeArrayValue(storedValue, fallbackValue) {
  return fallbackValue.map((fallbackItem, index) => {
    const storedItem = storedValue[index];

    if (typeof fallbackItem === 'boolean') {
      return typeof storedItem === 'boolean' ? storedItem : fallbackItem;
    }

    return storedItem === undefined ? fallbackItem : storedItem;
  });
}

export function readStoredValue(key, initialValue) {
  const fallbackValue = resolveInitialValue(initialValue);

  if (typeof window === 'undefined') {
    return fallbackValue;
  }

  try {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue === null) {
      return fallbackValue;
    }

    const parsedValue = JSON.parse(storedValue);

    if (Array.isArray(fallbackValue)) {
      if (!Array.isArray(parsedValue)) {
        return fallbackValue;
      }

      const shouldNormalizeBooleans = fallbackValue.every((item) => typeof item === 'boolean');

      if (!shouldNormalizeBooleans) {
        return parsedValue;
      }

      return normalizeArrayValue(parsedValue, fallbackValue);
    }

    return parsedValue;
  } catch {
    return fallbackValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage errors so the UI keeps working.
    }
  }, [key, value]);

  return [value, setValue];
}
