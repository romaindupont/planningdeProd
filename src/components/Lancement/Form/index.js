import React, { useState } from 'react';
import Field from '../../../containers/Lancement/Form/Field';
import Popup from '../../../containers/Lancement/Popup';
import PopupEnd from '../../../containers/Lancement/PopupEnd';
import PopupModif from '../../../containers/Lancement/PopupModif';

const Form = ({ id, setIsShowing }) => {
  const [ startClick, setStartClick ] = useState(false);
  const [ endClick, setEndClick ] = useState(false);
  const [ modifClick, setModifClick ] = useState(false);
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
  const Modif = (e) => {
    e.preventDefault();
    if (id != '') {
      setModifClick(true);
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
        <Field
          type="text"
          placeholder="quantity"
          name="quantity"
        />
        <div className="form-lct-button">
          <button type="submit" className="form-lct-button--debut" onClick={Commencer}>Débuter</button>
          <button type="submit" className="form-lct-button--fin" onClick={Finir}>Finir</button>
          <button type="submit" className="form-lct-button--debut" onClick={Modif}>Modification</button>
        </div>
      </form>
      {startClick && (<Popup setStartClick={setStartClick} setIsShowing={setIsShowing} />)}
      {endClick && (<PopupEnd setEndClick={setEndClick} setIsShowing={setIsShowing}/>)}
      {modifClick && (<PopupModif setModifClick={setModifClick} setIsShowing={setIsShowing}/>)}
    </>
  );
};

export default Form;
