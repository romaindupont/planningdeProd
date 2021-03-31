import React, {useEffect} from 'react';


const Select = ({listArticles, changeField,nameArticleSelect, saveOperatingTime,saveSearchRef, lancement})=> {
 const list = listArticles.filter((articles)=> articles.level===1);

 let ensembleFab=listArticles;

  const changeSelect = (e) => {
    changeField(e.target.value);
    list.map((article)=> {
      if(article.article_name===e.target.value){
        saveOperatingTime(article.operating_time);
        ensembleFab = listArticles.filter((articles)=> articles.dependencies===article.id)
        //console.log(ensembleFab)
        saveSearchRef(ensembleFab);
      }
    })
  }

  return (
    <div className="selection">
      <select className="select" name="reference" id="ref-select" onChange={changeSelect} value={nameArticleSelect}>
        {list.map((article)=>
        <option key={article.id} value={article.article_name}>{article.article_name}</option>
        )}
      </select>
      <table className="select-table">
        <tbody className="select-table-tbody">
              {lancement.map((article)=>
                <tr id={article.id}>
                  <td >{article.id}</td>
                  <td >{article.article_name}</td>
                  <td >{article.machine_id}</td>
                  <td >{article.operating_time}</td>
                  <td >{article.dependencies}</td>
                  <td >{article.level}</td>
                </tr>
              )}
            </tbody>
      </table>
    </div>
  )
}
export default Select;
