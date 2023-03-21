import React from 'react';
import TitleComponent from '../TitleComponent/TitleComponent';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSubmitButton from './FormSubmitButton';
import contactFormImage from '../../assets/img/contact-form/contact-form.jpg';

function ContactForm() {
  const sendForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('send form: ', e);
  };

  return (
    <div>
      <TitleComponent title="Contacto" />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="contact-form-image">
              <img
                src={contactFormImage}
                alt="Formulario de contacto"
                className="w-100 h-100"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="ps-lg-5">
              <form className="row gy-3" onSubmit={sendForm}>
                <FormInput label="Nombre" type="text" name="name" key="name" />
                <FormInput
                  label="Correo electrónico"
                  type="email"
                  name="email"
                  key="email"
                />
                <FormInput
                  label="Asunto"
                  type="text"
                  name="topic"
                  key="topic"
                />
                <FormTextArea label="Mensaje" name="message" key="message" />
                <FormSubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
