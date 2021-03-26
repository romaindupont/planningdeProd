import React from 'react';
import Field from '../../containers/ArticlesPage/FieldArticle';

const FormArticle = ()=> {

  return (
          <form className="articlePage-form">
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
                placeholder="description"
                name="description"
              />
              <Field
                type="text"
                placeholder="dependencies"
                name="dependencies"
              />
          </form>
  )
}
export default FormArticle;
