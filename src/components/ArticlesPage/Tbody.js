import React, {useState} from 'react';

const Tbody = ({handleCheckBox})=> {
  return (
          <tbody>
            <tr id="2">
              <td ><input onChange={handleCheckBox}  value="2" type="checkbox"></input></td>
              <td >2</td>
              <td >805B0054-OP1</td>
              <td >1</td>
              <td >9.75</td>
              <td >1</td>
            </tr>
            <tr id="3">
              <td ><input onClick={handleCheckBox} value="3" type="checkbox"></input></td>
              <td >3</td>
              <td >805B0054-OP2</td>
              <td >1</td>
              <td >9.75</td>
              <td >1</td>
            </tr>
          </tbody>
  )
}
export default Tbody;
