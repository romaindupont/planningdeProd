import React from 'react';

const WaitMaterial = () => {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const IdElemnt = document.getElementById('dragWait');
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    IdElemnt.onmousedown = dragMouseDown;
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
    const IdElemnt = document.getElementById('dragWait');
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    IdElemnt.style.top = (IdElemnt.offsetTop - pos2) + "px";
    IdElemnt.style.left = (IdElemnt.offsetLeft - pos1) + "px";
  }
  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  return (
    <div className="WaitMaterial" draggable="true" id="dragWait" onDragStart={dragElement}>
      <h1 className="WaitMaterial-title">...</h1>

    </div>
  );
};

export default WaitMaterial;
