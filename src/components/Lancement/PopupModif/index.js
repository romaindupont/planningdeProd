import React from 'react';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import momentBusinessDays from 'moment-business-days';
import Field from '../../../containers/Lancement/PopupEnd/Field';
import PopupMessage from '../../../containers/Popup';


const PopupModif = ({ lctNumber, name, popupWindow, setModifClick, updatedQuantity, setIsShowing }) => {
  const yesClick = (e) => {
    e.preventDefault();
    if (e.target.form.quantite.value != '') {
      updatedQuantity(e.target.form.quantite.value)
      setModifClick(false)
      setIsShowing(true)
    }
  };
  const noClick = (e) => {
    e.preventDefault();
    setModifClick(false)

  };
  return (
    <div className="popup">
      <h1 className="popup-title">Changement de quantité ?</h1>
      <p className="popup-text">lancement {lctNumber} : {name} </p>
      <form className="popup-choice">
        <label>Quantité
          <Field
            type="text"
            name="quantite"
            placeholder="quantité"
          />
        </label>
      <button className="popup--oui" type="submit" onClick={yesClick}>Oui</button>
      <button className="popup--non" onClick={noClick}>Non</button>
      </form>
      {popupWindow && (<PopupMessage />)}
    </div>
  );
};

export default PopupModif;
