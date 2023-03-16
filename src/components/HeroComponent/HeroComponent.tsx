import heroImage from '../../assets/img/hero-component/hero-image.jpg';

function HeroComponent() {
  return (
    <section className="container-fluid gx-0">
      <div className="row">
        <div className="col">
          <img src={heroImage} alt="KRL Live" className="w-100" />
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
