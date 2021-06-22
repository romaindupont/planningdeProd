import React, { useState } from 'react';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import momentBusinessDays from 'moment-business-days';
import Field from '../../../containers/Lancement/PopupEnd/Field';
import PopupMessage from '../../../containers/Popup';
import { openDate } from '../../../Utils/openDate';

const PopupEnd = ({
  setEndClick,
  name,
  lctNumber,
  start,
  end,
  updatedEnd,
  changeValue,
  currentValue,
  changePopup,
  popupWindow,
  setIsShowing
}) => {
  openDate();
  const noClick = () => {
    setEndClick(false);
  };
  const yesClick = (e) => {
    e.preventDefault();
    if(e.target.form.maintenant.checked && e.target.form.datedef.checked && e.target.form.dateFin.value === ''){
      changePopup(true, "Attention Vous ne devez selectionner qu'un bouton");
    }
    if(e.target.form.maintenant.checked && e.target.form.datedef.checked && e.target.form.dateFin.value !== ''){
      changePopup(true, "Attention Vous ne pouvez faire qu'un choix");
    }
    if(!e.target.form.maintenant.checked && e.target.form.datedef.checked && e.target.form.dateFin.value === '') {
      changePopup(true, "Attention Vous devez indiquer une date");
    }
    if(!e.target.form.maintenant.checked && !e.target.form.datedef.checked && e.target.form.dateFin.value === ''){
      changePopup(true, "Attention Vous devez faire un choix");
    }
    if(e.target.form.datedef.checked && !moment(e.target.form.dateFin.value, 'YYYY-MM-DD HH:mm:ss', true).isValid() && (!e.target.form.maintenant.checked)){
      changePopup(true, "Attention Le format de la date n'est pas le bon");
    }
    if(e.target.form.maintenant.checked && (!e.target.form.datedef.checked && e.target.form.dateFin.value === '')) {
      const aujourdhui = moment().format('YYYY-MM-DD HH:mm:ss');
      updatedEnd(aujourdhui);
      setEndClick(false);
      setIsShowing(true)
    }
    if(e.target.form.datedef.checked && moment(e.target.form.dateFin.value, 'YYYY-MM-DD HH:mm:ss', true).isValid() && (!e.target.form.maintenant.checked)) {
      updatedEnd(e.target.form.dateFin.value);
      setEndClick(false);
      setIsShowing(true)
    }
  };
  return (
    <div className="popup">
      <h1 className="popup-title">Etes-vous sûr de vouloir finir ce lancement ?</h1>
      <p className="popup-text">lancement {lctNumber} : {name} </p>
      <form className="popup-choice">
        <label>Maintenant
          <Field
            type="checkbox"
            name="maintenant"
          />
        </label>
        <label>Date à indiquer
        <Field
            type="checkbox"
            name="datedef"
          />
          <Field
            type="text"
            name="dateFin"
            placeholder="Format YYYY-MM-DD HH:mm:ss"
          />
        </label>
      <button className="popup--oui" type="submit" onClick={yesClick}>Oui</button>
      <button className="popup--non" onClick={noClick}>Non</button>
      </form>
      {popupWindow && (<PopupMessage />)}
    </div>
  );
};

export default PopupEnd;
