import './title-component.scss';
import titleImg from '../../assets/img/title/title.jpg';

type Props = {
  title: string;
};

function TitleComponent({ title }: Props) {
  return (
    <div className="title-component position-relative">
      <img className="title-component__img position-absolute w-100 h-100" src={titleImg} alt={title} />
      <div className="title-component__content position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="h1 m-0">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleComponent;
