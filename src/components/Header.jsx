import { Link } from 'react-router-dom';

export default function Header({ brand, navigation }) {
  return (
    <header className="sticky top-0 z-[1000] bg-[var(--primary-color)] text-white shadow-[var(--shadow-soft)]">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-center md:justify-between gap-6 py-5 flex-wrap">
        <Link className="inline-flex items-center" to="/" aria-label={brand.name}>
          <img className="max-h-[60px] w-auto rounded-lg" src={brand.logo} alt={brand.alt} />
        </Link>

        <nav aria-label="Seções da página">
          <ul className="flex list-none gap-5 flex-wrap justify-center">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="no-underline font-medium transition-colors duration-300 hover:text-[var(--secondary-color)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                className="no-underline font-medium transition-colors duration-300 hover:text-[var(--secondary-color)]"
                to="/painel"
              >
                Painel
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
