import facebook from '../../assets/img/social/facebook.svg';
import instagram from '../../assets/img/social/instagram.svg';
import youtube from '../../assets/img/social/youtube.svg';
import './social-component.scss';
import { Social } from '../../interfaces/interfaces';

function SocialComponent() {
  const socialItems: Social = [
    {
      key: 'facebook',
      icon: facebook,
      url: 'https://www.facebook.com/karaokelivechile',
      alt: 'KRL Facebook',
    },
    {
      key: 'instagram',
      icon: instagram,
      url: 'https://www.instagram.com/krlproducciones',
      alt: 'KRL Instagram',
    },
    {
      key: 'youtube',
      icon: youtube,
      url: 'https://www.youtube.com/watch?v=XoPpTkpxE2o',
      alt: 'KRL YouTube',
    },
  ];

  return (
    <div className="social position-absolute d-flex justify-content-center w-100">
      <ul className="social__list list-unstyled d-flex rounded-4 m-0 px-4 py-2">
        {socialItems.map((item) => (
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
