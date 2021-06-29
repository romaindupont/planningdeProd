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
  const dragElement = (e) => {
    e.preventDefault();
    Drag(e, 'drag')
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
