import assert from 'node:assert/strict';
import test from 'node:test';

import { addCapture, buildNextId, removeCapture } from './useCaptures.js';

const existingCaptures = [
  { id: 2, title: 'Leis de Newton', subject: 'Física', summary: 'Resumo', exercises: 7 },
  { id: 5, title: 'Bhaskara', subject: 'Matemática', summary: 'Resumo', exercises: 8 },
];

const draft = {
  title: 'Tabela periódica',
  subject: 'Química',
  summary: 'Resumo da foto',
  exercises: '4',
  capturedAt: '2026-10-30',
};

test('o próximo id é maior que todos os existentes', () => {
  assert.equal(buildNextId(existingCaptures), 6);
});

test('o primeiro id de uma lista vazia é 1', () => {
  assert.equal(buildNextId([]), 1);
});

test('a captura nova entra no topo da lista e converte exercícios em número', () => {
  const result = addCapture(existingCaptures, draft);

  assert.equal(result.length, 3);
  assert.equal(result[0].title, 'Tabela periódica');
  assert.equal(result[0].exercises, 4);
  assert.equal(result[0].id, 6);
});

test('adicionar não altera a lista original', () => {
  addCapture(existingCaptures, draft);

  assert.equal(existingCaptures.length, 2);
});

test('remover tira apenas a captura do id informado', () => {
  const result = removeCapture(existingCaptures, 2);

  assert.deepEqual(
    result.map((capture) => capture.id),
    [5]
  );
});

test('remover um id inexistente mantém a lista intacta', () => {
  assert.equal(removeCapture(existingCaptures, 99).length, 2);
});
