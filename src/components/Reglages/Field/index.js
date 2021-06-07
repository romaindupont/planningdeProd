import React from 'react';
import InputReglages from '../../../containers/Reglages/index';
import SelectReglages from '../../../containers/Reglages/Select';
import { dayName } from '../../../Utils/dayName';

const FieldReglages = ({ jour, open_close, name }) => {
  return (
    <div className="reglages-form-all">
      <p className="reglages-form-jour" >{dayName(jour)}</p>
      <SelectReglages open_close={open_close} name={`${name}-open_close`} />
      <InputReglages name={`${name}-h1`} />
      <InputReglages name={`${name}-h2`} />
      <InputReglages name={`${name}-h3`} />
      <InputReglages name={`${name}-h4`} />
    </div>
  );
};

export default FieldReglages;
