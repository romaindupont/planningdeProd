import moment from 'moment';

/**
 *
 * @param {array} list
 * @param {string} searchWord
 * @returns {array} newList
 */
export function searchTask(list, searchWord) {

  if (searchWord.searchText==="") {
    return list;
  }
  if (searchWord.searchText === "numero") {
    const newList = list.filter((task) => task.lancementn==searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "reference") {
    const newList = list.filter((task) => task.name.includes(searchWord.category));
    return newList;
  }
  if (searchWord.searchText === "debut") {
    const newList = list.filter((task) => moment(task.start).format('DD/MM/YYYY')==searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "fin") {
    const newList = list.filter((task) => moment(task.end).format('DD/MM/YYYY')==searchWord.category);
    return newList;
  }
  if (searchWord.searchText === "id") {
    const newList = list.filter((task) => task.id.includes(searchWord.category));
    return newList;
  }
  if (searchWord.searchText === "progression") {
    const newList = list.filter((task) => task.progress==searchWord.category);
    return newList;
  }
/*   if (searchWord.searchText === "machine") {
    const newList = list.filter((task) => task.machine.includes(searchWord.category));
    return newList;
  } */
};
