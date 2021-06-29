import React, { useState } from 'react';
import classNames from 'classnames';
import SearchBar from '../SearchBar';
import Table from './Table';
import Form from './Form';
import { Drag }from '../../../Utils/drag';

const WaitMaterial = () => {
  const [ open, setOpen ] = useState(true);
  const [ search, setWaitSearch ] = useState('');
  const dragElement = (e) => {
    e.preventDefault();
    Drag(e,'dragWait')
  }
  const openClose = () => {
    setOpen(!open);
  }
  const changeSearch = (e) => {
    setWaitSearch(e.target.value)
  }
  return (
    <div className="WaitMaterial" draggable="true" id="dragWait" onDragStart={dragElement}>
      <h1 className="WaitMaterial-title" onClick={openClose}>...</h1>
      <div className={classNames("WaitMaterial-container", {"WaitMaterial-container-none": open})}>
        <SearchBar search={search} changeSearch={changeSearch} />
        <Table search={search}/>
        <Form />
      </div>
    </div>
  );
};

export default WaitMaterial;
