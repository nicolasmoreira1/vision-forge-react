import { useEffect } from 'react';
import useFetch from './useFetch.js';
import useLocalStorage from './useLocalStorage.js';

const CAPTURES_API_URL = '/api/captures.json';
const STORAGE_KEY = 'vision-forge-captures';

export function buildNextId(captures) {
  const highestId = captures.reduce((highest, capture) => Math.max(highest, capture.id), 0);
  return highestId + 1;
}

export function addCapture(captures, draft) {
  const newCapture = {
    id: buildNextId(captures),
    title: draft.title,
    subject: draft.subject,
    summary: draft.summary,
    exercises: Number(draft.exercises),
    capturedAt: draft.capturedAt,
  };

  return [newCapture, ...captures];
}

export function removeCapture(captures, captureId) {
  return captures.filter((capture) => capture.id !== captureId);
}

export default function useCaptures() {
  const [storedCaptures, setStoredCaptures] = useLocalStorage(STORAGE_KEY, null);
  const { data, error, isLoading } = useFetch(CAPTURES_API_URL);
  const hasStoredCaptures = storedCaptures !== null;

  useEffect(() => {
    if (!hasStoredCaptures && data) {
      setStoredCaptures(data);
    }
  }, [data, hasStoredCaptures, setStoredCaptures]);

  return {
    captures: storedCaptures ?? [],
    error,
    isLoading: isLoading && !hasStoredCaptures,
    add: (draft) => setStoredCaptures((current) => addCapture(current ?? [], draft)),
    remove: (captureId) => setStoredCaptures((current) => removeCapture(current ?? [], captureId)),
  };
}
