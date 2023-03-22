import contactFormImage from '../../assets/img/contact-form/contact-form.jpg';

function ContactFormImage() {
  return (
    <div className="col-lg-6 d-none d-lg-block">
      <div className="contact-form-image">
        <img
          src={contactFormImage}
          alt="Formulario de contacto"
          className="w-100 h-100"
        />
      </div>
    </div>
  );
}

export default ContactFormImage;
