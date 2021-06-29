import React, { useState } from 'react';
import BackToMenu from '../BackToMenu';
import Settings from './Settings';
import WaitMaterial from './WaitMaterial';
import TwoDatePicker from './DatePicker';
import SearchBar from './SearchBar';
import Table from './Table';

const Valorisation = () => {
  const [ search, setSearch ] = useState('');
  const [ total, setTotal ] = useState(0);
  const changeSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="Valorisation">
      <BackToMenu />
      <Settings />
      <WaitMaterial />
      <h1 className="Valorisation-title">Valorisation</h1>
      <SearchBar search={search} changeSearch={changeSearch}/>
      <TwoDatePicker />
      <Table search={search} total={total} setTotal={setTotal} />
      <form className="valorisation-form" type="submit">
        <span className="valorisation-search">Montant Total</span>
        <input className="valorisation-input" type="text" readOnly defaultValue={total}/>
      </form>
    </div>
  );
};

export default Valorisation;
