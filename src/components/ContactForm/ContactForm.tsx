import React from 'react';
import TitleComponent from '../TitleComponent/TitleComponent';
import FormInput from './FormInput';

function ContactForm() {
  const sendForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('send form: ', e);
  };

  return (
    <div>
      <TitleComponent title="Contacto" />
      <div className="container py-5">
        <form className="row gy-3" onSubmit={sendForm}>
          <FormInput label="Nombre" type="text" name="name" key="name" />
          <FormInput
            label="Correo electrónico"
            type="email"
            name="email"
            key="email"
          />
          <FormInput label="Asunto" type="text" name="topic" key="topic" />
          <div className="col-12">
            <textarea className="form-control" />
          </div>
          <div className="col-12">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
