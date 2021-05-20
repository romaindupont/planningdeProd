import React, { useState } from 'react';
import { DateTime } from "luxon";
import BackToMenu from '../BackToMenu';
import ContainerDate from './ContainerDate';
import ContainerBloc from '../../containers/GanttMachine/ContainerBloc';
import DatePicker from '../../containers/SelectProd/DatePicker';
import { DiffDay } from '../../Utils/diffDay';

const GanttMachine = ({ dt, saveContainerDate, tasks }) => {
  const changeDate = async (e) => {
    e.preventDefault();
    saveContainerDate(DateTime.fromISO(`${e.target.date.value.slice(6,10)}-${e.target.date.value.slice(3,5)}-${e.target.date.value.slice(0,2)}`, { locale: "fr" }));
    const child = document.querySelectorAll('.progress');
    for ( let i = 0 ; i < child.length ; i++ ) {
      await child[i].remove();
    }
    const begin = document.querySelectorAll('.ganttMachine-container-bloc--day--touch--start');
    for ( let i = 0 ; i < begin.length ; i++ ) {
      const myDataset = begin[i].dataset.myId;
      const newSpan = document.createElement('span');
      newSpan.classList.add('progress');
      newSpan.dataset.myId = myDataset;
      const startEnd = tasks.find((task)=>task.id==myDataset);
      const differenceDay = DiffDay(startEnd.end, startEnd.start);
      if (differenceDay == 0) {
        newSpan.style.width = `calc(85px * calc(${startEnd.progress}/100))`;
      }
      if (startEnd.progress == 100) {
        newSpan.style.width = `calc(85px * (${differenceDay} + 1) * calc(${startEnd.progress}/100))`;
        newSpan.style.borderRadius = '10px';
        newSpan.style.background = 'rgba(38,93,125, 0.8)'
      }
      else {
        newSpan.style.width = `calc(85px * ${differenceDay} * calc(${startEnd.progress}/100))`;
      }
      begin[i].append(newSpan);
    }
  }
  return (
    <>
      <BackToMenu />
      <div className="ganttMachine">
        <form className="ganttMachine-date" onSubmit={changeDate}>
          <DatePicker name="date"/>
          <button type="submit">Change Date</button>
        </form>
        <div className="ganttMachine-container">
          <ContainerDate dt={dt} />
          <ContainerBloc dt={dt} />
        </div>
      </div>
    </>
  );
};

export default GanttMachine;
