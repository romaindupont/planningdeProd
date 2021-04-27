import React from 'react';
import Field from '../../containers/ArticlesPage/FieldArticle';
import {generateId} from '../../Utils';

const FormArticle = ({id,articleList, addArticle,updateArticle, deleteArticle})=> {
  const handleSubmit = (event) => {
    event.preventDefault();
    //const newId = String(generateId(articleList));
    if (event.target.id.value==='') {
      addArticle(event.target.article_name.value,event.target.level.value,event.target.machine_id.value,event.target.operating_time.value,event.target.description.value,event.target.dependencies.value);
    }
    else {
      const UpdateArticle = articleList.filter((article)=> {
        if (article.id ==event.target.id.value){
          updateArticle(article.id,event.target.article_name.value,event.target.level.value,event.target.machine_id.value,event.target.operating_time.value,event.target.description.value,event.target.dependencies.value);
        }
      })
    }
  };
  const handleDelete = (event) => {
    event.preventDefault();
    deleteArticle(id);
  };

  return (
          <form className="articlePage-form" onSubmit={handleSubmit}>
              <Field
                type="text"
                placeholder="id"
                name="id"
              />
              <Field
                type="text"
                placeholder="article_name"
                name="article_name"
              />
              <Field
                type="text"
                placeholder="level"
                name="level"
              />
              <Field
                type="text"
                placeholder="machine_id"
                name="machine_id"
              />
              <Field
                type="text"
                placeholder="operating_time"
                name="operating_time"
              />
              <Field
                type="text"
                placeholder="ordre Fab."
                name="description"
              />
              <Field
                type="text"
                placeholder="dependencies"
                name="dependencies"
              />
              <div className="form-button-zones">
                <button className="form-button" type="submit">{id=='' ? "Ajouter" : "Modifier"}</button>
                <button className="form-button remove" onClick={handleDelete}>Remove</button>
              </div>
          </form>
  )
}
export default FormArticle;
