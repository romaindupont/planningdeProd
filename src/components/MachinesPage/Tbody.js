import React, { useState } from 'react';

const Tbody = ({ listMachine, saveIdMachine, searchInfoMachine, wait }) => {
  const handleCheckBox = async (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      await saveIdMachine(e.target.value);
      const oneMachine = listMachine.find((machine)=> machine.id==e.target.value);
      searchInfoMachine(
        oneMachine.id,
        oneMachine.name,
        oneMachine.yield_time,
      );
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
      saveIdMachine('');
      searchInfoMachine('','','');
    }
  };
  return (
    <tbody>
      {wait && (<tr key="patience" className="app-load"><td value="">Veuillez patienter</td></tr>)}
      {!wait && (listMachine.map((machine, i) =>
      <tr key={i} id={machine.id}>
        <td ><input onChange={handleCheckBox} type="checkbox" value={machine.id}></input></td>
        <td >{machine.id}</td>
        <td >{machine.name}</td>
        <td >{machine.yield_time}</td>
      </tr>
      ))}
    </tbody>
  )
}

export default Tbody;
