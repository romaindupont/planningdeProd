import React from 'react';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import momentBusinessDays from 'moment-business-days';

const Popup = ({setStartClick, name, lctNumber,start, end,updatedLancement})=> {
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
    setStartClick(false);
  }
  const yesClick = () => {
    setStartClick(false);
    const debut =moment(start, 'YYYY-MM-DD HH:mm:ss')
    const fin =moment(end, 'YYYY-MM-DD HH:mm:ss')
    if(fin.workingDiff(debut, 'hours',true)<0){
      const addHours = fin.diff(debut, 'hours',true);
      const aujourdhui =moment().format('YYYY-MM-DD HH:mm:ss');
      const newEndDate = momentBusinessTime(aujourdhui, 'YYYY-MM-DD HH:mm:ss').addWorkingTime(addHours, 'hours')._d;
      const endDate = moment(newEndDate).format('YYYY-MM-DD HH:mm:ss');
      updatedLancement(aujourdhui,endDate)
    }
    else {
      const addHours = fin.workingDiff(debut, 'hours',true);
      const aujourdhui =moment().format('YYYY-MM-DD HH:mm:ss');
      const newEndDate = momentBusinessTime(aujourdhui, 'YYYY-MM-DD HH:mm:ss').addWorkingTime(addHours, 'hours')._d;
      const endDate = moment(newEndDate).format('YYYY-MM-DD HH:mm:ss');
      updatedLancement(aujourdhui,endDate);
    }
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
