import React, { useState } from 'react';
import moment from 'moment';
import momentBusinessDays from 'moment-business-days';
import momentBusinessTime from 'moment-business-time';

const Recalcul = ()=> {
  const [valueCalcul, setValueCalcul] = useState('')
  const handleSubmit = (e) => {
    event.preventDefault();
    const a = momentBusinessTime(e.target.date.value, 'YYYY-MM-DD HH:mm:ss').addWorkingTime(e.target.temps.value*e.target.quantity.value/0.4, 'minutes');
    const r = moment(a).format('YYYY-MM-DD HH:mm:ss');
    setValueCalcul(r);
  }

  return (
    <div className="recalcul">
      <form className="recalcul-submit" type="submit" onSubmit={handleSubmit}>
          <input className="recalcul-date" type="text" placeholder="date" name="date"/>
          <input className="recalcul-temps" type="text" placeholder="temps opé" name="temps"/>
          <input className="recalcul-quantity" type="text" placeholder="Quantité" name="quantity"/>
          <input className="recalcul-calcul" type="text" name="calcul" value={valueCalcul} readOnly/>
        <button className="recalcul-submit--button" type="submit">recalcul</button>
      </form>
    </div>
  )
}
export default Recalcul;
