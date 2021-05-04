import React from 'react';

const Tbody = ({search, setSearch})=> {
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
    }
  };
  console.log(search)
  return (
          <tbody>
            <tr id="250">
              <td><input onChange={handleCheckBox}  value="250" type="checkbox"/></td>
              <td>2</td>
              <td>805B0054</td>
              <td>2021-05-24 08:00:00</td>
              <td>2021-05-31 09:37:30</td>
              <td>250</td>
              <td>M8</td>
              <td>50</td>
            </tr>
            <tr id="251">
              <td><input onChange={handleCheckBox}  value="251" type="checkbox"/></td>
              <td>3</td>
              <td>805B0054</td>
              <td>2021-05-24 08:00:00</td>
              <td>2021-05-31 09:37:30</td>
              <td>251</td>
              <td>M8</td>
              <td>50</td>
            </tr>
          </tbody>
  )
}
export default Tbody;
