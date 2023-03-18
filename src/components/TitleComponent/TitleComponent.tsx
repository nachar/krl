import './title-component.scss';
import titleImg from '../../assets/img/title/title.jpg';

type Props = {
  title: string;
};

function TitleComponent({ title }: Props) {
  return (
    <div className="title-component">
      <div className="container py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="m-0">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleComponent;
