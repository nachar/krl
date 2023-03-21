import './footer-component.scss';
import SocialData from '../../data/SocialData';
import { SocialItem } from '../../interfaces/interfaces';

function FooterComponent() {
  return (
    <footer className="footer-component py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <ul className="social__list list-unstyled d-flex rounded-4 m-0 px-4 py-2">
                {SocialData.map((item: SocialItem) => (
                  <li className="social__list__item" key={item.key}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.icon}
                        alt="KRL Facebook"
                        className="social__list__item__icon"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
