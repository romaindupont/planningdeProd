import React from 'react';

const Select = ({ listMachine }) => {
  return (
    <select className="ganttMachine-choice-button-select" name="select" id="">
      {listMachine.map((machine, i) =>
      <option key={i} value={machine.id}>{machine.name}</option>
      )}
    </select>
  );
};

export default Select;
