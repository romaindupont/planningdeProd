import React, { useState } from 'react';
import BackToMenu from '../BackToMenu';
import ContainerDate from './ContainerDate';
import ContainerBloc from '../../containers/GanttMachine/ContainerBloc';
import { DateTime,Interval } from "luxon";

const GanttMachine = ({ open_close, name, changeValue }) => {
  const [ openDate, setOpenDate ] = useState()
  const now = DateTime.now();
  let nowMonth = now.month.toString();
  let nowDay = now.day.toString();
  if(nowMonth.length<2){
    nowMonth = `0${now.month}`
  }
  else {
    nowMonth=now.month
  }
  if(nowDay.length<2){
    nowDay = `0${now.day}`
  }
  else {
    nowDay=now.day
  }
  //const dt = DateTime.fromISO("2021-05-18", { locale: "fr" })
  const dt = DateTime.fromISO(`${now.year}-${nowMonth}-${nowDay}`, { locale: "fr" })
  return (
    <>
    <BackToMenu />
    <div className="ganttMachine">
      <div className="ganttMachine-container">
        <ContainerDate dt={dt}/>
        <ContainerBloc  dt={dt} />
      </div>
    </div>
    </>
  );
};

export default GanttMachine;
