import React, { useState } from 'react';
import { DateTime } from "luxon";
import classNames from 'classnames';
import DatePicker from '../../containers/SelectProd/DatePicker';
import ContainerBloc from '../../containers/GanttMachine/ContainerBloc';
import BackToMenu from '../BackToMenu';
import ContainerDate from '../../components/GanttMachine/ContainerDate';
import Return from '../GanttMachine/Return';
import { addSpanForTasks } from '../../Utils/addSpanForTasks';

const GanttGeneral = ({ dt, tasks, saveContainerDate }) => {
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
      </div>
    </>
  );
};

export default GanttGeneral;
