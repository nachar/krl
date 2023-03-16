import heroImage from '../../assets/img/hero-component/hero-image.jpg';
import './header-component.scss';

function HeroComponent() {
  return (
    <section className="header-component">
      <img
        src={heroImage}
        alt="KRL Live"
        className="w-100 h-100 header-component__img"
      />
    </section>
  );
}

export default HeroComponent;
