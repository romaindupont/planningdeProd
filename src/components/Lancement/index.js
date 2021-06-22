import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../containers/Lancement/Form';
import PopupMessage from '../../containers/Reglages/Popup';
import Table from './Table';
import SearchBar from './SearchBar';
import BackToMenu from '../BackToMenu';

const Lancement = () => {
  const [ search, setSearch ] = useState('');
  const [ isShowing, setIsShowing ] = useState(false);
  const changeNumber = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="lancement">
      <BackToMenu />
      <h1 className="lancement-title">Lancement en Prod</h1>
      <SearchBar changeNumber={changeNumber} search={search} placeholder="Numero de lancement"/>
      <div className="container-lancement">
        <Table search={search}/>
        <Form setIsShowing={setIsShowing}/>
      </div>
      {isShowing && (<PopupMessage setIsShowing={setIsShowing}/>)}
    </div>
  );
};

export default Lancement;
