import React, { useState } from 'react';
import Field from '../../containers/Field';
import GanttGeneral from '../../containers/GanttGeneral';
import Popup from '../../containers/Reglages/Popup';
import SelectProd from '../../containers/SelectProd/SelectProd';
import BackToMenu from '../BackToMenu';
import Recalcul from '../Recalcul';
import { generateId } from '../../Utils';

const GanttField = ({
  tasks,
  addTasks,
  id,
  name,
  clickTasks,
  deletePlanning,
  updatedPlanning,
  n_lancement,
  saveNumeroLct,
  lancementn,
  quantity
}) => {
  const [ isShowing, setIsShowing ] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = String(generateId(tasks));
    if (event.target.id.value === '') {
      const numeroLct = parseInt(n_lancement) + 1;
      saveNumeroLct(numeroLct);
      addTasks(
        newId,
        event.target.name.value,
        event.target.start.value,
        event.target.end.value,
        event.target.progress.value,
        event.target.dependencies.value,
        event.target.lancementn.value,
        event.target.quantity.value
      );
      setIsShowing(true);
    }
    else {
      const UpdateTask = tasks.filter((task) => {
        if (task.id === event.target.id.value){
          updatedPlanning(
            task.id,
            event.target.name.value,
            event.target.start.value,
            event.target.end.value,
            event.target.progress.value,
            event.target.dependencies.value,
            event.target.lancementn.value,
            event.target.quantity.value
          );
          setIsShowing(true);
        }
      })
    }
  };
const handleDelete = (event) => {
  event.preventDefault();
  deletePlanning(id);
  setIsShowing(true);
};
const handleClickOnTask = (e) => {
  clickTasks(e.id, e.name, e.start, e.end, e.progress, e.dependencies, e.lancementn, e.quantity);
};
  return (
    <div className="gantt">
      <BackToMenu />
      <div className="gantt-graph">
       <GanttGeneral />
        <form className="form-field" onSubmit={handleSubmit}>
          <Field
            type="text"
            placeholder="id"
            name="id"
          />
          <Field
            type="text"
            placeholder="name"
            name="name"
          />
          <Field
            type="text"
            placeholder="start"
            name="start"
          />
          <Field
            type="text"
            placeholder="end"
            name="end"
          />
          <Field
            type="number"
            placeholder="progress"
            name="progress"
          />
          <Field
            type="text"
            placeholder="dependencies"
            name="dependencies"
          />
          <Field
            type="text"
            placeholder="numero lancement"
            name="lancementn"
          />
          <Field
            type="text"
            placeholder="quantity"
            name="quantity"
          />
          <div className="form-field-button-zones">
            <button className="form-field-button" type="submit">{id=='' ? "Ajouter" : "Modifier"}</button>
            <button className="form-field-button remove" onClick={handleDelete} type="submit">Remove</button>
          </div>
        </form>
      </div>
      {isShowing && (<Popup setIsShowing={setIsShowing} />)}
      <Recalcul />
      <SelectProd />
    </div>
  );
};

export default GanttField;
