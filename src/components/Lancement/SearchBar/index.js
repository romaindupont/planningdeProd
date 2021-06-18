import React from 'react';

const SearchBar = ({ changeNumber, search, placeholder })=> {
  return (
    <form className="lancement-form" action="" type="submit">
      <span className="lancement-search">Recherche</span>
      <input className="lancement-input" type="text" placeholder={placeholder} onChange={changeNumber} value={search} />
    </form>
  );
};

export default SearchBar;
