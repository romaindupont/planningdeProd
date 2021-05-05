import React, { useEffect } from 'react';
import moment from 'moment';

const Tbody = ({numero,reference,debut,fin,id,machine,progression, tasks})=> {
  let filteredTasks = [];

  console.log(reference,numero)
/*   if (numero!=null && reference===undefined && debut===undefined && fin===undefined && id==0 && progression===undefined) {
    console.log('je passe dans numero',numero)
   filteredTasks=tasks.filter((task) => task.lancementn==numero);
   return filteredTasks;
  }
  if (reference!=undefined && numero===null && debut===undefined && fin===undefined && id==0 && progression===undefined) {
    console.log('je passe dans reference',reference,numero)
    filteredTasks=tasks.filter((task) => task.name==reference);
    return filteredTasks;
  } */
  if(numero!=null){
   console.log('je passe dans debut',debut)
   filteredTasks=tasks.filter((task) => task.lancementn==numero);
   //filteredTasks=tasks.filter((task) => moment(task.start).format('DD/MM/YYYY')==debut);
   return filteredTasks;
 };
  if(reference!=undefined){
    console.log('je passe dans reference',reference)
    filteredTasks=tasks.filter((task) => task.name==reference);
    return filteredTasks;
  };
  /* if(fin!=undefined){
    console.log('je passe dans fin',fin)
    filteredTasks=tasks.filter((task) => moment(task.end).format('DD/MM/YYYY')==fin);
    console.log(filteredTasks.length)
  };
   if(id!=null){
    console.log('je passe dans id',id)
    filteredTasks=tasks.filter((task) => task.id==id);
    console.log(filteredTasks.length)
  };
  if(progression!=null){
    console.log('je passe dans progression', progression)
    filteredTasks=tasks.filter((task) => task.progress==progression);
    console.log(filteredTasks.length)
  }; */
  if(filteredTasks.length===0){
    console.log('je passe dans tasks', filteredTasks.length)
    filteredTasks=tasks;
  };
  console.log(filteredTasks);
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
