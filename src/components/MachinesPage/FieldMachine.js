import React from 'react';

const FieldMachine = ({ type, placeholder, name, currentValue, changeValue }) => {
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
            changeValue(event.target.value);
          }}
        />
      </div>
  );
};

export default FieldMachine;
