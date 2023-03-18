import { Products } from '../interfaces/interfaces';
import productTheNighters from '../assets/img/products/the-nighters.jpeg';
import productLuchoJarana from '../assets/img/products/lucho-jarana.jpeg';
import productKaraokeLive from '../assets/img/products/karaoke-live.jpeg';
import productPower from '../assets/img/products/powe-trio.jpeg';
import productKaraokeOnline from '../assets/img/products/karaoke-online.jpg';

const ProductsData: Products = [
  {
    title: 'The Nighters',
    description:
      "Rock, Funk y Disco. Recorrido por clásicos bailables de los 70's , 80's hasta la actualidad",
    image: productTheNighters,
    key: 'the-nighters',
  },
  {
    title: 'La Lucho Jarana',
    description:
      'Enciende tu fiesta con un show Full Bailable de cumbia, pachanga, y reggaeton',
    image: productLuchoJarana,
    key: 'la-lucho-jarana',
  },
  {
    title: 'Karaoke Live',
    description:
      'Espectáculo de música en vivo donde el público es el protagonista, más de 200 canciones interpretadas por músicos profesionales le dan la posibilidad a cualquier persona de subirse al escenario y sentirse como una estrella de rock',
    image: productKaraokeLive,
    key: 'karaoke-live',
  },
  {
    title: 'KRL Experience',
    description: 'Un Power Trío con los mejores clásicos del Rock y el Blues',
    image: productPower,
    key: 'krl-experience',
  },
  {
    title: 'Karaoke Online',
    description:
      'A raíz del confinamiento del año 2020 KRL crea un formato Online para cantar desde Casa tu canción favorita junto a los mejores músicos del país, donde tu serás el protagonista de un video de primer nivel',
    image: productKaraokeOnline,
    key: 'karaoke-online',
  },
];
export default ProductsData;