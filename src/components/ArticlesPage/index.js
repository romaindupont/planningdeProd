import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../containers/ArticlesPage/Table/Table';
import FormArticle from '../../containers/ArticlesPage/FormArticle';
import BackToMenu from '../BackToMenu';


const ArticlesPage = ()=> {
  return (
    <div className="articlePage">
       <BackToMenu />
        <h1 className="articlePage-title">Base Articles</h1>
        <div className="articlePage-list">
        <Table />
        <FormArticle />
      </div>
    </div>
  );
};
export default ArticlesPage;
