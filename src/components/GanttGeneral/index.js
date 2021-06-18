import React, { useState } from 'react';
import { DateTime } from "luxon";
import classNames from 'classnames';
import html2canvas from 'html2canvas';
import ContainerBloc from '../../containers/GanttMachine/ContainerBloc';
import DatePicker from '../../containers/SelectProd/DatePicker';
import BackToMenu from '../BackToMenu';
import ContainerDate from '../../components/GanttMachine/ContainerDate';
import Return from '../GanttMachine/Return';
import { addSpanForTasks } from '../../Utils/addSpanForTasks';
import MachineChoice from '../../containers/GanttMachine/MachineChoice';
import { PdfGantt } from '../GanttMachine/PdfGantt';
import Camera from '../../../assets/images/camera.png';

const GanttGeneral = ({ dt, tasks, saveContainerDate, title, MachinePlanning }) => {
  const [ windowModalOpen, setWindowModalOpen ] = useState(false);
  const [ addTime, setAddTime ] = useState(false);
  const [ getId, setGetId ] = useState('');
  const changeDate = async (e) => {
    e.preventDefault();
    saveContainerDate(DateTime.fromISO(`${e.target.date.value.slice(6,10)}-${e.target.date.value.slice(3,5)}-${e.target.date.value.slice(0,2)}`, { locale: "fr" }));
    const child = document.querySelectorAll('.progress');
    for ( let i = 0 ; i < child.length ; i++ ) {
      await child[i].remove();
    }
    addSpanForTasks(tasks)
  }
  const startCapture = () => {
    html2canvas(document.querySelector(".ganttMachine-container")).then(canvas => {
      document.body.appendChild(canvas)
      canvas.style.display = 'none'
      return canvas
    })
    .then(canvas => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const a = document.createElement('a')
      a.setAttribute('download', 'planning.png')
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
      PdfGantt(title,MachinePlanning,image)
  })
}
  return (
    <>
      <div className="ganttMachine">
        <Return setAddTime={setAddTime} addTime={addTime}/>
        <form className="ganttMachine-date" onSubmit={changeDate}>
          <h1 className="ganttGeneral-title">Planning général</h1>
          <DatePicker name="date"/>
          <button className="ganttMachine-button-change"  type="submit">Change Date</button>
        </form>
        <div className="ganttMachine-container">
          <div className={classNames("day-information", {"day-information--change":addTime})}></div>
            <ContainerDate dt={dt} />
            <ContainerBloc dt={dt} windowModalOpen={windowModalOpen} setWindowModalOpen={setWindowModalOpen} getId={getId} setGetId={setGetId} />
          </div>
          <MachineChoice />
          <button className="button-screenshot" onClick={startCapture}>
            <img className="button-screenshot--img" src={Camera} alt="camera" />
        </button>
      </div>
    </>
  );
};

export default GanttGeneral;
