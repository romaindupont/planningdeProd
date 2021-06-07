import React, { useState } from 'react';
import Field from '../../containers/MachinesPage/FieldMachine';
import Popup from '../../containers/Reglages/Popup';

const FormMachine = ({ id, addMachine, updateMachine, deleteMachine, listMachine }) => {
  const [ isShowing, setIsShowing ] = useState(false);
  const handleDelete = (event) => {
    event.preventDefault();
    deleteMachine(id);
    setIsShowing(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.id.value === '') {
      addMachine(
        event.target.id.value,
        event.target.name.value,
        event.target.yield_time.value
      );
      setIsShowing(true);
    }
    else {
      const UpdateMachine = listMachine.filter((machine) => {
        if (machine.id == event.target.id.value){
          updateMachine(
            machine.id,
            event.target.name.value,
            event.target.yield_time.value
          );
          setIsShowing(true);
        };
      })
    };
  };
  return (
    <form className="articlePage-form" onSubmit={handleSubmit}>
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
        placeholder="yield_time"
        name="yield_time"
      />
      <div className="form-field-button-zones">
        <button className="form-field-button" type="submit">{id == '' ? "Ajouter" : "Modifier"}</button>
        <button className="form-field-button remove" onClick={handleDelete}>Remove</button>
      </div>
      {isShowing && (<Popup setIsShowing={setIsShowing} />)}
    </form>
  );
};

export default FormMachine;
