import React from 'react';
import Select from '../../../containers/GanttMachine/MachineChoice/Select';

const MachineChoice = () => {
  const openSelect = () => {
    document.querySelector('.ganttMachine-choice-button-select').style.display='block';
  }
  const closeSelect = () => {
    document.querySelector('.ganttMachine-choice-button-select').style.display='none';
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <div className="ganttMachine-choice">
      <form className="ganttMachine-choice-form" onSubmit={handleSubmit}>
        <label className="ganttMachine-choice-button-label" htmlFor="all" onClick={closeSelect}>
        <input type="radio" name="allChoice" className="ganttMachine-choice-button" id="all"/>
          <span>ALL</span>
        </label>
        <label className="ganttMachine-choice-button-label" htmlFor="machine" onClick={openSelect}>
        <input type="radio" name="allChoice" className="ganttMachine-choice-button" id="machine"/>
          <span>CHOIX</span>
        </label>
        <Select />
        <button className="ganttMachine-choice-button-button" type="submit">Valider le choix</button>
      </form>
    </div>
  );
};

export default MachineChoice;
