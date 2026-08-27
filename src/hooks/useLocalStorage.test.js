import assert from 'node:assert/strict';
import test from 'node:test';

import { readStoredValue } from './useLocalStorage.js';

test('returns the initial value when browser storage is unavailable', () => {
  assert.deepEqual(readStoredValue('solution-checklist', [false, false]), [false, false]);
});

test('reads the stored JSON value when browser storage is available', () => {
  const originalWindow = globalThis.window;

  globalThis.window = {
    localStorage: {
      getItem: () => '["done",false]',
    },
  };

  try {
    assert.deepEqual(readStoredValue('solution-checklist', ['fallback']), ['done', false]);
  } finally {
    globalThis.window = originalWindow;
  }
});

test('falls back to the initial value when stored JSON is invalid', () => {
  const originalWindow = globalThis.window;

  globalThis.window = {
    localStorage: {
      getItem: () => 'not valid json',
    },
  };

  try {
    assert.deepEqual(readStoredValue('solution-checklist', ['fallback']), ['fallback']);
  } finally {
    globalThis.window = originalWindow;
  }
});

test('falls back to the initial array when stored JSON has the wrong shape', () => {
  const originalWindow = globalThis.window;

  globalThis.window = {
    localStorage: {
      getItem: () => '"not an array"',
    },
  };

  try {
    assert.deepEqual(readStoredValue('solution-checklist', ['fallback']), ['fallback']);
  } finally {
    globalThis.window = originalWindow;
  }
});

test('normalizes stored checklist arrays to the initial length and booleans', () => {
  const originalWindow = globalThis.window;

  globalThis.window = {
    localStorage: {
      getItem: () => '[true,"yes",false,true,true]',
    },
  };

  try {
    assert.deepEqual(
      readStoredValue('solution-checklist', [false, false, false, false]),
      [true, false, false, true]
    );
  } finally {
    globalThis.window = originalWindow;
  }
});
