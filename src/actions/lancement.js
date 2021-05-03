export const SAVE_LCT = 'SAVE_LCT';
export const saveLct = (id,lancementn,name,start,end) => ({
  type: SAVE_LCT,
  id,
  lancementn,
  name,
  start,
  end
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

export const CHANGE_POPUP = 'CHANGE_POPUP';
export const changePopup = (open,popupText) => ({
  type:CHANGE_POPUP,
  open,
  popupText,
});
