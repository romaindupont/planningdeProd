import React, { useState } from 'react';
import DataHour from '../../../data/dataHour';
import DatePicker from '../DatePicker';

const ModalTimePicker = ({
  show,
  setShow,
  hourTime,
  setHourTime,
  minTime,
  setMinTime,
  dateChoice,
}) => {
  const previousClick = (e) => {
    e.preventDefault();
    const previousTime = hourTime-1;
    if (previousTime===-1) {
      setHourTime(23);
    }
    else {
      setHourTime(previousTime);
    }
  };
  const nextClick = (e) => {
    e.preventDefault();
    const nextTime = parseInt(hourTime)+1;
    if (nextTime===24) {
      setHourTime(0);
    }
    else {
      setHourTime(nextTime);
    }
  };
  const previousClickMin = (e) => {
    e.preventDefault();
    const previousTime = minTime-1;
    if (previousTime===-1) {
      setMinTime(59);
    }
    else {
      setMinTime(previousTime);
    }
  };
  const nextClickMin = (e) => {
    e.preventDefault();
    const nextTime = parseInt(minTime)+1;
    if (nextTime===60) {
      setMinTime(0);
    }
    else {
      setMinTime(nextTime);
    }
  };
  const previousClickMinTen = (e) => {
    e.preventDefault();
    const previousTime = minTime-10;
    if (previousTime<0) {
      setMinTime(59);
    }
    else {
      setMinTime(previousTime);
    }
  };
  const nextClickMinTen = (e) => {
    e.preventDefault();
    const nextTime = parseInt(minTime)+10;
    if (nextTime>60) {
      setMinTime(0);
    }
    else {
      setMinTime(nextTime);
    }
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    show ?
      <div className="dateModal">Choix de l'heure
        <span className="dateModal--close" onClick={handleClose}>x</span>
        <h3 className="dateModal-title">Heure</h3>
          <div className="dateModal-picker">
            <a className="dateModal--previous" onClick={previousClick} >&#8249;</a>
              <li className="dateModal-li">
                <a>{hourTime}</a>
              </li>
            <a onClick={nextClick} className="dateModal--next">&#8250;</a>
          </div>
        <h3 className="dateModal-title">Minutes</h3>
          <div className="dateModal-picker">
            <a className="dateModal--previous" onClick={previousClickMinTen} >&#8249;&#8249;</a>
            <a className="dateModal--previous" onClick={previousClickMin} >&#8249;</a>
              <li className="dateModal-li">
                <a>{minTime}</a>
              </li>
              <a onClick={nextClickMin} className="dateModal--next">&#8250;</a>
              <a onClick={nextClickMinTen} className="dateModal--next">&#8250;&#8250;</a>
            </div>
        <div className="dateModal-button">
          <a className="dateModal-button--valid"  onClick={dateChoice}>Valider</a>
        </div>
      </div>
    :null
  );
};

export default ModalTimePicker;
