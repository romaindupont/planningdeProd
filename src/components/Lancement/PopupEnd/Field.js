import React from 'react';

const Field = ({placeholder,name, type,currentValue,changeValue, value})=> {
  return (
    <div className="form-lct">
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={currentValue || ''}
        onChange={(event) => {
          changeValue(event.target.value || event.target.checked);
      }}
      />
    </div>
  )
}
export default Field;
