export const TRANSFERT_REF_TO_VALO = 'TRANSFERT_REF_TO_VALO';
export const transfertRefToValo = (id, planning_id, reference, tempsop, _end, quantity, cout, montant) => ({
  type: TRANSFERT_REF_TO_VALO,
  id,
  planning_id,
  reference,
  tempsop,
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
