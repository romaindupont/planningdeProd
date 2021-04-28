import React from 'react';


const Tbody = ({tasks})=> {
  console.log(tasks)
  return (
    <tbody>
      {tasks.map((task,i)=>
      <tr key={i} id={task.id}>
        <td><input value={task.id} type="checkbox"></input></td>
        <td>{task.lancementn}</td>
        <td>{task.name}</td>
        <td>{task.start}</td>
        <td>{task.end}</td>
        <td>{task.id}</td>
      </tr>)}
    </tbody>
  )
}
export default Tbody;
