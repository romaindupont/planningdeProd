import React from 'react';
import moment from 'moment';

const Tbody = ({ search, PlanningForMachine }) => {
  let filterTasks = PlanningForMachine.filter((task) => task.progress == 100 && task.reference.includes(search));
  if (filterTasks.length === 0) {
    filterTasks = PlanningForMachine.filter((task) => task.progress == 100);
  }
  const handleCheckBox = async (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      /* await saveIdLct(e.target.value); */
    }
     /*  const theLancement = tasks.find((lancement) => lancement.id == e.target.value);
      saveLct(
        theLancement.id,
        theLancement.lancementn,
        theLancement.name,
        theLancement.start,
        theLancement.end,
        theLancement.quantity,
        theLancement.progress
      );
    } */
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
    /*   saveIdLct('');
      saveLct('','','','','','',''); */
    }
  }
  return (
    <tbody>
      {filterTasks.map((task,i)=>
        <tr key={i} id={task.planning_id}>
          <td><input type="checkbox" value={task.planning_id} onChange={handleCheckBox}></input></td>
          <td>{task.planning_id}</td>
          <td>{task.reference}</td>
          <td>{task.tempsop}</td>
          <td>{task.quantity}</td>
          <td>{moment(task._end).format('DD/MM/YYYY HH:mm:ss')}</td>
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
