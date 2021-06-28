import React, { useState } from 'react';
import BackToMenu from '../BackToMenu';
import Settings from './Settings';
import WaitMaterial from './WaitMaterial';
import TwoDatePicker from './DatePicker';
import SearchBar from './SearchBar';
import Table from './Table';

const Valorisation = () => {
  const [ search, setSearch ] = useState('');
  return (
    <div className="Valorisation">
       <BackToMenu />
       <Settings />
       <WaitMaterial />
      <h1 className="Valorisation-title">Valorisation</h1>
      <SearchBar search={search} />
      <TwoDatePicker />
      <Table search={search}/>
      <form className="valorisation-form" action="" type="submit">
        <span className="valorisation-search">Montant Total</span>
        <input className="valorisation-input" type="text" readOnly/>
      </form>


    </div>
  );
};

export default Valorisation;
