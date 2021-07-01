export const TRANSFERT_REF_TO_VALO = 'TRANSFERT_REF_TO_VALO';
export const transfertRefToValo = (id, planning_id, reference, _end, quantity, cout, montant) => ({
  type: TRANSFERT_REF_TO_VALO,
  id,
  planning_id,
  reference,
  _end,
  quantity,
  cout,
  montant
});

export const UPDATED_PROGRESS = 'UPDATED_PROGRESS';
export const updatedProgress = (planning_id, progress) => ({
  type: UPDATED_PROGRESS,
  planning_id,
  progress
});

export const SETTINGS_LIST = 'SETTINGS_LIST';
export const settingsList = (choraire) => ({
  type: SETTINGS_LIST,
  choraire
});

export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const fetchSettings = () => ({
  type: FETCH_SETTINGS
});

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const updateSettings = (id, choraire) => ({
  type: UPDATE_SETTINGS,
  id,
  choraire
});

export const SETTINGS_UPDATE_STATE = 'SETTINGS_UPDATE_STATE';
export const settingsUpdateState = (choraire) => ({
  type: SETTINGS_UPDATE_STATE,
  choraire
});

export const ADD_TO_VALO = 'ADD_TO_VALO';
export const addToValo = ( planning_id, cout, montant) => ({
  type: ADD_TO_VALO,
  planning_id,
  cout,
  montant
});

export const FETCH_VALO_LIST = 'FETCH_VALO_LIST';
export const fetchValoList = () => ({
  type: FETCH_VALO_LIST
});

export const SAVE_VALO_LIST = 'SAVE_VALO_LIST';
export const saveValoList = (newList) => ({
  type: SAVE_VALO_LIST,
  newList
});
