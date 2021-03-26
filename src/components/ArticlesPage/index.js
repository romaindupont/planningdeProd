import React, {useState} from 'react';
import classnames from 'classnames';
import Table from './Table';
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
      <h1 className="articlePage-title">Base Articles</h1>
      <div className="articlePage-list">
        <Table />
      </div>
    </div>
  )
}
export default ArticlesPage;
