import React from 'react';
import Field from '../../../../containers/Valorisation/WaitMaterial/Form/Field';

const Form = ({ transfertRefToValo, updatedProgress }) => {
  const transfertClic = (e) => {
    e.preventDefault();
    if (e.target.cout.value !='') {
      const Date = `${e.target._end.value.substring(8,10)}/${e.target._end.value.substring(5,7)}/${e.target._end.value.substring(0,4)}`
      const montantTt = (parseFloat(e.target.tempsop.value) *  parseInt(e.target.quantity.value)) + parseInt(e.target.cout.value)
      transfertRefToValo(3, e.target.planning_id.value,e.target.reference.value,e.target.tempsop.value,Date,e.target.quantity.value,e.target.cout.value,montantTt);
      updatedProgress(e.target.planning_id.value, 101)
    }
    else {
      console.log('c\'est pas bien')
    }
  }
  return (
    <form className="WaitMaterial-form" onSubmit={transfertClic}>
      <Field
        name="planning_id"
        placeholder="id"
        type="text"
      />
      <Field
        name="reference"
        placeholder="réference"
        type="text"
      />
      <Field
        name="tempsop"
        placeholder="temps"
        type="text"
      />
      <Field
        name="quantity"
        placeholder="quantite"
        type="text"
      />
      <Field
        name="_end"
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
