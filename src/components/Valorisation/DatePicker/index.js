import React from 'react';
import DatePicker from '../../../containers/SelectProd/DatePicker';

const TwoDatePicker = () => {
  const datepickerValue = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value)
  }
  return (
    <form onSubmit={datepickerValue} className="twoDatePicker-form">
        du <DatePicker /> au <DatePicker />
        <button type="submit" >Valider</button>
    </form>
  );
};

export default TwoDatePicker;
