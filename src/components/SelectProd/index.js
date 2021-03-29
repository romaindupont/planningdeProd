import React from 'react';
import Select from './Select';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

const SelectProd = ()=> {
  const FORMAT = 'DD/MM/yyyy';
  return (
    <div className="selectProd">
    <Select />
    <DatePicker />
    <TimePicker />
    </div>
  )
}
export default SelectProd;
