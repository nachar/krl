import TitleComponent from '../TitleComponent/TitleComponent';
import BandMembersData from '../../data/BandMembersData';
import { BandMember } from '../../interfaces/interfaces';
import BandMemberDetail from './BandMemberDetail';

function BandMembers() {
  return (
    <section>
      <TitleComponent title="Banda" />
      <ul className="container py-5">
        {BandMembersData.map((bandMember: BandMember) => (
          <BandMemberDetail key={bandMember.key} bandMember={bandMember} />
        ))}
      </ul>
    </section>
  );
}

export default BandMembers;
