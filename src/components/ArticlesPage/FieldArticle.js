import React from 'react';


const FieldArticle = ({
  type,
  placeholder,
  name,
  currentValue,
  changeField,
})=> {

  return (
    <label className="form-label">{name}
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={currentValue || ""}
        onChange={(event) => {
          changeField(event.target.value);
      }}></input>
    </label>
  )
}
export default FieldArticle;
