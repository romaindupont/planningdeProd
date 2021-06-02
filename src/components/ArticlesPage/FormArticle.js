import React, { useState } from 'react';
import Field from '../../containers/ArticlesPage/FieldArticle';
import Popup from '../../containers/Reglages/Popup';
import { generateId } from '../../Utils';

const FormArticle = ({ id, articleList, addArticle, updateArticle, deleteArticle })=> {
  const [ isShowing, setIsShowing ] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.id.value === '') {
      addArticle(event.target.article_name.value,
        event.target.level.value,
        event.target.machine_id.value,
        event.target.operating_time.value,
        event.target.description.value,
        event.target.dependencies.value
      );
      setIsShowing(true);
    }
    else {
      const UpdateArticle = articleList.filter((article)=> {
        if (article.id == event.target.id.value){
          updateArticle(
            article.id,
            event.target.article_name.value,
            event.target.level.value,
            event.target.machine_id.value,
            event.target.operating_time.value,
            event.target.description.value,
            event.target.dependencies.value
          );
          setIsShowing(true);
        };
      })
    };
  };
  const handleDelete = (event) => {
    event.preventDefault();
    deleteArticle(id);
    setIsShowing(true);
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
        <div className="form-field-button-zones">
          <button className="form-field-button" type="submit">{id=='' ? "Ajouter" : "Modifier"}</button>
          <button className="form-field-button remove" onClick={handleDelete}>Remove</button>
        </div>
        {isShowing && (<Popup setIsShowing={setIsShowing} />)}
    </form>
  )
}
export default FormArticle;
