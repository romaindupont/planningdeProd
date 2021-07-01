import React, { useState } from 'react';
import { DateTime } from 'luxon';

const Tbody = ({ search, total, setTotal, tableauValo, dateOne, dateTwo }) => {
  let filterList = tableauValo.filter((list) => list.name.includes(search))
  if (filterList.length === 0) {
    filterList = tableauValo;
  }
  if (dateOne != '') {
    let newDateOne = DateTime.fromFormat(`${dateOne.substring(6,10)}-${dateOne.substring(3,5)}-${dateOne.substring(0,2)}`, 'yyyy-MM-dd').toMillis();
    let newDateTwo = DateTime.fromFormat(`${dateTwo.substring(6,10)}-${dateTwo.substring(3,5)}-${dateTwo.substring(0,2)}`, 'yyyy-MM-dd').toMillis();
    filterList = tableauValo.filter((list) => (DateTime.fromFormat(`${list._end.substring(8,10)}-${list._end.substring(5,7)}-${list._end.substring(0,4)}`, 'dd-MM-yyyy').toMillis()) >= newDateOne && (DateTime.fromFormat(`${list._end.substring(8,10)}-${list._end.substring(5,7)}-${list._end.substring(0,4)}`, 'dd-MM-yyyy').toMillis()) <= newDateTwo && list.name.includes(search) )
  }
  return (
    <tbody>
      {filterList.map((valo, i) =>
      <tr key={i} id={valo.id} className="trVal">
        <td><input value={valo.id} type="checkbox"></input></td>
        <td>{valo.id}</td>
        <td>{valo.name}</td>
        <td>{valo.lancement}</td>
        <td>{valo.quantity}</td>
        <td>{`${valo._end.substring(8,10)}/${valo._end.substring(5,7)}/${valo._end.substring(0,4)}`}</td>
        <td>{valo.cout}</td>
        <td>{valo.montant}</td>
        <td>{parseFloat(valo.montant/valo.quantity).toFixed(2)}</td>
      </tr> )}
    </tbody>
  );
};

export default Tbody;
