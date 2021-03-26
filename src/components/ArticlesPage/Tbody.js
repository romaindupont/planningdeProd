import React from 'react';

const Tbody = ({ articles, saveId, searchInfo})=> {
  const handleCheckBox = async (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      await saveId(e.target.value);
      const essai = articles.find((article)=> article.id==e.target.value);
      searchInfo(essai.id,essai.article_name,essai.level,essai.machine_id,essai.operating_time,essai.description,essai.dependencies);
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
      saveId('');
      searchInfo('','','','','','','');
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
