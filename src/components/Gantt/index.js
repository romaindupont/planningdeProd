import React, {useEffect, useState} from 'react';
import ReactGantt, {viewMode} from 'gantt-for-react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Field from '../../containers/Field';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import ButtonMode from '../ButtonMode';
import SelectProd from '../../containers/SelectProd/SelectProd';
import Recalcul from '../Recalcul';
import {generateId} from '../../Utils';

const aujourdhui =moment().format('YYYY-MM-DD, HH:mm:ss');
const demain = moment().add(3, 'hours').format('YYYY-MM-DD, HH:mm:ss');

const GanttField = ({
  tasks,
  addTasks,
  id,
  name,
  clickTasks,
  updateTasks,
  deleteTasks
}) => {
  const [modeView, setModeView] = useState('Quarter Day');
  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = String(generateId(tasks));
    if (event.target.id.value==='') {
      addTasks(newId,event.target.name.value,event.target.start.value,event.target.end.value,event.target.progress.value,event.target.dependencies.value)
    }
    else {
      const UpdateTask = tasks.filter((task)=> {
        if (task.id ===event.target.id.value){
          updateTasks(task.id,event.target.name.value,event.target.start.value,event.target.end.value,event.target.progress.value,event.target.dependencies.value)
        }
      })
    }
  };
const handleDelete = (event) => {
  event.preventDefault();
  deleteTasks(id)
};
const handleClickOnTask = (e) => {
  clickTasks(e.id,e.name,e.start,e.end,e.progress,e.dependencies);
};
const custom_popup_html = (event) => {
  const end_date = event._end.toLocaleString();
  const start_date = event._start.toLocaleString();
  return (
    `
    <div class="details-container">
      <h5 class="details-container-title">${event.name}</h5>
      <p class="details-container-date">Fin le ${end_date}</p>
      <p class="details-container-progress">${event.progress}%</p>
      <p class="details-container-dependencies">Dépendances :${event.dependencies}</p>
    </div>
  `
  )
};
const handleRecalculate = (e) => {
  e.preventDefault();
};
  return (
    <div className="gantt">
      <Link exact="true" to="/"><button>revenir au menu</button></Link>
      <h1 className="gantt-title">Planning de production</h1>
      <div className="gantt-graph">
        <ReactGantt
                    tasks={tasks}
                    viewMode={modeView}
                    onDateChange={(task, start, end) => console.log(task, start, end)}
                    onClick={handleClickOnTask}
                    customPopupHtml={custom_popup_html}
        />
        <ButtonMode setModeView={setModeView} />
        <form className="form" onSubmit={handleSubmit}>
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
          <div className="form-button-zones">
            <button className="form-button" type="submit">{id=='' ? "Ajouter" : "Modifier"}</button>
            <button className="form-button remove" onClick={handleDelete} type="submit">Remove</button>
          </div>
        </form>
      </div>
      <Recalcul />
      <div className="gantt-select">
        <h3>selection du lancement</h3>
        <SelectProd />
      </div>
    </div>
  )
}
export default GanttField;
