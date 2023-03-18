import './band-member.scss';
import { BandMember } from '../../interfaces/interfaces';

type Props = {
  bandMember: BandMember;
};

function BandMemberDetail({ bandMember }: Props) {
  return (
    <li className="row band-member">
      <div className="col-lg-7">
        <div className="band-member__img">
          <img
            src={bandMember.image}
            alt={bandMember.name}
            className="w-100 h-100"
          />
        </div>
      </div>
      <div className="col-lg-5">
        <h4 className="h1">{bandMember.name}</h4>
        <h5 className="h3">{bandMember.role}</h5>
        <p>{bandMember.description}</p>
      </div>
    </li>
  );
}

export default BandMemberDetail;
