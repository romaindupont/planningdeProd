import React, { useState } from 'react';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';
import classNames from 'classnames';
import { Drag } from '../../Utils/drag';

const Recalcul = () => {
  const [ valueCalcul, setValueCalcul ] = useState('');
  const [ wantDrag, setWantDrag ] = useState(false);
  const [ calculZone, setCalculZone ] = useState(true);
  const handleSubmit = (e) => {
    event.preventDefault();
    const a = momentBusinessTime(e.target.date.value, 'YYYY-MM-DD HH:mm:ss').addWorkingTime(e.target.temps.value * e.target.quantity.value / e.target.yield_time.value, 'minutes');
    const r = moment(a).format('YYYY-MM-DD HH:mm:ss');
    setValueCalcul(r);
  };
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('drag');
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    elemnt.onmousedown = dragMouseDown;
  }
  const dragMouseDown = (e) => {
    e.stopPropagation();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

  }
  const elementDrag = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('drag');
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
const handleClick = () => {
  setCalculZone(!calculZone);
}
  return (
    <div className="recalcul" draggable="true" id="drag" onDragStart={dragElement} >
      <div className="ganttMachine-recalcul-fleche1" onClick={handleClick}>
        <div className={classNames("ganttMachine-recalcul-fleche1-haut", {"ganttMachine-recalcul-fleche1-haut-none":calculZone})}></div>
        <div className={classNames("ganttMachine-recalcul-fleche1-bas", {"ganttMachine-recalcul-fleche1-bas-none":calculZone})}></div>
      </div>
      <form className={classNames("recalcul-submit", {"recalcul-submit-none":calculZone})} type="submit" onSubmit={handleSubmit}>
          <input className="recalcul-date" type="text" placeholder="date" name="date"/>
          <input className="recalcul-temps" type="text" placeholder="temps opé" name="temps"/>
          <input className="recalcul-quantity" type="text" placeholder="Quantité" name="quantity"/>
          <input className="recalcul-quantity" type="text" placeholder="Yield_time sous la forme 0.4" name="yield_time"/>
          <input className="recalcul-calcul" type="text" name="calcul" value={valueCalcul} readOnly/>
        <button className="recalcul-submit--button" type="submit">recalcul</button>
      </form>
    </div>
  );
};

export default Recalcul;
