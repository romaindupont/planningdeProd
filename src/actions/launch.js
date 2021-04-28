export const SAVE_OPERATING_TIME = 'SAVE_OPERATING_TIME';
export const saveOperatingTime = (operating_time) => ({
  type: SAVE_OPERATING_TIME,
  operating_time,
});

export const SAVE_SEARCH_REF = 'SAVE_SEARCH_REF';
export const saveSearchRef = (lancement) => ({
  type: SAVE_SEARCH_REF,
  lancement,
});


export const SAVE_CALCUL_START = 'SAVE_CALCUL_START';
export const saveCalculStart = (calculStart) => ({
  type: SAVE_CALCUL_START,
  calculStart,
});


export const ADD_PLANNING = 'ADD_PLANNING';
export const addPlanning = (newPlanning) => ({
  type: ADD_PLANNING,
  newPlanning
});

export const FETCH_PLANNING = 'FETCH_PLANNING';
export const fetchPlanning = () => ({
  type: FETCH_PLANNING,
});

export const SAVE_PLANNING = 'SAVE_PLANNING';
export const savePlanning = (id,name,start,end,progress,dependencies,lancement) => ({
  type:SAVE_PLANNING,
  id,
  name,
  start,
  end,
  progress,
  dependencies,
  lancement,
});


export const ADD_PLANNING_IN_DB = 'ADD_PLANNING_IN_DB';
export const addPlanningInDb = (planning) => ({
  type:ADD_PLANNING_IN_DB,
  planning,
});
export const ADD_SEVERAL_LINE_IN_DB = 'ADD_SEVERAL_LINE_IN_DB';
export const addSeveralLineInDb = () => ({
  type:ADD_SEVERAL_LINE_IN_DB,
});

export const UPDATED_PLANNING = 'UPDATED_PLANNING';
export const updatedPlanning = (id,name,start,end,progress,dependencies,lancement) => ({
  type:UPDATED_PLANNING,
  id,
  name,
  start,
  end,
  progress,
  dependencies,
  lancement,
});

export const DELETE_PLANNING = 'DELETE_PLANNING';
export const deletePlanning = (id) => ({
  type: DELETE_PLANNING,
  id,
});

export const SAVE_NUMERO_LCT = 'SAVE_NUMERO_LCT';
export const saveNumeroLct = (n_lancement) => ({
  type: SAVE_NUMERO_LCT,
  n_lancement,
});
