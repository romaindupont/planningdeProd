import moment from 'moment';

/**
 *
 * @param {array} list
 * @param {string} searchWord
 * @returns {array} newList
 */
export function searchTask(list, searchWord) {
  console.log(searchWord.searchText, searchWord.category, list)
  if (searchWord.searchText === "") {
    return list;
  }
  if (searchWord.searchText === "numero") {
    const newList = list.filter((task) => task.lancement == searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "reference") {
    const newList = list.filter((task) => task.reference.includes(searchWord.category.toUpperCase()));
    return newList;
  }
  if (searchWord.searchText === "debut") {
    const newList = list.filter((task) => moment(task.start).format('DD/MM/YYYY') == searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "fin") {
    const newList = list.filter((task) => moment(task._end).format('DD/MM/YYYY') == searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "id") {
    const newList = list.filter((task) => task.planning_id == searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "progression") {
    const newList = list.filter((task) => task.progress == searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "machine") {
    const newList = list.filter((task) => task.machinename.includes(searchWord.category.toUpperCase()));
    return newList;
  }
};
