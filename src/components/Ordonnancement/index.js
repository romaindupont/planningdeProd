import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Table from './Table';

const Ordonnancement = ()=> {
  const [search,setSearch] = useState('');
  return (
    <div className="lancement">
      <Link exact="true" to="/"><button>revenir au menu</button></Link>
      <h1 className="lancement-title">Ordonnancement</h1>
      <div className="container-ordo">
        <Table search={search} setSearch={setSearch}/>
      </div>
    </div>
  )
}
export default Ordonnancement;
