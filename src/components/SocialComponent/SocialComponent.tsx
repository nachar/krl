import SocialData from '../../data/SocialData';
import './social-component.scss';
import { SocialItem } from '../../interfaces/interfaces';

function SocialComponent() {
  return (
    <div className="social position-absolute d-flex justify-content-center w-100">
      <ul className="social__list list-unstyled d-flex rounded-4 m-0 px-4 py-2">
        {SocialData.map((item: SocialItem) => (
          <li className="social__list__item" key={item.key}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
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
  );
}

export default SocialComponent;
