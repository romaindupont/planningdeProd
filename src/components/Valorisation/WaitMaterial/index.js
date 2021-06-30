import React, { useState } from 'react';
import classNames from 'classnames';
import SearchBar from '../SearchBar';
import Table from './Table';
import Form from '../../../containers/Valorisation/WaitMaterial/Form';

const WaitMaterial = () => {
  const [ open, setOpen ] = useState(true);
  const [ search, setWaitSearch ] = useState('');
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('dragWait');
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    elemnt.onmousedown = dragMouseDown;
  }
  const dragMouseDown = (e) => {
    e.stopPropagation();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

  }
  const elementDrag = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('dragWait');
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
    elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
  }
  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
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
