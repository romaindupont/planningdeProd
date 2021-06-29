import React from 'react';

const SearchBar = ({ search, changeSearch }) => {
  return (
    <form className="valorisation-form" action="" type="submit">
      <span className="valorisation-search">Recherche</span>
      <input className="valorisation-input" type="text" placeholder="Votre recherche" onChange={changeSearch} value={search} />
    </form>
  );
};

export default SearchBar;
