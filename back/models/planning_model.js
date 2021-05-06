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
  }
}
const dataPlanning = {
/*   addPlanning: async (body) => {
    const sql = 'INSERT INTO planning(id,name, start, _end,progress,dependencies,created_at) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *';
    const aujourdhui = 'now()';
    const {id, name, start, _end, progress, dependencies } = body;
    const result = await pool.pool.query(sql,[id,name, start, _end,progress,dependencies, aujourdhui]);
    const planningAdd = new Planning(result.rows[0]);
    return planningAdd;
  }, */
  addPlanning: async (body) => {
    const sql = 'INSERT INTO planning(name, start, _end, progress, dependencies, created_at, lancement) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const aujourdhui = 'now()';
    const { name, start, _end, progress, dependencies, lancement } = body;
    const result = await pool.pool.query(sql,[ name, start, _end, progress, dependencies, aujourdhui, lancement ]);
    const planningAdd = new Planning(result.rows[0]);
    return planningAdd;
  },
  lastId: async () => {
    /* const sql ='SELECT MAX(id) FROM articles';
    const result = await pool.pool.query(sql);
    const id = result.rows[0];
    return id; */
  },
  updateEndDate: async (body, id) => {
    const sql = "UPDATE planning SET _end=$1, progress=$2, updated_at=$3 WHERE id=$4";
    const aujourdhui = 'now()';
    const { _end, progress } = body;
    const result = await pool.pool.query(sql,[ _end, progress, aujourdhui, id ]);
    return result.rows;
  },
  updateStartDate: async (body, id) => {
    const sql = "UPDATE planning SET start=$1, _end=$2, progress=$3, updated_at=$4 WHERE id=$5";
    const aujourdhui = 'now()';
    const { start, _end, progress } = body;
    const result = await pool.pool.query(sql,[ start, _end, progress, aujourdhui, id ]);
    return result.rows;
  },
  getPlanning: async (body) => {
    const sql ='SELECT * FROM planning WHERE id=$1';
    const { id } = body;
    const result = await pool.pool.query(sql,[ id ]);
    return result.rows[0];
  },
  planningList: async () => {
    const sql = 'SELECT * FROM planning ORDER BY lancement, name;';
    /* select planning.name,planning.start, planning._end,planning.progress,planning.dependencies,planning.lancement,articles.order_n from planning inner join articles on planning.name=articles.reference order by order_n,lancement,name; */
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
    const sql = 'UPDATE planning SET name=$1, start=$2, _end=$3, progress=$4, dependencies=$5, updated_at=$6, lancement=$7 WHERE id=$8';
    const aujourdhui = 'now()';
    const { name, start, _end, progress, dependencies, lancement } = body;
    const result = await pool.pool.query(sql, [ name, start, _end, progress, dependencies, aujourdhui, lancement, id ]);
    return result.rows;
  },
};

module.exports = {
  dataPlanning,
  }
