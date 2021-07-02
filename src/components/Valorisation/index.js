import React, { useState, useEffect } from 'react';
import BackToMenu from '../BackToMenu';
import Settings from '../../containers/Valorisation/Settings';
import WaitMaterial from './WaitMaterial';
import TwoDatePicker from '../../containers/Valorisation/DatePicker';
import SearchBar from './SearchBar';
import Table from './Table';
import Camera from '../../../assets/images/camera.png';
import html2canvas from 'html2canvas';
import { PdfValo } from './PdfValo';

const Valorisation = () => {
  const [ search, setSearch ] = useState('');
  const [ total, setTotal ] = useState(0);
  const [ cUnitaire, setCUnitaire ] = useState(0);
  const [ filterList, setFilterList ] = useState()
  const changeSearch = (e) => {
    setSearch(e.target.value.toUpperCase())
  }
  const newTotal = () => {
    const table = document.querySelector(".table-valo");
    const row = document.querySelectorAll(".trVal");
    const cells = document.querySelectorAll(".trVal > td");
    let totalTd = 0;
    let coutUni = 0;
    for (let i = 0; i < row.length; i++) {
      totalTd = totalTd + parseInt(row[i].cells[7].innerHTML);
      setTotal(totalTd);
      coutUni = coutUni + parseInt(row[i].cells[8].innerHTML);
      setCUnitaire(coutUni);
    }
  }
  const handleChange = () => {}
  const startCapture = () => {
    html2canvas(document.querySelector(".impression"))
      .then(canvas => {
      document.body.appendChild(canvas)
      canvas.style.display = 'none'
      return canvas
      })
      .then(canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'valorisation.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
        PdfValo('Tableau des Valorisations',filterList,image,total,cUnitaire)
    })
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
      <div className="impression">
        <SearchBar search={search} changeSearch={changeSearch}/>
        <TwoDatePicker newTotal={newTotal}/>
      </div>
      <Table search={search} setFilterList={setFilterList} />
      <div className="valorisation-footer">
        <form className="valorisation-form" type="submit">
          <span className="valorisation-search">Montant Total</span>
          <input className="valorisation-input" type="text" readOnly value={total} onChange={handleChange}/>
        </form>
        <form className="valorisation-form" type="submit">
          <span className="valorisation-search">Coût unitaire Total</span>
          <input className="valorisation-input" type="text" readOnly value={cUnitaire} onChange={handleChange}/>
        </form>
      </div>
      <button className="button-screenshot" onClick={startCapture}>
        <img className="button-screenshot--img" src={Camera} alt="camera" />
      </button>
    </div>
  );
};

export default Valorisation;
