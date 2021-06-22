import React from 'react';
import moment from 'moment';

const Tbody = ({ tasks, search, saveLct, saveIdLct, PlanningForMachine }) => {
  let filterTasks = PlanningForMachine.filter((task) => task.lancement === parseInt(search));
  if (filterTasks.length === 0) {
    filterTasks = PlanningForMachine;
  }
  const handleCheckBox = async (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      await saveIdLct(e.target.value);
      const theLancement = tasks.find((lancement) => lancement.id == e.target.value);
      saveLct(
        theLancement.id,
        theLancement.lancementn,
        theLancement.name,
        theLancement.start,
        theLancement.end,
        theLancement.quantity,
        theLancement.progress
      );
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
      saveIdLct('');
      saveLct('','','','','','','');
    }
  };
  return (
    <tbody>
      {filterTasks.map((task,i)=>
      <tr key={i} id={task.planning_id}>
        <td><input type="checkbox" onChange={handleCheckBox} value={task.planning_id}></input></td>
        <td>{task.lancement}</td>
        <td>{task.reference}</td>
        <td>{moment(task.start).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td>{moment(task._end).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td>{task.planning_id}</td>
        <td>{task.quantity}</td>
        <td>{task.description}</td>
      </tr>)}
    </tbody>
  );
};

export default Tbody;
