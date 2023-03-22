import successImage from '../../assets/img/icons/success.svg';
import successError from '../../assets/img/icons/error.svg';
import './contact-form.scss';

type Props = {
  success: boolean;
  error: boolean;
};
function FormResults({ success, error }: Props) {
  return (
    <div className="col-lg-6 d-flex align-items-center justify-content-center">
      {success ? (
        <div className="ps-lg-5 text-center">
          <img
            src={successImage}
            alt="La información se envió correctamente"
            className="form-result-image mb-2"
          />
          <p className="m-0 fw-bold">
            La información se envió correctamente
          </p>
        </div>
      ) : null}

      {error ? (
        <div className="ps-lg-5">
          <img
            src={successError}
            alt="Ocurrió un error"
            className="form-result-image mb-2"
          />
          <p className="m-0 fw-bold">Ocurrió un error</p>
        </div>
      ) : null}
    </div>
  );
}

export default FormResults;
