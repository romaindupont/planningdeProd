import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormArticle from '../../containers/ArticlesPage/FormArticle';
import Table from '../../containers/ArticlesPage/Table/Table';
import BackToMenu from '../BackToMenu';
import SearchBar from '../Lancement/SearchBar';

const ArticlesPage = () => {
  const [ search, setSearch ] = useState('');
  const changeNumber = (e) => {
    setSearch(e.target.value.toUpperCase());
  };
  return (
    <div className="articlePage">
      <BackToMenu />
      <SearchBar changeNumber={changeNumber} search={search} placeholder="Référence" />
      <h1 className="articlePage-title">Base Articles</h1>
      <div className="articlePage-list">
        <Table search={search}/>
        <FormArticle />
      </div>
    </div>
  );
};

export default ArticlesPage;
