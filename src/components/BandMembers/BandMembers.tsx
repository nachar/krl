import TitleComponent from '../TitleComponent/TitleComponent';
import BandMember from './BandMember';

function BandMembers() {
  return (
    <section>
      <TitleComponent title="Banda" />
      <ul className="container py-5">
        <BandMember />
      </ul>
    </section>
  );
}

export default BandMembers;
