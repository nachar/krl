import './contact-form.scss';
import { Email } from '../../interfaces/interfaces';

type PropsValues = {
  label: string;
  name: string;
  value: string;
};

type Props = PropsValues & {
  updateFields: (updatedData: Partial<Email>) => void;
};

function FormTextArea({ label, name, value, updateFields }: Props) {
  const handleChange = (val: string) => {
    const data: Partial<Email> = {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data[name] = val;
    updateFields(data);
  };
  return (
    <div className="col-12">
      <label htmlFor="name" className="w-100">
        <span className="mb-1 d-block">{label}</span>
        <textarea
          className="form-control form-text-area"
          name={name}
          id={name}
          rows={3}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default FormTextArea;
