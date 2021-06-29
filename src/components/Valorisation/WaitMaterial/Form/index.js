import React from 'react';
import Field from '../../../../containers/Valorisation/WaitMaterial/Form/Field';

const Form = () => {
  return (
    <form className="WaitMaterial-form">
      <Field
        name="id"
        placeholder="id"
        type="text"
      />
      <Field
        name="reference"
        placeholder="réference"
        type="text"
      />
      <Field
        name="temps"
        placeholder="temps"
        type="text"
      />
      <Field
        name="quantite"
        placeholder="quantite"
        type="text"
      />
      <Field
        name="dateFin"
        placeholder="date fin"
        type="text"
      />
      <Field
        name="cout"
        placeholder="coût matière"
        type="text"
      />
      <button type="submit">Transférer</button>
    </form>
  );
};

export default Form;
