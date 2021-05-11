import React from 'react';
import FieldReglages from './Field';

const FormReglages = ({ workingDayList }) => {
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
  }
  return (
      <form className="reglages-form" onSubmit={handleChange}>
        {workingDayList.map((day, i) =>
        <FieldReglages key={i} jour={day.numerojour} open_close={day.open_close} name={day.numerojour} />
        )}
        <div className="reglages-form-button">
          <button type="submit" className="reglages-form-button--modif" type="submit">Modifier</button>
        </div>
      </form>
  );
};

export default FormReglages;
