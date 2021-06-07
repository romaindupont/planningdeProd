import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../containers/Lancement/Form';
import Table from './Table';
import SearchBar from './SearchBar';
import BackToMenu from '../BackToMenu';

const Lancement = () => {
  const [ search, setSearch ] = useState('');
  const changeNumber = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="lancement">
      <BackToMenu />
      <h1 className="lancement-title">Lancement en Prod</h1>
      <SearchBar changeNumber={changeNumber} search={search} />
      <div className="container-lancement">
        <Table search={search}/>
        <Form />
      </div>
    </div>
  );
};

export default Lancement;
