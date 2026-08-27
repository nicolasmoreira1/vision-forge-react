export default function Header({ brand, navigation }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#solucao" aria-label={brand.name}>
          <img className="header__logo" src={brand.logo} alt={brand.alt} />
        </a>

        <nav className="nav-menu" aria-label="Seções da página">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
