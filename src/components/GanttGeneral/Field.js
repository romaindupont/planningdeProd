import React from 'react';

const Field = ({ name, placeholder, type, changeValue, currentValue }) => {
  return (
    <div className="ganttGeneral-changeInfo">
     <span className="form-title">{name}</span>
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={ currentValue || ''}
        onChange={(event) => {
          changeValue(event.target.value);
        }}>
      </input>
    </div>
  )
}
export default Field;
