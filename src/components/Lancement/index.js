import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from './Table';

const Lancement = ({fetchPlanning})=> {
  useEffect(() => {
    fetchPlanning();
  }, []);
  return (
    <div className="lancement">
      <Link exact="true" to="/"><button>revenir au menu</button></Link>
      <h1 className="lancement-title">Lancement en Prod</h1>
      <form action="" type="submit">
        <input type="text" placeholder="indiquer votre numero de lancement"/>
        <button type="submit">Rechercher</button>
      </form>
      <Table />
    </div>
  )
}
export default Lancement;
