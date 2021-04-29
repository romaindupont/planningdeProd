import React from 'react';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';

const Popup = ({setStartClick, name, lctNumber,start, end})=> {
  const noClick = () => {
    setStartClick(false);
  }
  const yesClick = () => {
    setStartClick(false);
    console.log(moment(end).workingDiff(moment(start), 'hours',true));
  }
  return (
    <div className="popup">
      <h1 className="popup-title">Etes-vous sûr de vouloir débuter ce lancement ?</h1>
      <p className="popup-text">lancement {lctNumber} : {name} </p>
      <button className="popup--oui" onClick={yesClick}>Oui</button>
      <button className="popup--non" onClick={noClick}>Non</button>
    </div>
  )
}
export default Popup;
