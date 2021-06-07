import React from 'react';

const Field = ({ placeholder, name, type, currentValue }) => {
  return (
    <div className="form-lct">
      <span className="form-title">{name}</span>
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={currentValue || ""}
        readOnly
      />
    </div>
  );
};

export default Field;
