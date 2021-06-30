import React, { useState, useEffect } from 'react';
import BackToMenu from '../BackToMenu';
import Settings from './Settings';
import WaitMaterial from './WaitMaterial';
import TwoDatePicker from '../../containers/Valorisation/DatePicker';
import SearchBar from './SearchBar';
import Table from './Table';

const Valorisation = () => {
  const [ search, setSearch ] = useState('');
  const [ total, setTotal ] = useState(0);
  const changeSearch = (e) => {
    setSearch(e.target.value)
  }
  const newTotal = () => {
    const table = document.querySelector(".table-valo");
    const row = document.querySelectorAll(".trVal");
    const cells = document.querySelectorAll(".trVal > td");
    let totalTd = 0;
    for (let i = 0; i < row.length; i++) {
      totalTd = totalTd + parseInt(row[i].cells[7].innerHTML);
      setTotal(totalTd);
    }
  }
  const handleChange = () => {

  }
  useEffect(() => {
    newTotal();
  }, [search]);
  return (
    <div className="Valorisation">
      <BackToMenu />
      <Settings />
      <WaitMaterial />
      <h1 className="Valorisation-title">Valorisation</h1>
      <SearchBar search={search} changeSearch={changeSearch}/>
      <TwoDatePicker newTotal={newTotal}/>
      <Table search={search} total={total} setTotal={setTotal} />
      <form className="valorisation-form" type="submit">
        <span className="valorisation-search">Montant Total</span>
        <input className="valorisation-input" type="text" readOnly value={total} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default Valorisation;
