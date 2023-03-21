import './contact-form.scss';

type Props = {
  label: string;
  name: string;
};

function FormTextArea({ label, name }: Props) {
  return (
    <div className="col-12">
      <label htmlFor="name" className="w-100">
        <span className="mb-1 d-block">{label}</span>
        <textarea
          className="form-control form-text-area"
          name={name}
          id={name}
          rows={3}
        />
      </label>
    </div>
  );
}

export default FormTextArea;
