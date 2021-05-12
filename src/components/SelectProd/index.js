import React, { useState,useEffect } from 'react';
import Select from '../../containers/SelectProd/Select';
import DatePicker from '../../containers/SelectProd/DatePicker';
import TimePicker from '../../containers/SelectProd/TimePicker';
import Quantity from '../../containers/SelectProd/Quantity';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';
import {generateId} from '../../Utils';
import { openDate } from '../../Utils/openDate';
import Popup from '../../containers/Reglages/Popup';

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
  fetchArticle,
  saveNumeroLct,
  n_lancement
}) => {
  const [ isShowing, setIsShowing ] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    openDate();
    const numeroLct = parseInt(n_lancement) + 1;
    saveNumeroLct(numeroLct);
    const newId = String(generateId(tasks));
    const calcul = operating_time*parseInt(e.target.quantity.value);
    const dayTime = Math.floor(((calcul/60)/7.8)/0.4);
    const timeHours = Math.ceil(((((calcul/60)/7.8)/0.4) - Math.floor(((calcul/60)/7.8)/0.4))*7.8);
    const c = (e.target.datepicker.value + ' ' + e.target.timepicker.value);
    const a = momentBusinessDays(c, 'DD/MM/YYYY HH:mm:ss').businessAdd(dayTime, 'days');
    const g = moment(c,'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
    const v = momentBusinessDays(a, 'DD/MM/YYYY HH:mm:ss').businessAdd(timeHours, 'hours')._d;
    const r = moment(v).format('YYYY-MM-DD HH:mm:ss');
    addSeveralLineInDb();
    setIsShowing(true);
  };
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <div className="selectProd">
      <form onSubmit={handleClick}>
        <Select />
        <DatePicker name="datepicker"/>
        <TimePicker name="timepicker"/>
        <Quantity name="quantity"/>
      <button className="selectProd--button" type="submit">Créer</button>
      {isShowing && (<Popup setIsShowing={setIsShowing} />)}
      </form>
    </div>
  );
};

export default SelectProd;
