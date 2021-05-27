import React from 'react';
import Select from '../../../containers/GanttMachine/MachineChoice/Select';
import { addSpan } from '../../../Utils/addSpan';

const MachineChoice = ({ saveMachinePlanning, MachinePlanning, PlanningForMachine }) => {
  const list = PlanningForMachine;
  const openSelect = () => {
    document.querySelector('.ganttMachine-choice-button-select').style.display='block';
  }
  const closeSelect = () => {
    document.querySelector('.ganttMachine-choice-button-select').style.display='none';
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.elements.allChoice.value == 1) {
      await saveMachinePlanning(list, '');
      const child = document.querySelectorAll('.progress');
      for ( let i = 0 ; i < child.length ; i++ ) {
        await child[i].remove();
      }
      addSpan(list);
    }
    if (e.target.elements.allChoice.value == 2) {
      await saveMachinePlanning(list, e.target[2].value);
      const child = document.querySelectorAll('.progress');
      for ( let i = 0 ; i < child.length ; i++ ) {
        await child[i].remove();
      }
     addSpan(list);
    }
  }
  return (
    <div className="ganttMachine-choice">
      <form className="ganttMachine-choice-form" onSubmit={handleSubmit}>
        <label className="ganttMachine-choice-button-label" htmlFor="all" onClick={closeSelect}>
        <input type="radio" name="allChoice" className="ganttMachine-choice-button" id="all" value="1"/>
          <span>ALL</span>
        </label>
        <label className="ganttMachine-choice-button-label" htmlFor="machine" onClick={openSelect}>
        <input type="radio" name="allChoice" className="ganttMachine-choice-button" id="machine" value="2"/>
          <span>CHOIX</span>
        </label>
        <Select />
        <button className="ganttMachine-choice-button-button" type="submit">Valider le choix</button>
      </form>
    </div>
  );
};

export default MachineChoice;
