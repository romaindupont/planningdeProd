import React from 'react';
import ImagesSettings from '../../../../assets/images/settings.png'

const Settings = () => {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const IdElemnt = document.getElementById('dragSettings');
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
    const IdElemnt = document.getElementById('dragSettings');
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
    <div className="Settings" draggable="true" id="dragSettings" onDragStart={dragElement}>
      <img className="Settings-img" src={ImagesSettings} alt="settings" />

    </div>
  );
};

export default Settings;
