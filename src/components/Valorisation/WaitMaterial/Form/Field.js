import React from 'react';

const Field = ({ name, placeholder, type, currentValue, changeValue }) => {
  return (
      <div className="form-lct">
        <span className="form-title">{name}</span>
        <input
          className="form-input"
          type={type}
          placeholder={placeholder}
          name={name}
          value={currentValue || ''}
          onChange={
            (e)=> {
              changeValue(e.target.value);
            }
          }
        />
      </div>
  );
};

export default Field;
