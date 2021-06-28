import React from 'react';

const Tbody = ({ search }) => {
  const row = document.querySelectorAll("tr").length;
  const cells = document.querySelectorAll("tr > td");
  for (let i = 1; i<row; i++) {
    const total = cells[7]
    console.log(total)
  }
  console.log(row)
  return (
    <tbody>
      <tr>
        <td></td>
        <td>1</td>
        <td>ref1</td>
        <td>10</td>
        <td>30/06/2021</td>
        <td>10</td>
        <td>100</td>
      </tr>
      <tr>
        <td></td>
        <td>2</td>
        <td>ref2</td>
        <td>10</td>
        <td>30/06/2021</td>
        <td>10</td>
        <td>100</td>
      </tr>
      <tr>
        <td></td>
        <td>3</td>
        <td>ref3</td>
        <td>10</td>
        <td>30/06/2021</td>
        <td>10</td>
        <td>100</td>
      </tr>
    </tbody>
  );
};

export default Tbody;
