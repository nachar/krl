import { Social } from '../interfaces/interfaces';
import facebook from '../assets/img/social/facebook.svg';
import instagram from '../assets/img/social/instagram.svg';
import youtube from '../assets/img/social/youtube.svg';

const SocialData: Social = [
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

export default SocialData;
