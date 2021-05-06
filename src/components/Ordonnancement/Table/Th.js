import React, { useState, useEffect } from 'react';
import classNames from 'classnames';


const Th = ({ searchName, name, placeholder, type, searchValue, currentValue, update, tasks, numero })=> {
  const [ viewInput, setViewInput ] = useState(false);
  const [ wordSearch, setWordSearch ] = useState({
    category : '',
    searchText: '',
  });

  const searchClick = () => {
    setViewInput(true);
  };
  const searchBlur = () => {
    setViewInput(false);
  };
  const handleChange = (e) => {
    searchValue(e.target.value,e.target.name);
    setWordSearch({ category : e.target.value , searchText : e.target.name});

  };
  useEffect(() => {
    update(tasks,wordSearch);
  }, [handleChange]);
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
