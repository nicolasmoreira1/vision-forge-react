import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import useAuth from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const signInError = signIn(email.trim(), password);

    if (signInError) {
      setErrorMessage(signInError);
      return;
    }

    navigate('/painel');
  }

  return (
    <main className="py-20">
      <div className="max-w-[420px] mx-auto px-5">
        <SectionTitle>Entrar no Painel</SectionTitle>

        <form
          className="grid gap-4 p-7 border border-[var(--border-color)] rounded-2xl bg-white shadow-[var(--shadow-soft)]"
          onSubmit={handleSubmit}
        >
          <label className="grid gap-1.5 text-sm font-bold text-[var(--primary-color)]">
            E-mail
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="px-3.5 py-2.5 font-normal border border-[var(--border-color)] rounded-lg"
            />
          </label>

          <label className="grid gap-1.5 text-sm font-bold text-[var(--primary-color)]">
            Senha
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="px-3.5 py-2.5 font-normal border border-[var(--border-color)] rounded-lg"
            />
          </label>

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            className="px-4 py-3 font-bold text-white rounded-lg bg-[var(--secondary-color)] transition-colors duration-300 hover:bg-[var(--primary-color)]"
          >
            Entrar
          </button>

          <p className="text-sm text-[#5c6b7a]">
            Acesso de teste: aluno@visionforge.com / jovi2026
          </p>
        </form>
      </div>
    </main>
  );
}
