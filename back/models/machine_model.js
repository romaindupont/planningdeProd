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
  updateMachine: async (body, id) => {
    const sql = 'UPDATE machine SET name=$1, yield_time=$2, updated_at=$3 WHERE id=$4';
    const aujourdhui = 'now()';
    const { name, yield_time } = body;
    const result = await pool.pool.query(sql, [ name, yield_time, aujourdhui, id ]);
    return result.rows;
  },
  deleteMachine: async (id) => {
    const sql = 'DELETE FROM machine WHERE id=$1';
    const result = await pool.pool.query(sql, [ id ]);
    return result.rows[0];
  },
  addMachine: async (body, newId) => {
    const sql = 'INSERT INTO machine(id, name, yield_time, created_at ) VALUES ($1, $2, $3, $4) RETURNING *';
    const aujourdhui = 'now()';
    const { name, yield_time } = body;
    const result = await pool.pool.query(sql, [ newId, name, yield_time, aujourdhui ]);
    const machineAdd = new Machine(result.rows[0]);
    return machineAdd;
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM machine';
    const result = await pool.pool.query(sql);
    const id = result.rows[0];
    return id;
  }
};

module.exports = {
  dataMachine,
  }
