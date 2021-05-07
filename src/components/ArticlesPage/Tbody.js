import React, {useEffect} from 'react';

const Tbody = ({ saveId, searchInfo, articlesList, waitArticle })=> {
  const handleCheckBox = async (e) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.add("checked");
      await saveId(e.target.value);
      const oneArticle = articlesList.find((article)=> article.id==e.target.value);
      searchInfo(
        oneArticle.id,
        oneArticle.reference,
        oneArticle.niveau,
        oneArticle.machine_id,
        oneArticle.tempsop,
        oneArticle.description,
        oneArticle.liaison
      );
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`).classList.remove("checked");
      saveId('');
      searchInfo('','','','','','','');
    }
  };
  return (
          <tbody>
            {waitArticle && (<tr key="patience" className="app-load"><td value="">Veuillez patienter</td></tr>)}
            {!waitArticle && (
              articlesList.map((article, i)=>
                <tr key={i} id={article.id}>
                  <td ><input onChange={handleCheckBox}  value={article.id} type="checkbox"></input></td>
                  <td >{article.id}</td>
                  <td >{article.reference}</td>
                  <td >{article.machine_id}</td>
                  <td >{article.tempsop}</td>
                  <td >{article.liaison}</td>
                  <td >{article.niveau}</td>
                </tr>
              )
            )
            }
          </tbody>
  );
};

export default Tbody;
