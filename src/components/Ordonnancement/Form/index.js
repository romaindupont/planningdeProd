import React, { useState } from 'react';
import FieldOrdo from '../../../containers/Ordonnancement/Form/Field';
import PopupStart from '../../../containers/Ordonnancement/PopupStart';

const FormOrdo = ({ id }) => {
  const [ startClick, setStartClick ] = useState(false);
  const Commencer = (e) => {
    e.preventDefault();
    if (id != '') {
      setStartClick(true);
    }
  };
  return (
    <>
    <form className="ordonnancement-form" >
      <FieldOrdo
        type="text"
        placeholder="id"
        name="id"
      />
      <FieldOrdo
        type="text"
        placeholder="n° Lancement"
        name="lctNumber"
      />
      <FieldOrdo
        type="text"
        placeholder="Référence"
        name="name"
      />
      <FieldOrdo
        type="text"
        placeholder="Date de début"
        name="start"
      />
      <FieldOrdo
        type="text"
        placeholder="Date de fin"
        name="end"
      />
      <FieldOrdo
        type="text"
        placeholder="Machine"
        name="machine"
      />
      <FieldOrdo
        type="text"
        placeholder="Quantité"
        name="quantity"
      />
      <FieldOrdo
        type="text"
        placeholder="Progression"
        name="progression"
      />
      <div className="form-ordo-button">
        <button type="submit" className="form-ordo-button--modif" onClick={Commencer}>Modifier</button>
      </div>
    </form>
      {startClick && (<PopupStart setStartClick={setStartClick} />)}
    </>
  );
};

export default FormOrdo;
