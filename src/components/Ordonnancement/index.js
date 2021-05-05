import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Table from './Table';

const Ordonnancement = ()=> {
  return (
    <div className="lancement">
      <Link exact="true" to="/"><button>revenir au menu</button></Link>
      <h1 className="lancement-title">Ordonnancement</h1>
      <div className="container-ordo">
        <Table />
      </div>
    </div>
  );
};

export default Ordonnancement;
