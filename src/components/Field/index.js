import React from 'react';


const Field = ({
  type,
  placeholder,
  name,
  currentValue,
  changeField,
})=> {

  return (
    <div className="form-lct">
      <span className="form-title">{name}</span>
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={currentValue || ""}
        onChange={(event) => {
          changeField(event.target.value);
      }}></input>
    </div>
  )
}
export default Field;
