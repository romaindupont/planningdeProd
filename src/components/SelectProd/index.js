import React from 'react';
import Select from '../../containers/SelectProd/Select';
import DatePicker from '../../containers/SelectProd/DatePicker';
import TimePicker from '../../containers/SelectProd/TimePicker';
import Quantity from '../../containers/SelectProd/Quantity';

const SelectProd = ({
  reference,
  start_date,
  start_hours,
  quantity,
  end_date,
  start,
  operating_time,
  lancement,
})=> {

 const handleClick = (e) => {
  //console.log(operating_time)
    e.preventDefault();
    //console.log(lancement)
    lancement.forEach(lct => console.log(e.target.quantity.value*lct.operating_time))
    //console.log(e.target.reference.value,e.target.timepicker.value,e.target.quantity.value,e.target.datepicker.value)
    const calcul = operating_time*parseInt(e.target.quantity.value);
    console.log(((calcul/60)/7)*1.4)
  }
  return (
    <div className="selectProd">
      <form onSubmit={handleClick}>
        <Select />
        <DatePicker name="datepicker"/>
        <TimePicker name="timepicker"/>
        <Quantity name="quantity"/>
      <button type="submit">essai</button>
      </form>
    </div>
  )
}
export default SelectProd;
