import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CaptureForm from '../components/CaptureForm';
import useAuth from '../hooks/useAuth';
import useCaptures from '../hooks/useCaptures';

function formatCaptureDate(isoDate) {
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

export default function Panel() {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, signOut } = useAuth();
  const { captures, error, isLoading, add, remove } = useCaptures();
  const navigate = useNavigate();

  const filteredCaptures = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    return captures.filter(
      (capture) =>
        capture.title.toLowerCase().includes(normalizedTerm) ||
        capture.subject.toLowerCase().includes(normalizedTerm)
    );
  }, [captures, searchTerm]);

  const totalExercises = filteredCaptures.reduce(
    (total, capture) => total + capture.exercises,
    0
  );
  const averageExercises = filteredCaptures.length
    ? Math.round(totalExercises / filteredCaptures.length)
    : 0;

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  return (
    <main className="py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>Central de Conteúdo</SectionTitle>

        <p className="max-w-[800px] mx-auto mb-7 text-center text-[#5c6b7a]">
          Tudo o que a câmera já capturou, reunido em uma visão única. As capturas ficam salvas
          neste navegador, então continuam aqui quando você voltar.
        </p>

        <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
          <p className="text-[#5c6b7a]">Sessão de {user}</p>
          <button
            type="button"
            onClick={handleSignOut}
            className="px-4 py-2.5 font-bold text-white rounded-lg bg-[var(--primary-color)] transition-colors duration-300 hover:bg-[var(--secondary-color)]"
          >
            Sair
          </button>
        </div>

        <CaptureForm onAdd={add} />

        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Buscar por tema ou matéria"
          className="w-full px-4 py-3 mb-7 border border-[var(--border-color)] rounded-lg"
        />

        {isLoading && <p className="text-center">Carregando capturas...</p>}
        {error && <p className="text-center text-red-600">Não foi possível carregar: {error}</p>}

        {!isLoading && !error && (
          <>
            <p className="mb-5 text-[#5c6b7a]">
              {filteredCaptures.length} {filteredCaptures.length === 1 ? 'captura' : 'capturas'} ·{' '}
              {totalExercises} exercícios gerados · média de {averageExercises} por aula
            </p>

            {filteredCaptures.length === 0 && (
              <p className="text-center">Nenhuma captura por aqui. Registre a primeira acima.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCaptures.map((capture) => (
                <article
                  key={capture.id}
                  className="flex flex-col p-5 border border-[var(--border-color)] rounded-lg bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-[5px]"
                >
                  <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--secondary-color)]">
                    {capture.subject}
                  </p>
                  <h3 className="mb-2.5 text-[1.05rem] text-[var(--primary-color)]">
                    {capture.title}
                  </h3>
                  <p className="mb-3.5 text-sm">{capture.summary}</p>
                  <p className="mt-auto text-sm text-[#5c6b7a]">
                    Capturado em {formatCaptureDate(capture.capturedAt)} · {capture.exercises}{' '}
                    exercícios
                  </p>
                  <button
                    type="button"
                    onClick={() => remove(capture.id)}
                    className="mt-3.5 self-start text-sm font-bold text-red-600 hover:underline"
                  >
                    Excluir captura
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
