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
          <img
            src={wave}
            alt="wave"
            className="band-member__img__wave position-absolute"
          />
          <h4 className="band-member__img__title position-absolute m-0 px-4">
            {bandMember.name}
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
