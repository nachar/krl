import logo from '../../assets/img/header-nav/logo.png';

function HeaderNav() {
  const header = [
    { name: 'Nosotros', url: '', key: 'nosotros' },
    { name: 'Banda', url: '', key: 'banda' },
    { name: 'Contacto', url: '', key: 'contacto' },
  ];

  return (
    <header>
      <nav className="">
        <a href="/">
          <img src={logo} alt="KRL Logo" />
        </a>
        <ul>
          {header.map((item) => (
            <li key={item.key}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
