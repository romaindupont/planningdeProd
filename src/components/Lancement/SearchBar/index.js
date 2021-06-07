import React from 'react';

const SearchBar = ({ changeNumber, search })=> {
  return (
    <form className="lancement-form" action="" type="submit">
      <span className="lancement-search">Recherche</span>
      <input className="lancement-input" type="text" placeholder="Numero de lancement" onChange={changeNumber} value={search} />
    </form>
  );
};

export default SearchBar;
