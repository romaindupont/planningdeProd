import React, {useState} from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
const Table = ()=> {
  const [check, setCheck] = useState(false);
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
    }
    setCheck(e.target.checked)
    console.log(e.target.checked)
  }
  return (
        <table>
          <Thead />
          <Tbody handleCheckBox={handleCheckBox}/>
        </table>
  )
}
export default Table;
