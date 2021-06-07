import React from 'react';

const Select = ({ listMachine, classNom }) => {
  return (
    <select className={`ganttMachine-choice-button-${classNom}`} name="select" id="">
      {listMachine.map((machine, i) =>
      <option key={i} value={machine.id} data-name-machine={machine.name} >{machine.id} - {machine.name}</option>
      )}
    </select>
  );
};

export default Select;
