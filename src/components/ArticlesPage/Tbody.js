import React from 'react';

const Tbody = ({ articles, saveId})=> {
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      saveId(e.target.value);
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
      saveId('');
    }


  }
  return (
          <tbody>
            {articles.map((article)=>

              <tr id={article.id}>
                <td ><input onChange={handleCheckBox}  value={article.id} type="checkbox"></input></td>
                <td >{article.id}</td>
                <td >{article.article_name}</td>
                <td >{article.machine_id}</td>
                <td >{article.operating_time}</td>
                <td >{article.dependencies}</td>
                <td >{article.level}</td>
              </tr>
            )}
          </tbody>
  )
}
export default Tbody;
