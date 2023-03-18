import './band-member.scss';
import { BandMember } from '../../interfaces/interfaces';
import wave from '../../assets/img/band-members/wave.png';

type Props = {
  bandMember: BandMember;
};

function BandMemberDetail({ bandMember }: Props) {
  return (
    <li className="row band-member">
      <div className="col-lg-8">
        <div className="band-member__img position-relative">
          <img
            src={bandMember.image}
            alt={bandMember.name}
            className="w-100 h-100"
          />
          <h4 className="band-member-img-title position-absolute m-0 d-flex justify-content-center align-items-center">
            <img
              src={wave}
              alt="wave"
              className="band-member-img-title__wave position-absolute"
            />
            <span className="position-relative">{bandMember.name}</span>
          </h4>
        </div>
      </div>
      <div className="col d-flex align-items-center mt-3 mt-lg-0">
        <div className="band-member-info">
          <h5 className="h1">{bandMember.role}</h5>
          <p className="m-0">{bandMember.description}</p>
        </div>
      </div>
    </li>
  );
}

export default BandMemberDetail;
