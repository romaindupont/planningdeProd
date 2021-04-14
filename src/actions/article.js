export const ADD_ARTICLE = 'ADD_ARTICLE';
export const addArticle = (id,article_name,level,machine_id,operating_time,description,dependencies) => ({
  type: ADD_ARTICLE,
  id,
  article_name,
  level,
  machine_id,
  operating_time,
  description,
  dependencies,
});

export const SAVE_ID = 'SAVE_ID';
export const saveId = (id) => ({
  type: SAVE_ID,
  id,
});

export const SEARCH_INFO = 'SEARCH_INFO';
export const searchInfo = (id,article_name,level,machine_id,operating_time,description,dependencies) => ({
  type: SEARCH_INFO,
  id,
  article_name,
  level,
  machine_id,
  operating_time,
  description,
  dependencies,
});

export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const updateArticle = (id,article_name,level,machine_id,operating_time,description,dependencies) => ({
  type: UPDATE_ARTICLE,
  id,
  article_name,
  level,
  machine_id,
  operating_time,
  description,
  dependencies,
});

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  id,
});

export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const fetchArticle = () => ({
  type: FETCH_ARTICLE,
});

export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const saveArticle = (articles) => ({
  type: SAVE_ARTICLE,
  articles,
});
