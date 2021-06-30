import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import DatePicker from '../../containers/SelectProd/DatePicker';
import Quantity from '../../containers/SelectProd/Quantity';
import Popup from '../../containers/Reglages/Popup';
import Select from '../../containers/SelectProd/Select';
import TimePicker from '../../containers/SelectProd/TimePicker';
import { openDate } from '../../Utils/openDate';
import { Drag } from '../../Utils/drag';

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
  const [ wantDrag, setWantDrag ] = useState(false);
  const [ calculZone, setCalculZone ] = useState(true);
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const handleClick = (e) => {
    e.preventDefault();
    openDate();
    const numeroLct = parseInt(n_lancement) + 1;
    saveNumeroLct(numeroLct);
    addSeveralLineInDb();
    setIsShowing(true);
  };
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('dragLct');
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    elemnt.onmousedown = dragMouseDown;
  }
  const dragMouseDown = (e) => {
    e.stopPropagation();;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

  }
  const elementDrag = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('dragLct');
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
    elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
  }
  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  const onDragOrNot = () => {
    setWantDrag(!wantDrag);
    const elemnt = document.getElementById('dragLct');
    elemnt.setAttribute("draggable", wantDrag);
  }
  const OpenCloseClic = () => {
    setCalculZone(!calculZone)
  }
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <div className="gantt-select" draggable="true" id="dragLct" onDragStart={dragElement} >
      <div className="ganttMachine-gantt-select-fleche1" onClick={OpenCloseClic}>
        <div className={classNames("ganttMachine-gantt-select-fleche1-haut", {"ganttMachine-gantt-select-fleche1-haut-none": calculZone})}></div>
        <div className={classNames("ganttMachine-gantt-select-fleche1-bas", {"ganttMachine-gantt-select-fleche1-bas-none": calculZone})}></div>
      </div>
      <h3 className={classNames("gantt-select-title", {"gantt-select-title-none": calculZone})}>Sélection du lancement</h3>
      <div className={classNames("selectProd", {"selectProd-none": calculZone})}>
        <form onSubmit={handleClick}>
          <Select />
          <DatePicker name="datepicker"/>
          <TimePicker name="timepicker"/>
          <Quantity name="quantity"/>
          <button className="selectProd--button" type="submit">Créer</button>
          {isShowing && (<Popup setIsShowing={setIsShowing} />)}
        </form>
      </div>
    </div>
  );
};

export default SelectProd;
