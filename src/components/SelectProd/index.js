import React, { useState } from 'react';
import Select from '../../containers/SelectProd/Select';
import DatePicker from '../../containers/SelectProd/DatePicker';
import TimePicker from '../../containers/SelectProd/TimePicker';
import Quantity from '../../containers/SelectProd/Quantity';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import {generateId} from '../../Utils';

const SelectProd = ({
  reference,
  start_date,
  start_hours,
  quantity,
  end_date,
  start,
  operating_time,
  lancement,
  addTasks,
  tasks,
  saveCalculStart,
  calculStart,
})=> {
 const handleClick = (e) => {
    e.preventDefault();
    const newId = String(generateId(tasks));
    const calcul = operating_time*parseInt(e.target.quantity.value);
    const dayTime= Math.floor(((calcul/60)/7.8)/0.4);
    const timeHours = Math.ceil(((((calcul/60)/7.8)/0.4) - Math.floor(((calcul/60)/7.8)/0.4))*7.8);
    const c = (e.target.datepicker.value + ' ' + e.target.timepicker.value);
    const a = momentBusinessDays(c, 'DD/MM/YYYY HH:mm:ss').businessAdd(dayTime, 'days');
    const g = moment(c).format('YYYY-DD-MM HH:mm:ss');
    const v = momentBusinessDays(a, 'DD/MM/YYYY HH:mm:ss').businessAdd(timeHours, 'hours')._d;
    const r = moment(v).format('YYYY-MM-DD HH:mm:ss');
    addTasks(newId,e.target.reference.value,g,r,10,'');

    lancement.forEach(lct => {

     /*  if(lct.article_name.includes('OP1')) { */
        const calcul = e.target.quantity.value*lct.operating_time;

        const dayTime= Math.floor(((calcul/60)/7.8)/0.4);
        const timeHours = Math.ceil(((((calcul/60)/7.8)/0.4) - Math.floor(((calcul/60)/7.8)/0.4))*7.8);
        const c = (e.target.datepicker.value + ' ' + e.target.timepicker.value);
        const a = momentBusinessDays(c, 'DD/MM/YYYY HH:mm:ss').businessAdd(dayTime, 'days');
        const g = moment(c).format('YYYY-DD-MM HH:mm:ss');
        const v = momentBusinessDays(a, 'DD/MM/YYYY HH:mm:ss').businessAdd(timeHours, 'hours')._d;
        const r = moment(v).format('YYYY-MM-DD HH:mm:ss');
        const customId= '222';
        addTasks(newId,lct.article_name,g,r,10,newId);

     /*  } */

     /*  else {
        const calcul = e.target.quantity.value*lct.operating_time;

        const dayTime= Math.floor(((calcul/60)/7.8)/0.4);
        const timeHours = Math.ceil(((((calcul/60)/7.8)/0.4) - Math.floor(((calcul/60)/7.8)/0.4))*7.8);
        console.log(r)
        //const p = (e.target.datepicker.value + ' ' + e.target.timepicker.value);
        const t = momentBusinessDays(r, 'YYYY-MM-DD HH:mm:ss').businessAdd(dayTime, 'days');
        const y = moment(r).format('YYYY-MM-DD HH:mm:ss');
        //console.log(momentBusinessDays(t, 'DD/MM/YYYY HH:mm:ss').businessAdd(timeHours, 'hours'))
        const u = momentBusinessDays(t, 'YYYY-MM-DD HH:mm:ss').businessAdd(timeHours, 'hours')._i;
        const w = moment(u).format('YYYY-MM-DD HH:mm:ss');
        //console.log(u)
        addTasks(newId,lct.article_name,y,w,10,newId);

      } */
    })
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
