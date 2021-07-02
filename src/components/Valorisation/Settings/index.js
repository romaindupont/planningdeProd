import React, { useState } from 'react';
import ImagesSettings from '../../../../assets/images/settings.png'
import classNames from 'classnames';
import { Drag } from '../../../Utils/drag';
import Popup from '../../../containers/Reglages/Popup';

const Settings = ({ choraire, updateSettings, changeValue, currentValueSetting }) => {
  const [ settingOpen, setSettingOpen ] = useState(true);
  const [ isShowing, setIsShowing ] = useState(false);
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  const dragElement = (e) => {
    e.preventDefault();
    const elemnt = document.getElementById('dragSettings');
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
    const elemnt = document.getElementById('dragSettings');
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
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(1, e.target.choraire.value)
    setIsShowing(true)
  }
  const handleChange = (e) => {
    e.preventDefault();
    changeValue(e.target.value)
  }
  const closeOpen = () => {
    setSettingOpen(!settingOpen);
  }
  return (
    <div className="Settings" draggable="true" id="dragSettings" onDragStart={dragElement}>
      <img className="Settings-img" src={ImagesSettings} alt="settings" onClick={closeOpen}/>
      <form className={classNames("Settings-submit", {"Settings-submit-none":settingOpen})} onSubmit={handleSubmit}>
        <label className="Settings-label">Coût horaire
          <input className="Settings-horaire" type="text" placeholder="Coût en €" name="choraire" value={currentValueSetting || choraire} onChange={handleChange}/>
        </label>
        <button className="Settings-submit--button" type="submit">Modifier</button>
        {isShowing && (<Popup setIsShowing={setIsShowing} />)}
      </form>
    </div>
  );
};

export default Settings;
