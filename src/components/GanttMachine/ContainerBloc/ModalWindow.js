import React from 'react';

const ModalWindow = ({ tasks, getId }) => {
  const findTask = tasks.find((task)=> task.id == getId)
  return (
    <div className="windowModal--open">
      <h1 className="windowModal-titre">Lancement {findTask.lancementn}</h1>
      <div className="windowModal-info">
        <p className="windowModal-info-task"><span>id </span>: {findTask.id}</p>
        <p className="windowModal-info-task"><span>Nom </span>: {findTask.name}</p>
        <p className="windowModal-info-task"><span>Quantité </span>: {findTask.quantity}</p>
        <p className="windowModal-info-task"><span>Date début </span>: {findTask.start}</p>
        <p className="windowModal-info-task"><span>Date fin </span>: {findTask.end}</p>
        <progress className="windowModal-info-progress" max="100" value={findTask.progress}></progress>
        <span className="windowModal-info-progress-width">{findTask.progress}%</span>
      </div>
    </div>
  );
};

export default ModalWindow;
