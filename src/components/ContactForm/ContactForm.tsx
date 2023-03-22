import React, { useState } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSubmitButton from './FormSubmitButton';
import ContactFormImage from './ContactFormImage';
import FormResults from './FormResults';
import sendApiForm from './SendForm';
import { Email } from '../../interfaces/interfaces';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    topic: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const updateFields = (updatedData: Partial<Email>) => {
    setFormData({ ...formData, ...updatedData });
  };
  const sendForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await sendApiForm(formData);
      setSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <TitleComponent title="Contacto" />
      <div className="container py-5">
        <div className="row">
          <ContactFormImage />
          {success || error ? (
            <FormResults success={success} error={error} />
          ) : (
            <div className="col-lg-6 d-flex align-items-center">
              <div className="ps-lg-5">
                <form className="row gy-3" onSubmit={sendForm}>
                  <FormInput
                    label="Nombre"
                    type="text"
                    name="name"
                    key="name"
                    value={formData.name}
                    updateFields={updateFields}
                  />
                  <FormInput
                    label="Correo electrónico"
                    type="email"
                    name="mail"
                    key="mail"
                    value={formData.mail}
                    updateFields={updateFields}
                  />
                  <FormInput
                    label="Asunto"
                    type="text"
                    name="topic"
                    key="topic"
                    value={formData.topic}
                    updateFields={updateFields}
                  />
                  <FormTextArea
                    label="Mensaje"
                    name="message"
                    key="message"
                    value={formData.message}
                    updateFields={updateFields}
                  />
                  <FormSubmitButton />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
