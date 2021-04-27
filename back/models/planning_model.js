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

  constructor(obj) {
    this.id=obj.id;
    this.name=obj.name;
    this.start=obj.start;
    this._end=obj._end;
    this.progress=obj.progress;
    this.dependencies=obj.dependencies;
    this.created_at=obj.created_at;
    this.updated_at=obj.updated_at;
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
    const sql = 'INSERT INTO planning(name, start, _end,progress,dependencies,created_at) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *';
    const aujourdhui = 'now()';
    const { name, start, _end, progress, dependencies } = body;
    const result = await pool.pool.query(sql,[name, start, _end,progress,dependencies, aujourdhui]);
    const planningAdd = new Planning(result.rows[0]);
    return planningAdd;
  },
  lastId: async () => {
    /* const sql ='SELECT MAX(id) FROM articles';
    const result = await pool.pool.query(sql);
    const id = result.rows[0];
    return id; */
  },
  /* getSpecificArticles: async (params) => {
    const sql ="SELECT row_to_json(quest) as questions FROM (SELECT * ,(SELECT json_agg(alb) FROM ( SELECT * from answers WHERE id_question= a.id) alb)AS answers FROM questions as a WHERE id_category=$1 LIMIT 10 ) quest ORDER BY random();";
    const result = await pool.pool.query(sql,[params]);
    return result.rows;
  }, */
  getPlanning: async (body) => {
    const sql ='SELECT * FROM planning WHERE id=$1';
    const { id } = body;
    const result = await pool.pool.query(sql,[id]);
    return result.rows[0];
  },
  planningList: async () => {
    const sql ='SELECT * FROM planning ORDER BY id,name;';
    const result = await pool.pool.query(sql);
    const ListOfPlanning = result.rows;
    return ListOfPlanning;
  },
  deletePlanning: async (id) => {
    const sql = 'DELETE FROM planning WHERE id=$1';
    const result = await pool.pool.query(sql, [id]);
    return result.rows[0];
  },
  updatePlanning: async (body, id) => {
    const sql = 'UPDATE planning SET name=$1, start=$2, _end=$3, progress=$4, dependencies=$5, updated_at=$6 WHERE id=$7';
    const aujourdhui = 'now()';
    const { name, start, _end,progress,dependencies } = body;
    const result = await pool.pool.query(sql, [name, start, _end, progress, dependencies, aujourdhui,id]);
    return result.rows;
  },

};

module.exports = {
  dataPlanning,
  }
