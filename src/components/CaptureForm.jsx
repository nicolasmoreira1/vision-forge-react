import { useState } from 'react';

const SUBJECTS = [
  'Biologia',
  'Matemática',
  'História',
  'Física',
  'Química',
  'Português',
  'Geografia',
  'Inglês',
];

const EMPTY_DRAFT = {
  title: '',
  subject: SUBJECTS[0],
  summary: '',
  exercises: '5',
};

const inputStyle = 'px-3.5 py-2.5 font-normal border border-[var(--border-color)] rounded-lg';
const labelStyle = 'grid gap-1.5 text-sm font-bold text-[var(--primary-color)]';

function getTodayAsIsoDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${today.getFullYear()}-${month}-${day}`;
}

export default function CaptureForm({ onAdd }) {
  const [draft, setDraft] = useState(EMPTY_DRAFT);

  function updateField(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAdd({ ...draft, title: draft.title.trim(), capturedAt: getTodayAsIsoDate() });
    setDraft(EMPTY_DRAFT);
  }

  return (
    <form
      className="grid gap-4 p-7 mb-7 border border-[rgba(52,152,219,0.2)] rounded-[20px] bg-gradient-to-b from-white to-[#f8fbfe] shadow-[var(--shadow-soft)]"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl text-[var(--primary-color)]">Registrar nova captura</h3>

      <div className="grid md:grid-cols-[2fr_1fr_auto] gap-4">
        <label className={labelStyle}>
          Tema da aula
          <input
            type="text"
            required
            value={draft.title}
            onChange={(event) => updateField('title', event.target.value)}
            className={inputStyle}
          />
        </label>

        <label className={labelStyle}>
          Matéria
          <select
            value={draft.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            className={inputStyle}
          >
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>

        <label className={labelStyle}>
          Exercícios
          <input
            type="number"
            min="0"
            max="99"
            required
            value={draft.exercises}
            onChange={(event) => updateField('exercises', event.target.value)}
            className={`${inputStyle} w-[110px]`}
          />
        </label>
      </div>

      <label className={labelStyle}>
        Resumo gerado
        <textarea
          rows="2"
          required
          value={draft.summary}
          onChange={(event) => updateField('summary', event.target.value)}
          className={inputStyle}
        />
      </label>

      <button
        type="submit"
        className="justify-self-start px-5 py-3 font-bold text-white rounded-lg bg-[var(--secondary-color)] transition-colors duration-300 hover:bg-[var(--primary-color)]"
      >
        Adicionar captura
      </button>
    </form>
  );
}
