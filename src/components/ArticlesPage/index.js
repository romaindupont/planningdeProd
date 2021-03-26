import React, {useState} from 'react';
import classnames from 'classnames';
import Table from '../../containers/ArticlesPage/Table/Table';
import FormArticle from '../../containers/ArticlesPage/FormArticle';
import {Link} from 'react-router-dom';
import './style.scss';

const ArticlesPage = ()=> {
  const [check, setCheck] = useState(false);
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
    }
    setCheck(e.target.checked)
    console.log(e.target.checked)
  }
  return (
    <div className="articlePage">
       <Link exact to="/"><button>revenir au menu</button></Link>
      <h1 className="articlePage-title">Base Articles</h1>
      <div className="articlePage-list">
        <Table />
        <FormArticle />
      </div>
    </div>
  )
}
export default ArticlesPage;
