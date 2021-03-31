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
