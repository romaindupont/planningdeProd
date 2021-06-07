import React, { useState } from 'react';
import Popup from '../../containers/Reglages/Popup';
import FieldReglages from './Field';

const FormReglages = ({ workingDayList, updateWorkingDay }) => {
  const [ isShowing, setIsShowing ] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateWorkingDay(0, e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value);
    updateWorkingDay(1, e.target[5].value, e.target[6].value, e.target[7].value, e.target[8].value, e.target[9].value);
    updateWorkingDay(2, e.target[10].value, e.target[11].value, e.target[12].value, e.target[13].value, e.target[14].value);
    updateWorkingDay(3, e.target[15].value, e.target[16].value, e.target[17].value, e.target[18].value, e.target[19].value);
    updateWorkingDay(4, e.target[20].value, e.target[21].value, e.target[22].value, e.target[23].value, e.target[24].value);
    updateWorkingDay(5, e.target[25].value, e.target[26].value, e.target[27].value, e.target[28].value, e.target[29].value);
    updateWorkingDay(6, e.target[30].value, e.target[31].value, e.target[32].value, e.target[33].value, e.target[34].value);
    setIsShowing(true);
  };
  return (
    <form className="reglages-form" onSubmit={handleSubmit}>
      {workingDayList.map((day, i) =>
        <FieldReglages key={i} jour={day.numerojour} open_close={day.open_close} name={day.numerojour} />
      )}
      <div className="reglages-form-button">
        <button type="submit" className="reglages-form-button--modif" type="submit">Modifier</button>
      </div>
      {isShowing && (<Popup setIsShowing={setIsShowing} />)}
    </form>
  );
};

export default FormReglages;
