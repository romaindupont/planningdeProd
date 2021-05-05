import React, { useState } from 'react';
import classNames from 'classnames';


const Th = ({ searchName, name, placeholder, type, searchValue,currentValue })=> {
  const [viewInput, setViewInput] = useState(false);
  const searchClick = () => {
    setViewInput(true);
  };
  const searchBlur = () => {
    setViewInput(false);
  };
  const handleChange = (e) => {
    searchValue(e.target.value,e.target.name);
  };
  return (
    <th className="search" onClick={searchClick}>
      <span className={classNames("search-name", {"search-name--erase":viewInput})}>{searchName}</span>
      <input
        className={classNames("search-input", {"search-input--view":viewInput})}
        type={type}
        name={name}
        placeholder={placeholder}
        onBlur={searchBlur}
        onChange={handleChange}
        value={currentValue || ''}
      />
    </th>
  );
};

export default Th;
