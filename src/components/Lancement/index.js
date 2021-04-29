import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Table from './Table';
import SearchBar from './SearchBar';
import Form from '../../containers/Lancement/Form';

const Lancement = ({fetchPlanning})=> {
  const [search,setSearch] = useState('')
  const changeNumber = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    fetchPlanning();
  }, []);
  return (
    <div className="lancement">
      <Link exact="true" to="/"><button>revenir au menu</button></Link>
      <h1 className="lancement-title">Lancement en Prod</h1>
      <SearchBar changeNumber={changeNumber} search={search} />
      <div className="container-lancement">
        <Table search={search}/>
        <Form />
      </div>
    </div>
  )
}
export default Lancement;
