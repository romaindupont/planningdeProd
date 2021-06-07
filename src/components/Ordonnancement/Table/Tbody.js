import React from 'react';
import moment from 'moment';

const Tbody = ({
  numero,
  reference,
  debut,
  fin,
  id,
  machine,
  progression,
  tasks,
  filterList,
  saveLct,
  saveIdLct
}) => {
  let filteredTasks = filterList;
  const handleCheckBox = async (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      await saveIdLct(e.target.value);
      const theLancement = tasks.find((lancement) => lancement.id==e.target.value);
      saveLct(
        theLancement.id,
        theLancement.lancementn,
        theLancement.name,
        theLancement.start,
        theLancement.end,
        theLancement.quantity,
        theLancement.progress
      );
    };
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
      saveIdLct('');
      saveLct('','','','','','','');
    };
  };
  return (
    <tbody>
      {filteredTasks.map((task,i) =>
      <tr key={i} id={task.id}>
        <td><input onChange={handleCheckBox} value={task.id} type="checkbox" /></td>
        <td>{task.lancementn}</td>
        <td>{task.name}</td>
        <td>{moment(task.start).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td>{moment(task.end).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td>{task.id}</td>
        <td>M8</td>
        <td>{task.progress}</td>
        <td>{task.quantity}</td>
      </tr>)}
    </tbody>
  );
};

export default Tbody;
