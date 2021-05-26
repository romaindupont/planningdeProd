/**
 *
 * @param {array} list
 * @param {string} machine_id
 * @returns {array} newList
 */
export function searchMachinePlanning(list, searchWord) {
  if (searchWord === "") {
    const newList = list;
    return newList;
  }
  if (searchWord != "") {
    const newList = list.filter((task) => task.machine_id == searchWord);
    return newList;
  }
};
