import logo from '../../assets/img/header-nav/logo.png';
import './header-nav.scss';
import { HeaderItem } from '../../interfaces/interfaces';
import HeaderData from '../../data/HeaderData';

function HeaderNav() {
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
            {HeaderData.map((item: HeaderItem) => (
              <li key={item.key}>
                <a
                  href={item.url}
                  className="header-nav__link text-decoration-none d-block p-2 pt-3 px-md-4 px-lg-5 fw-bold"
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
