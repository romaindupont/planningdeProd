import React from 'react';
import classNames from 'classnames';

const Return = ({ setAddTime, addTime }) => {
  const returnClick = () => {
    setAddTime(!addTime)
    if (!addTime) {
      for (let i = 1 ; i < 9 ; i++){
        let containerDate = document.querySelector(`.ganttMachine-container-date--day:nth-child(${i})`);
        containerDate.style.display ='block';
        let containerTotal =  document.querySelectorAll(".ganttMachine-container-bloc").length ;
        for (let b = 1 ; b < containerTotal + 1 ; b++){
          let container = document.querySelector(`.ganttMachine-container-bloc:nth-child(${b})`);
          for (let e = 1 ; e < 9 ; e++){
            let containerBloc = container.querySelector(`.ganttMachine-container-bloc--day:nth-child(${e})`);
            containerBloc.style.display ='block';
          }
        }
      }
    }
    else {
      for (let i = 1 ; i < 9 ; i++){
        let containerDate = document.querySelector(`.ganttMachine-container-date--day:nth-child(${i})`);
        containerDate.style.display ='none';
        let containerTotal =  document.querySelectorAll(".ganttMachine-container-bloc").length ;
        for (let b = 1 ; b < containerTotal + 1 ; b++){
          let container = document.querySelector(`.ganttMachine-container-bloc:nth-child(${b})`);
          for (let e = 1 ; e < 9 ; e++){
            let containerBloc = container.querySelector(`.ganttMachine-container-bloc--day:nth-child(${e})`);
            containerBloc.style.display ='none';
          }
        }
      }
    }
  }
  return (
    <div className={classNames("ganttMachine-return", {"ganttMachine-return--change":addTime})} onClick={returnClick}>
      <div className="ganttMachine-return-fleche1">
        <div className="ganttMachine-return-fleche1-haut"></div>
        <div className="ganttMachine-return-fleche1-bas"></div>
      </div>
      <div className="ganttMachine-return-fleche2">
        <div className="ganttMachine-return-fleche2-haut"></div>
        <div className="ganttMachine-return-fleche2-bas"></div>
      </div>
    </div>
  );
};

export default Return;
