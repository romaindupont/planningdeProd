import React from 'react';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import momentBusinessDays from 'moment-business-days';

const PopupEnd = ({setEndClick, name, lctNumber,start, end,updatedEnd})=> {
  moment.updateLocale('fr', {
    workinghours: {
        0: null,
        1: ['08:00:00', '12:00:00', '12:30:00', '16:20:00'],
        2: ['08:00:00', '12:00:00', '12:30:00', '16:20:00'],
        3: ['08:00:00', '12:00:00', '12:30:00', '16:20:00'],
        4: ['08:00:00', '12:00:00', '12:30:00', '16:20:00'],
        5: ['08:00:00', '12:00:00', '12:30:00', '16:20:00'],
        6: null
    }
});
  moment.locale('fr');
  const noClick = () => {
    setEndClick(false);
  }
  const yesClick = () => {
    setEndClick(false);


  }
  return (
    <div className="popup">
      <h1 className="popup-title">Etes-vous sûr de vouloir débuter ce lancement ?</h1>
      <p className="popup-text">lancement {lctNumber} : {name} </p>
      <div className="popup-choice">
        <label>Maintenant
          <input type="checkbox" name="maintenant" id="1"/>
        </label>
        <label>Date à indiquer
          <input type="checkbox" name="datedef" id="2"/>
          <input type="text" placeholder="Format YYYY-MM-DD HH:mm:ss" />
        </label>
      </div>
      <button className="popup--oui" onClick={yesClick}>Oui</button>
      <button className="popup--non" onClick={noClick}>Non</button>
    </div>
  )
}
export default PopupEnd;
