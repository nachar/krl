import bandIlan from '../assets/img/band-members/ilan.jpeg';
import bandMike from '../assets/img/band-members/miguel.jpeg';
import bandDani from '../assets/img/band-members/daniel.jpeg';
import bandChalo from '../assets/img/band-members/chalo.jpeg';
import bandBenja from '../assets/img/band-members/benja.jpeg';
import { BandMembers } from '../interfaces/interfaces';

const BandMembersData: BandMembers = [
  {
    key: 'ilan',
    name: 'Ilan',
    role: 'Animación',
    description:
      'Fundador de KRL Producciones SpA. Actor y Músico. Director de la primera orquesta de Rock & Clown del mundo , profesor de School Of Rock. La Ciscu Margaret Orquesta Clown, School of Rock , KRL. Se ha presentado en escenarios como; Movistar Arena, Quinta Vergara,Lollapalooza España, Francia, Perú, Colombia , Brasil y todo Chile.',
    image: bandIlan,
  },
  {
    key: 'mike',
    name: 'Mike',
    role: 'Guitarra',
    description:
      'Fundador de KRL Producciones SpA . Músico, Compositor, arreglista. “Estudios especializados de Guitarra electrica en Universidad Musicians Institute (MI) Los Angeles, Hollywood, California.”. Cantante, compositor y guitarrista de la banda Vinilos (2010 - 2015), La Discreta Era (2016) y KRL . Director artístico, musical y guitarrista de Miguelo, girando constantemente de Arica a Punta Arenas por casinos Enjoy y Dreams.Profesor de guitarra en School Of Rock.',
    image: bandMike,
  },
  {
    key: 'dani',
    name: 'Dani',
    role: 'Bajo',
    description:
      'Co-Fundador de KRL Producciones SpA. Músico compositor y arreglista con especialidad en bajo eléctrico y contrabajo. “Titulado de Pedagogía en la Universidad de Chile”. Eventos y giras con destacados artistas nacionales por dentro de chile (Mario Guerrero, Neven Ilic, Miguelo, Alexis Fuentes, Jorge Bravo, Sonora Palacios, entre otros) y también en giras internacionales en conjunto con sus bandas (Aisles, Pelusa, Cala, entre otros).',
    image: bandDani,
  },
  {
    key: 'chalo',
    name: 'Chalo',
    role: 'Teclado',
    description:
      'Co-Fundador de KRL Producciones SpA. Músico compositor con especialidad en Piano. Ha participado en múltiples proyectos de diversos géneros (jazz, fusión latinoamericana, fusión flamenco, entre otros). Se ha presentado en escenarios como Lollapalooza y otros escenarios importantes del país.',
    image: bandChalo,
  },
  {
    key: 'benja',
    name: 'Benja',
    role: 'Batería',
    description:
      'Fundador de KRL Producciones SpA. Músico Baterista y Percusionista de sesión.“Licenciado en Música & Sonido con mención en Batería y Producción Musical”. Actual baterista de We Are The Grand y KRL, tocó en Los Verdaderos Cabrera hasta 2016 y Vinilos hasta 2015. Percusionista de La Ciscu Margaret, profesor de Batería. Se ha presentado en escenarios como; Lollapalooza, La Cumbre del Rock Chileno, Festival FiiS, México, Perú y en diferentes escenarios, hoteles y casinos a lo largo de todo Chile.',
    image: bandBenja,
  },
];

export default BandMembersData;
