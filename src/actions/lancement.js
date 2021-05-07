import { searchTask } from '../Utils/tri';

export const SAVE_LCT = 'SAVE_LCT';
export const saveLct = (id,lancementn,name,start,end,quantity,progression) => ({
  type: SAVE_LCT,
  id,
  lancementn,
  name,
  start,
  end,
  quantity,
  progression
});

export const SAVE_ID_LCT= 'SAVE_ID_LCT';
export const saveIdLct = (id) => ({
  type: SAVE_ID_LCT,
  id,
});

export const UPDATED_LANCEMENT = 'UPDATED_LANCEMENT';
export const updatedLancement = (start,end) => ({
  type:UPDATED_LANCEMENT,
  start,
  end
});

export const UPDATED_END = 'UPDATED_END';
export const updatedEnd = (end) => ({
  type:UPDATED_END,
  end
});

export const UPDATED_QUANTITY = 'UPDATED_QUANTITY';
export const updatedQuantity = (quantity) => ({
  type:UPDATED_QUANTITY,
  quantity
});

export const CHANGE_POPUP = 'CHANGE_POPUP';
export const changePopup = (open,popupText) => ({
  type:CHANGE_POPUP,
  open,
  popupText,
});

export const SEARCH_VALUE = 'SEARCH_VALUE';
export const searchValue = (newValue, key) => ({
  type: SEARCH_VALUE,
  newValue,
  key,
});

export const UPDATE_LIST = 'UPDATE_LIST';
export const update = (list, searchWord) => {
  const updateList = searchTask(list, searchWord);
  return ({
  type: UPDATE_LIST,
  filterList: updateList,
});
};
