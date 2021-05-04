import React, {useState} from 'react';
import classNames from 'classnames';

const ButtonMode = ({setModeView})=> {
  const [selectH, setSelectH] = useState(false);
  const [selectQ, setSelectQ] = useState(false);
  const [selectD, setSelectD] = useState(false);
  const [selectW, setSelectW] = useState(false);
  const [selectM, setSelectM] = useState(false);
//Quarter Day, Half Day, Day, Week, Month
const handleClick = (e) => {
  if(e.target.outerText=="Quarter"){
    setModeView('Quarter Day');
    setSelectQ(true);
    setSelectH(false);
    setSelectD(false);
    setSelectW(false);
    setSelectM(false);
  }
  if(e.target.outerText==="Half"){
    setModeView('Half Day');
    setSelectH(true);
    setSelectQ(false);
    setSelectD(false);
    setSelectW(false);
    setSelectM(false);
  }
  if(e.target.outerText==="Day"){
    setModeView('Day');
    setSelectH(false);
    setSelectQ(false);
    setSelectD(true);
    setSelectW(false);
    setSelectM(false);
  }
  if(e.target.outerText==="Week"){
    setModeView('Week');
    setSelectH(false);
    setSelectQ(false);
    setSelectD(false);
    setSelectW(true);
    setSelectM(false);
  }
  if(e.target.outerText==="Month"){
    setModeView('Month');
    setSelectH(false);
    setSelectQ(false);
    setSelectD(false);
    setSelectW(false);
    setSelectM(true);
  }
}
  return (
    <div className="buttonMode">
      <button className={classNames("buttonMode--action", {"buttonMode--action_select":selectQ})} onClick={handleClick}>Quarter</button>
      <button className={classNames("buttonMode--action", {"buttonMode--action_select":selectH})} onClick={handleClick}>Half</button>
      <button className={classNames("buttonMode--action", {"buttonMode--action_select":selectD})} onClick={handleClick}>Day</button>
      <button className={classNames("buttonMode--action", {"buttonMode--action_select":selectW})} onClick={handleClick}>Week</button>
      <button className={classNames("buttonMode--action", {"buttonMode--action_select":selectM})} onClick={handleClick}>Month</button>
    </div>
  )
}
export default ButtonMode;
