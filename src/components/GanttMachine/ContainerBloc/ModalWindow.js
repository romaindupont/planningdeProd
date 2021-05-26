import React from 'react';

const ModalWindow = ({ MachinePlanning, getId }) => {
  const findTask = MachinePlanning.find((task)=> task.planning_id == getId)
  return (
    <div className="windowModal--open">
      <h1 className="windowModal-titre">Lancement {findTask.lancement}</h1>
      <div className="windowModal-info">
        <p className="windowModal-info-task"><span>id </span>: {findTask.planning_id}</p>
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
