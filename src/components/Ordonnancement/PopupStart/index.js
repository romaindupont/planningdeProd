import React from 'react';
import moment from 'moment';
import momentBusinessTime from 'moment-business-time';
import momentBusinessDays from 'moment-business-days';
import { openDate } from '../../../Utils/openDate';

const PopupStart = ({
  setStartClick,
  name,
  lctNumber,
  start,
  end,
  updatedLancement,
  articleList,
  quantity,
  updatedQuantity,
  deletePlanning,
  id,
  setIsShowing
}) => {
  openDate();
  const newList = articleList.find((article) => article.reference === name);
  const noClick = () => {
    setStartClick(false);
  };
  const debutClick = () => {
    setStartClick(false);
    const newEndDate = momentBusinessTime(start, 'YYYY-MM-DD HH:mm:ss').addWorkingTime(newList.tempsop * quantity / (newList.yield_time / 100), 'minutes')._d;
    const endDate = moment(newEndDate).format('YYYY-MM-DD HH:mm:ss');
    updatedLancement(start, endDate);
    setIsShowing(true);
  };
  const finClick = () => {
    setStartClick(false);
    updatedLancement(start, end);
    setIsShowing(true);
  };
  const QClick = () => {
    setStartClick(false);
    updatedQuantity(quantity);
    setIsShowing(true);
  };
  const suppClick = () => {
    setStartClick(false);
    deletePlanning(id);
    setIsShowing(true);
  };
  return (
    <div className="popup">
      <h1 className="popup-title">Etes-vous sûr de vouloir modifier les données ?</h1>
      <p className="popup-text--bold">Lancement N°{lctNumber} : {name} </p>
      <h3 className="popup-title">Vous avez changé :</h3>
        <button className="popup--oui" onClick={debutClick}>La date de début</button>
        <button className="popup--oui" onClick={finClick}>La date de fin</button>
        <button className="popup--oui" onClick={QClick}>La quantité</button>
        <button className="popup--oui" onClick={suppClick}>Supprimer</button>
        <button className="popup--non" onClick={noClick}>Annuler</button>
    </div>
  );
};

export default PopupStart;
