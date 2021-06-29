import React, { useState } from 'react';

const Tbody = ({ search, total, setTotal, tableauValo }) => {
  const table = document.querySelector(".table-valo");
  const row = document.querySelectorAll(".trVal");
  const cells = document.querySelectorAll(".trVal > td");
  console.log(tableauValo)
  let totalTd = 0;
  for (let i = 0; i < row.length; i++) {
    totalTd = totalTd + parseInt(row[i].cells[7].innerHTML);
    setTotal(totalTd);
  }
  return (
    <tbody>
      <tr className="trVal">
        <td><input type="checkbox"></input></td>
        <td>1</td>
        <td>ref1</td>
        <td>10</td>
        <td>10</td>
        <td>30/06/2021</td>
        <td>10</td>
        <td>100</td>
      </tr>
      <tr className="trVal">
        <td><input type="checkbox"></input></td>
        <td>2</td>
        <td>ref2</td>
        <td>10</td>
        <td>10</td>
        <td>30/06/2021</td>
        <td>10</td>
        <td>100</td>
      </tr>
      <tr className="trVal">
        <td><input type="checkbox"></input></td>
        <td>3</td>
        <td>ref3</td>
        <td>10</td>
        <td>10</td>
        <td>30/06/2021</td>
        <td>10</td>
        <td>100</td>
      </tr>
    </tbody>
  );
};

export default Tbody;
