import React, { useState } from 'react';
import { DateTime } from 'luxon';

const Tbody = ({ search, total, setTotal, tableauValo, dateOne, dateTwo }) => {
  let filterList = tableauValo.filter((list) => list.reference.includes(search))
  if (filterList.length === 0) {
    filterList = tableauValo;
  }
  if (dateOne != '') {
    let newDateOne = DateTime.fromFormat(`${dateOne.substring(6,10)}-${dateOne.substring(3,5)}-${dateOne.substring(0,2)}`, 'yyyy-MM-dd').toMillis();
    let newDateTwo = DateTime.fromFormat(`${dateTwo.substring(6,10)}-${dateTwo.substring(3,5)}-${dateTwo.substring(0,2)}`, 'yyyy-MM-dd').toMillis();
    filterList = tableauValo.filter((list) =>  (DateTime.fromFormat(`${list._end.substring(6,10)}-${list._end.substring(3,5)}-${list._end.substring(0,2)}`, 'yyyy-MM-dd').toMillis()) >= newDateOne && (DateTime.fromFormat(`${list._end.substring(6,10)}-${list._end.substring(3,5)}-${list._end.substring(0,2)}`, 'yyyy-MM-dd').toMillis()) <= newDateTwo && list.reference.includes(search) )
  }
  return (
    <tbody>
      {filterList.map((valo, i) =>
      <tr key={i} id={valo.id} className="trVal">
        <td><input value={valo.id} type="checkbox"></input></td>
        <td>{valo.planning_id}</td>
        <td>{valo.reference}</td>
        <td>{valo.quantity}</td>
        <td>{valo.tempsop}</td>
        <td>{valo._end}</td>
        <td>{valo.cout}</td>
        <td>{valo.montant}</td>
      </tr> )}
    </tbody>
  );
};

export default Tbody;
