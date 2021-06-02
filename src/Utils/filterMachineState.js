export function filterMachineState(list, id) {
  console.log(list, id)
  const newList = list.map(machine => {
    console.log(machine.id, id)
    if (machine.id == id) {
      return {
        id: machine.id,
        name: machine.name,
        yield_time: machine.yield_time
      }
    }
    console.log(newList)
  return newList;
  })
};
