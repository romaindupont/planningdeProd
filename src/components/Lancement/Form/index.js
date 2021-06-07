import React, { useState } from 'react';
import Field from '../../../containers/Lancement/Form/Field';
import Popup from '../../../containers/Lancement/Popup';
import PopupEnd from '../../../containers/Lancement/PopupEnd';

const Form = ({ id }) => {
  const [ startClick, setStartClick ] = useState(false);
  const [ endClick, setEndClick ] = useState(false);
  const Commencer = (e) => {
    e.preventDefault();
    if (id != '') {
      setStartClick(true);
    }
  };
  const Finir = (e) => {
    e.preventDefault();
    if (id != '') {
      setEndClick(true);
    }
  };
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
        <Field
          type="text"
          placeholder="quantity"
          name="quantity"
        />
        <div className="form-lct-button">
          <button type="submit" className="form-lct-button--debut" onClick={Commencer}>Débuter</button>
          <button type="submit" className="form-lct-button--fin" onClick={Finir}>Finir</button>
        </div>
      </form>
      {startClick && (<Popup setStartClick={setStartClick} />)}
      {endClick && (<PopupEnd setEndClick={setEndClick} />)}
    </>
  );
};

export default Form;
