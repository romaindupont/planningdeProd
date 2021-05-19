import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ModalWindow from '../../../containers/GanttMachine/ContainerBloc/ModalWindow';
import { DateTime } from "luxon";

const ContainerBloc = ({ dt, tasks }) => {
  const [ windowModalOpen, setWindowModalOpen ] = useState(false);
  const [ getId, setGetId ] = useState('');
  const addSpan = () => {
    const begin = document.querySelectorAll('.ganttMachine-container-bloc--day--touch--start');
    for ( let i = 0 ; i < begin.length ; i++ ) {
      const myDataset = begin[i].dataset.myId;
      const newSpan = document.createElement('span');
      newSpan.classList.add('progress');
      newSpan.dataset.myId = myDataset;
      begin[i].append(newSpan);
    }
  }

  const openWindowClick = async (e) => {
    setGetId(e.target.getAttribute("data-my-id"));
    await setWindowModalOpen(!windowModalOpen);
    const modal = document.querySelector('.windowModal--open');
    if (modal) {
      modal.style.top = `${e.pageY}px`;
      modal.style.left = `${e.pageX}px`;
    }
  }
  useEffect(() => {
    addSpan();
  }, []);
  return (
  <div className="ganttMachine-container-all">
    {tasks.map((task,i) =>
    <form className="ganttMachine-container-bloc" key={i} id={task.id} onClick={openWindowClick}>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:11}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:11}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:11}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:11}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:10}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:10}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:10}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:10}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:9}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:9}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:9}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:9}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:8}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:8}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:8}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:8}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:7}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:7}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:7}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:7}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:6}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:6}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:6}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:6}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:5}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:5}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:5}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:5}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:4}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:4}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:4}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:4}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:3}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:3}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:3}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:3}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:2}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:2}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:2}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:2}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:1}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.minus({days:1}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.minus({days:1}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.minus({days:1}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:1}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:1}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:1}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:1}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:2}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:2}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:2}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:2}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:3}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:3}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:3}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:3}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:4}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:4}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:4}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:4}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:5}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:5}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:5}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:5}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:6}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:6}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:6}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:6}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:7}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:7}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:7}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:7}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:8}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:8}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:8}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:8}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:9}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:9}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:9}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:9}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:10}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:10}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:10}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" })>dt.plus({days:10}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:11}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:11}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:11}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:11}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:12}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:12}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:12}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:12}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:13}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:13}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:13}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:13}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()===dt.plus({days:14}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()===dt.plus({days:14}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:14}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" })>dt.plus({days:14}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:15}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:15}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:15}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:15}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:16}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:16}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:16}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:16}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:17}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:17}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:17}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:17}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id} >
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:18}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:18}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:18}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:18}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
      <div className="ganttMachine-container-bloc--day" data-my-id={task.id}>
        <span className={(DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:19}).toMillis()) ? "ganttMachine-container-bloc--day--touch--start" : (DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()==dt.plus({days:19}).toMillis()) ? "ganttMachine-container-bloc--day--touch--end" : (DateTime.fromISO(`${task.start.substring(0,4)}-${task.start.substring(5,7)}-${task.start.substring(8,10)}`, { locale: "fr" }).toMillis()<dt.plus({days:19}).toMillis() && DateTime.fromISO(`${task.end.substring(0,4)}-${task.end.substring(5,7)}-${task.end.substring(8,10)}`, { locale: "fr" }).toMillis()>dt.plus({days:19}).toMillis()) ? "ganttMachine-container-bloc--day--touch" : "ganttMachine-container-bloc--empty" } data-my-id={task.id}></span>
      </div>
    </form>
    )}
    {windowModalOpen && (<ModalWindow getId={getId} />)}
  </div>
    );
};

export default ContainerBloc;
