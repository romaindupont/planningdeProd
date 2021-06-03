import React from 'react';

const Select = ({ listMachine }) => {
  return (
    <select className="ganttMachine-choice-button-select" name="select" id="">
      {listMachine.map((machine, i) =>
      <option key={i} value={machine.id} data-name-machine={machine.name} >{machine.name}</option>
      )}
    </select>
  );
};

export default Select;
