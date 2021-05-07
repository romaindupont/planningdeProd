import React, {useEffect} from 'react';

const Select = ({
  listArticles,
  changeField,
  nameArticleSelect,
  saveOperatingTime,
  saveSearchRef,
  lancement
}) => {
  const list = listArticles.filter((articles)=> articles.niveau===1);
  let ensembleFab=listArticles;
  const changeSelect = (e) => {
    changeField(e.target.value);
    list.map((article)=> {
      if(article.reference===e.target.value){
        saveOperatingTime(article.tempsop);
        ensembleFab = listArticles.filter((articles)=> articles.liaison == article.id);
        saveSearchRef(ensembleFab);
      }
    })
  };
  return (
    <div className="selection">
      <select className="select" name="reference" id="ref-select" onChange={changeSelect} value={nameArticleSelect}>
        {list.map((article,i)=>
        <option key={i} value={article.reference}>{article.reference}</option>
        )}
      </select>
      <table className="select-table">
        <tbody className="select-table-tbody">
              {lancement.map((article,i)=>
                <tr key={i} id={article.id}>
                  <td >{article.id}</td>
                  <td >{article.reference}</td>
                  <td >{article.machine_id}</td>
                  <td >{article.tempsop}</td>
                  <td >{article.liaison}</td>
                  <td >{article.niveau}</td>
                </tr>
              )}
            </tbody>
      </table>
    </div>
  );
};

export default Select;
