import React, { useState } from 'react';
import Field from '../../../containers/Lancement/Form/Field';
import Popup from '../../../containers/Lancement/Popup';

const Form = ({id})=> {
  const [startClick, setStartClick] = useState(false);
  const Commencer = (e) => {
    e.preventDefault();
    if(id!='') {
      setStartClick(true);
    }

  }
  return (
    <>
    <form className="form" action="" type="submit">
      <Field
        type="text"
        placeholder="lancement"
        name="lctNumber"
      />
      <Field
        type="text"
        placeholder="reference"
        name="name"
      />
      <Field
        type="text"
        placeholder="date début"
        name="start"
      />
      <Field
        type="text"
        placeholder="date fin"
        name="end"
      />
      <Field
        type="text"
        placeholder="id"
        name="id"
      />
      <div className="form-lct-button">
        <button type="submit" className="form-lct-button--debut" onClick={Commencer}>Débuter</button>
        <button type="submit" className="form-lct-button--fin">Finir</button>
      </div>
    </form>

    {startClick && (<Popup setStartClick={setStartClick}/>)}
    </>
  )
}
export default Form;
