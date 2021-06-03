import React from 'react';
import Field from '../../containers/GanttGeneral/Field';

const ChangeInfo = ({ getId, tasks }) => {
  const InputValue = tasks.find(task => task.id == getId);
  return (
    <>
     <Field
      type="text"
      name="id"
      placeholder="id"
    />
    </>
  )
}

export default ChangeInfo;
