import React, { useEffect } from 'react';
import moment from 'moment';

const Tbody = ({ numero, reference, debut, fin, id, machine, progression, tasks, filterList })=> {
  let filteredTasks = filterList;
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
    };
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
    };
  };
  return (
    <tbody>
      {filteredTasks.map((task,i) =>
      <tr key={i} id={task.id}>
        <td><input onChange={handleCheckBox}  value={task.id} type="checkbox" /></td>
        <td>{task.lancementn}</td>
        <td>{task.name}</td>
        <td>{moment(task.start).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td>{moment(task.end).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td>{task.id}</td>
        <td>M8</td>
        <td>{task.progress}</td>
      </tr>)}
    </tbody>
  );
};

export default Tbody;
