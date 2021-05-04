import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../containers/ArticlesPage/Table/Table';
import FormArticle from '../../containers/ArticlesPage/FormArticle';
import './style.scss';

const ArticlesPage = ()=> {
  return (
    <div className="articlePage">
       <Link exact="true" to="/">
         <button type="button">revenir au menu</button>
        </Link>
        <h1 className="articlePage-title">Base Articles</h1>
        <div className="articlePage-list">
        <Table />
        <FormArticle />
      </div>
    </div>
  );
};
export default ArticlesPage;
