import React, { useState } from 'react';
import ImagesSettings from '../../../../assets/images/settings.png'
import classNames from 'classnames';
import { Drag }from '../../../Utils/drag';

const Settings = () => {
  const [ settingOpen, setSettingOpen ] = useState(true)
  const dragElement = (e) => {
    e.preventDefault();
    Drag(e, 'dragSettings')
  }

  const handleSubmit = () => {

  }
  const closeOpen = () => {
    setSettingOpen(!settingOpen);
  }
  return (
    <div className="Settings" draggable="true" id="dragSettings" onDragStart={dragElement}>
      <img className="Settings-img" src={ImagesSettings} alt="settings" onClick={closeOpen}/>
      <form className={classNames("Settings-submit", {"Settings-submit-none":settingOpen})} type="submit" onSubmit={handleSubmit}>
        <label className="Settings-label">Coût horaire
          <input className="Settings-horaire" type="text" placeholder="Coût en €" name="date"/>
        </label>
        <button className="Settings-submit--button" type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default Settings;
