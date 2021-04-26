import React, { useState } from 'react';
import Select from '../../containers/SelectProd/Select';
import DatePicker from '../../containers/SelectProd/DatePicker';
import TimePicker from '../../containers/SelectProd/TimePicker';
import Quantity from '../../containers/SelectProd/Quantity';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';
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
  updateTasks,
  addPlanningInDb,
  addSeveralLineInDb,
})=> {
 const handleClick = (e) => {
    e.preventDefault();
    const newId = String(generateId(tasks));
    const calcul = operating_time*parseInt(e.target.quantity.value);
    const dayTime= Math.floor(((calcul/60)/7.8)/0.4);
    const timeHours = Math.ceil(((((calcul/60)/7.8)/0.4) - Math.floor(((calcul/60)/7.8)/0.4))*7.8);
    const c = (e.target.datepicker.value + ' ' + e.target.timepicker.value);
    const a = momentBusinessDays(c, 'DD/MM/YYYY HH:mm:ss').businessAdd(dayTime, 'days');
    const g = moment(c,'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
    const v = momentBusinessDays(a, 'DD/MM/YYYY HH:mm:ss').businessAdd(timeHours, 'hours')._d;
    const r = moment(v).format('YYYY-MM-DD HH:mm:ss');
    //addPlanningInDb(newId,e.target.reference.value,g,r,10,'');
    addSeveralLineInDb()
   /*  for(let i= 0; i<lancement.length;i++){
      addSeveralLineInDb()
    } */
    /* lancement.forEach(lct => {
      const calcul = e.target.quantity.value*lct.operating_time;
      let customId=lct.id+String(moment().unix());
      const c = (e.target.datepicker.value + ' ' + e.target.timepicker.value);
      const a = momentBusinessTime(c, 'DD/MM/YYYY HH:mm:ss').addWorkingTime(calcul/0.4, 'minutes');
      const r = moment(a).format('YYYY-MM-DD HH:mm:ss');
      const g = moment(c,'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
      //addPlanningInDb(customId,lct.article_name,g,r,10,newId); */


   /*  }) */
  }
  return (
    <div className="selectProd">
      <form onSubmit={handleClick}>
        <Select />
        <DatePicker name="datepicker"/>
        <TimePicker name="timepicker"/>
        <Quantity name="quantity"/>
      <button className="selectProd--button" type="submit">Créer</button>
      </form>
    </div>
  )
}
export default SelectProd;
