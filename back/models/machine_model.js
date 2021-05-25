const pool = require('../data/database');

class Machine {

  id;

  name;

  yield_time;

  created_at;

  updated_at;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.yield_time = obj.yield_time;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;

  }
}
const dataMachine = {
  MachineList: async () => {
    const sql ='SELECT * FROM machine;';
    const result = await pool.pool.query(sql);
    const ListOfMachine = result.rows;
    return ListOfMachine;
  },
  /* updateWorkingDay: async (body) => {
    const sql = 'UPDATE workingDay SET open_close=$1, hour1=$2, hour2=$3, hour3=$4, hour4=$5 WHERE numerojour=$6';
    const { open_close, hour1, hour2, hour3, hour4, numerojour } = body;
    const result = await pool.pool.query(sql, [ open_close, hour1, hour2, hour3, hour4, numerojour ]);
    return result.rows;
  }, */

};

module.exports = {
  dataMachine,
  }
