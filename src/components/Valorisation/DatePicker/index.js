import React, { useEffect } from 'react';
import DatePicker from '../../../containers/SelectProd/DatePicker';

const TwoDatePicker = ({ saveDateSearch, dateOne, dateTwo, newTotal }) => {
  const datepickerValue = (e) => {
    e.preventDefault();
    saveDateSearch(e.target[0].value, e.target[1].value)
  }
  useEffect(() => {
    newTotal();
  }, [datepickerValue]);
  return (
    <form onSubmit={datepickerValue} className="twoDatePicker-form">
        du <DatePicker /> au <DatePicker />
        <button type="submit" >Valider</button>
    </form>
  );
};

export default TwoDatePicker;
