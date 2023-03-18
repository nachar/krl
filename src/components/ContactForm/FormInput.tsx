import React from 'react';

type Props = {
  label: string;
  type: string;
  name: string;
};

function FormInput({ label, type, name }: Props) {
  return (
    <div className="col-12">
      <label htmlFor="name" className="w-100">
        <span className="mb-1 d-block">{label}</span>
        <input type={type} className="form-control" name={name} id={name} />
      </label>
    </div>
  );
}

export default FormInput;
