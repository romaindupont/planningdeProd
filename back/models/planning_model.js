const pool = require('../data/database');

class Planning {

  id;

  name;

  start;

  _end;

  progress;

  dependencies;

  created_at;

  updated_at;

  lancement;

  quantity;

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.start = obj.start;
    this._end = obj._end;
    this.progress = obj.progress;
    this.dependencies = obj.dependencies;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
    this.lancement = obj.lancement;
    this.quantity = obj.quantity;
  }
}
const dataPlanning = {
  addPlanning: async (body) => {
    const sql = 'INSERT INTO planning(name, start, _end, progress, dependencies, created_at, lancement, quantity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const aujourdhui = 'now()';
    const { name, start, _end, progress, dependencies, lancement, quantity } = body;
    const result = await pool.pool.query(sql, [ name, start, _end, progress, dependencies, aujourdhui, lancement, quantity ]);
    const planningAdd = new Planning(result.rows[0]);
    return planningAdd;
  },
  updateEndDate: async (body, id) => {
    const sql = "UPDATE planning SET _end=$1, progress=$2, updated_at=$3 WHERE id=$4";
    const aujourdhui = 'now()';
    const { _end, progress } = body;
    const result = await pool.pool.query(sql, [ _end, progress, aujourdhui, id ]);
    return result.rows;
  },
  updateStartDate: async (body, id) => {
    const sql = "UPDATE planning SET start=$1, _end=$2, progress=$3, updated_at=$4 WHERE id=$5";
    const aujourdhui = 'now()';
    const { start, _end, progress } = body;
    const result = await pool.pool.query(sql, [ start, _end, progress, aujourdhui, id ]);
    return result.rows;
  },
  updateQuantity: async (body, id) => {
    const sql = "UPDATE planning SET quantity=$1, updated_at=$2 WHERE id=$3";
    const aujourdhui = 'now()';
    const { quantity } = body;
    const result = await pool.pool.query(sql, [ quantity, aujourdhui, id ]);
    return result.rows;
  },
  getPlanning: async (body) => {
    const sql ='SELECT * FROM planning WHERE id=$1';
    const { id } = body;
    const result = await pool.pool.query(sql, [ id ]);
    return result.rows[0];
  },
  planningList: async () => {
    const sql = 'SELECT *, planning.id as planning_id FROM planning ORDER BY lancement, name;';
    const result = await pool.pool.query(sql);
    const ListOfPlanning = result.rows;
    return ListOfPlanning;
  },
  deletePlanning: async (id) => {
    const sql = 'DELETE FROM planning WHERE id=$1';
    const result = await pool.pool.query(sql, [ id ]);
    return result.rows[0];
  },
  updatePlanning: async (body, id) => {
    const sql = 'UPDATE planning SET name=$1, start=$2, _end=$3, progress=$4, dependencies=$5, updated_at=$6, lancement=$7, quantity=$8 WHERE id=$9';
    const aujourdhui = 'now()';
    const { name, start, _end, progress, dependencies, lancement, quantity } = body;
    const result = await pool.pool.query(sql, [ name, start, _end, progress, dependencies, aujourdhui, lancement, quantity, id ]);
    return result.rows;
  },
  planningSpecialMachine: async () => {
    const sql = 'SELECT *, planning.id as planning_id, machine.id as id_machine, machine.name as machineName FROM planning INNER JOIN articles ON planning.name = articles.reference LEFT JOIN machine ON articles.machine_id = machine.id WHERE articles.machine_id IS NOT NULL AND planning.progress < 100 ORDER BY lancement, planning.name;';
    const result = await pool.pool.query(sql);
    const PlanningMachine = result.rows;
    return PlanningMachine;
  }
};

module.exports = {
  dataPlanning,
  }
