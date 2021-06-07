import React from 'react';

const InputReglages = ({ name, value,currentValue, changeValue }) => {
  return (
    <>
      <input
        className="reglages-form-input"
        name={name}
        type="text"
        maxLength="8"
        value={currentValue || ''}
        onChange={
          (e) => {
            changeValue(e.target.value);
          }
        }
      />
    </>
  );
};

export default InputReglages;
