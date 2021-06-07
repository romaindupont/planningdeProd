import React from 'react';

const ModalWindow = ({ MachinePlanning, getId, clickTasks }) => {
  const handleClickOnTask = (e) => {
    clickTasks(
      e.target.childNodes[0].dataset.planning_id,
      e.target.childNodes[0].dataset.name,
      e.target.childNodes[0].dataset.start,
      e.target.childNodes[0].dataset._end,
      e.target.childNodes[0].dataset.progress,
      e.dependencies,
      e.target.childNodes[0].dataset.lancement,
      e.target.childNodes[0].dataset.quantity
    );
  };
  const findTask = MachinePlanning.find((task) => task.planning_id == getId)
  return (
    <div className="windowModal--open" onClick={handleClickOnTask} >
      <div className="windowModal--none"
        data-lancement={findTask.lancement}
        data-planning_id={findTask.planning_id}
        data-name={findTask.name}
        data-quantity={findTask.quantity}
        data-start={findTask.start}
        data-_end={findTask._end}
        data-progress={findTask.progress}
      >
      </div>
      <h1 className="windowModal-titre">Lancement {findTask.lancement}</h1>
      <div className="windowModal-info">
        <p className="windowModal-info-task" data-planning_id={findTask.planning_id} ><span>id </span>: {findTask.planning_id}</p>
        <p className="windowModal-info-task"><span>Nom </span>: {findTask.name}</p>
        <p className="windowModal-info-task"><span>Quantité </span>: {findTask.quantity}</p>
        <p className="windowModal-info-task"><span>Date début </span>: {findTask.start}</p>
        <p className="windowModal-info-task"><span>Date fin </span>: {findTask._end}</p>
        <progress className="windowModal-info-progress" max="100" value={findTask.progress}></progress>
        <span className="windowModal-info-progress-width">{findTask.progress}%</span>
      </div>
    </div>
  );
};

export default ModalWindow;
