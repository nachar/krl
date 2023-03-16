import logo from '../../assets/img/header-nav/logo.png';
import './header-nav.scss';

function HeaderNav() {
  const header = [
    { name: 'Nosotros', url: '', key: 'nosotros' },
    { name: 'Banda', url: '', key: 'banda' },
    { name: 'Contacto', url: '', key: 'contacto' },
  ];

  return (
    <header className="container header-nav py-3">
      <nav className="row">
        <div className="col">
          <div className="d-flex justify-content-center">
            <a href="/">
              <img src={logo} alt="KRL Logo" className="header-nav__img" />
            </a>
          </div>

          <ul className="d-flex justify-content-center list-unstyled m-0">
            {header.map((item) => (
              <li key={item.key}>
                <a
                  href={item.url}
                  className="header-nav__link text-decoration-none p-2 px-lg-5 pt-lg-3 d-block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
