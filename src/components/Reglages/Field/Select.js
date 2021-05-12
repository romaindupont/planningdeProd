import React, { useState } from 'react';

const SelectReglages = ({ open_close, name, changeValue }) => {
  const [ newSelectValue, setNewSelectValue ] = useState(open_close)
  const selectChange = (e) => {
    changeValue(e.target.value);
    setNewSelectValue(e.target.value);
  }
  return (
    <select name={name} className={`reglages-form--${open_close}`} value={newSelectValue} id="reglages_select" onChange={selectChange}>
      <option className="reglages-form-select--open" value="null" >Close</option>
      <option className="reglages-form-select--close" value="not null">Open</option>
    </select>
  );
};

export default SelectReglages;
