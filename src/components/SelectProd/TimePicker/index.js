import React, { useState } from 'react';
import ModalTimePicker from './ModalTimePicker';


const TimePicker = ({changeField,start_hours, name, saveTimePicker})=> {
  const [ hourTime, setHourTime ] = useState(8);
  const [ minTime, setMinTime ] = useState(0);
  const [ show,setShow ] = useState(false);
  const timeFocus = () => {
    setShow(true);
  };
  const valueinput = `${hourTime.toString().padStart(2, '0')}:${minTime.toString().padStart(2, '0')}:00`;
  const timeBlur = () => {
    setShow(false);
  };
  const dateChoice = (e) => {
    e.preventDefault();
    saveTimePicker(valueinput)
    setShow(false);
  };
  const changeInput =()=> {
    changeField(valueinput);
  };
   return (
    <>
    <div className="background-Modal">
    <input
      name={name}
      type="text"
      placeholder="Heure départ HH:MM:SS"
      onChange={changeInput}
      onFocus={timeFocus}
      value={valueinput}
    />
      <ModalTimePicker
        show={show}
        setShow={setShow}
        hourTime={hourTime}
        setHourTime={setHourTime}
        minTime={minTime}
        setMinTime={setMinTime}
        dateChoice={dateChoice}
      />
    </div>
    </>
  );
};

export default TimePicker;
