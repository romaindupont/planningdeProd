import React, { useState } from 'react';
import { DateTime } from "luxon";
import BackToMenu from '../BackToMenu';
import ContainerDate from './ContainerDate';
import ContainerBloc from '../../containers/GanttMachine/ContainerBloc';
import DatePicker from '../../containers/SelectProd/DatePicker';
import Return from '../GanttMachine/Return';
import MachineChoice from '../../containers/GanttMachine/MachineChoice';
import { DiffDay } from '../../Utils/diffDay';
import classNames from 'classnames';
import html2canvas from 'html2canvas';
import { base64_encode } from '../../Utils/base64Image';


const GanttMachine = ({ dt, saveContainerDate, tasks, title }) => {
  const [ addTime, setAddTime ] = useState(false);
    const startCapture = () => {
      html2canvas(document.querySelector(".ganttMachine-container")).then(canvas => {
        document.body.appendChild(canvas)
        canvas.style.display = 'none'
        return canvas
      })
      .then(canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'my-image.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })
  }
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
      const startEnd = tasks.find((task) => task.id == myDataset);
      const differenceDay = DiffDay(startEnd.end, startEnd.start);
      if (differenceDay == 0) {
        newSpan.style.width = `calc(85px * calc(${startEnd.progress}/100))`;
      }
      if (startEnd.progress == 100) {
        newSpan.style.width = `calc(85px * (${differenceDay} + 1) * calc(${startEnd.progress}/100))`;
        newSpan.style.borderRadius = '10px';
        newSpan.style.background = 'rgba(38,93,125, 0.8)';
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
        <Return setAddTime={setAddTime} addTime={addTime} />
        <form className="ganttMachine-date" onSubmit={changeDate}>
          <h1 className="ganttMachine-title">{title}</h1>
          <DatePicker name="date"/>
          <button className="ganttMachine-button-change"  type="submit">Change Date</button>
        </form>
        <div className="ganttMachine-container">
          <div className={classNames("day-information", {"day-information--change":addTime})}></div>
          <ContainerDate dt={dt} />
          <ContainerBloc dt={dt} />
        </div>
        <MachineChoice />
        <button className="button-screenshot" onClick={startCapture}>screenshot</button>

      </div>
    </>
  );
};

export default GanttMachine;
