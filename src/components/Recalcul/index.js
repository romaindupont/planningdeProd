import React from 'react';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';

const Recalcul = ()=> {
  let valueCalcul = '';
  const handleSubmit = (e) => {
    event.preventDefault();
    const c = (e.target.date.value);
    const a = momentBusinessTime(c, 'YYYY-MM-DD HH:mm:ss').addWorkingTime(e.target.temps.value/0.4, 'minutes');
    const r = moment(a).format('YYYY-MM-DD HH:mm:ss');
    /* const g = moment(c,'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'); */
    valueCalcul=r;
    console.log(r)
  }
  return (
    <div className="recalcul">
      <form className="recalcul-submit" type="submit" onSubmit={handleSubmit}>
          <input className="recalcul-date" type="text" placeholder="date" name="date"/>
          <input className="recalcul-temps" type="text" placeholder="temps opé" name="temps"/>
          <input className="recalcul-calcul" type="text" name="calcul" value={valueCalcul} readOnly/>
        <button className="recalcul-submit--button" type="submit">recalcul</button>
      </form>
    </div>
  )
}
export default Recalcul;
