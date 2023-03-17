import './band-member.scss';
import bandIlan from '../../assets/img/band-members/ilan.jpeg';

function BandMember() {
  return (
    <li className="row band-member">
      <div className="col-lg-7">
        <div className="band-member__img">
          <img src={bandIlan} alt="Ilan" className="w-100 h-100" />
        </div>
      </div>
      <div className="col-lg-5">
        <h4 className="h1">ILan</h4>
        <h5 className="h3">Animación</h5>
        <p>
          Fundador de KRL Producciones SpA. Actor y Músico. Director de la
          primera orquesta de Rock & Clown del mundo , profesor de School Of
          Rock. La Ciscu Margaret Orquesta Clown, School of Rock , KRL. Se ha
          presentado en escenarios como; Movistar Arena, Quinta
          Vergara,Lollapalooza España, Francia, Perú, Colombia , Brasil y todo
          Chile.
        </p>
      </div>
    </li>
  );
}

export default BandMember;
