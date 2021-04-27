const pool = require('../data/database');
class Articles {
  id;
  reference;
  machine_id;
  tempsop;
  liaison;
  niveau;
  created_at;
  updated_at;
  order_n;

  constructor(obj) {
    this.id=obj.id;
    this.reference=obj.reference;
    this.machine_id=obj.machine_id;
    this.tempsop=obj.tempsop;
    this.liaison=obj.liaison;
    this.niveau=obj.niveau;
    this.created_at=obj.created_at;
    this.updated_at=obj.updated_at;
    this.order_n=obj.order_n;

  }
}
const dataArticles = {
  addArticles: async (id,body) => {
    const sql = 'INSERT INTO articles(id,reference, machine_id, tempsop,liaison,niveau,created_at,order_n) VALUES ($1, $2, $3, $4, $5, $6,$7,$8) RETURNING *';
    const aujourdhui = 'now()';
    const {reference, machine_id, tempsop,liaison,niveau,order_n } = body;
    const result = await pool.pool.query(sql,[id,reference, machine_id, tempsop,liaison,niveau, aujourdhui,order_n]);
    const articlesAdd = new Articles(result.rows[0]);
    return articlesAdd;
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM articles';
    const result = await pool.pool.query(sql);
    const id = result.rows[0];
    return id;
  },
  /* getSpecificArticles: async (params) => {
    const sql ="SELECT row_to_json(quest) as questions FROM (SELECT * ,(SELECT json_agg(alb) FROM ( SELECT * from answers WHERE id_question= a.id) alb)AS answers FROM questions as a WHERE id_category=$1 LIMIT 10 ) quest ORDER BY random();";
    const result = await pool.pool.query(sql,[params]);
    return result.rows;
  }, */
  getArticles: async (body) => {
    const sql ='SELECT * FROM articles WHERE id=$1';
    const { id } = body;
    const result = await pool.pool.query(sql,[id]);
    return result.rows[0];
  },
  articlesList: async () => {
    const sql ='SELECT * FROM articles ORDER BY id;';
    const result = await pool.pool.query(sql);
    const ListOfArticles = result.rows;
    return ListOfArticles;
  },
  deleteArticles: async (id) => {
    const sql = 'DELETE FROM articles WHERE id=$1';
    const result = await pool.pool.query(sql, [id]);
    return result.rows[0];
  },
  updateArticles: async (body, id) => {
    const sql = 'UPDATE articles SET reference=$1, machine_id=$2, tempsop=$3, liaison=$4,niveau=$5, updated_at=$6, order_n=$7 WHERE id=$8';
    const aujourdhui = 'now()';
    const { reference, machine_id, tempsop,liaison,niveau,order_n } = body;
    const result = await pool.pool.query(sql, [reference, machine_id, tempsop,liaison,niveau, aujourdhui,order_n,id]);
    return result.rows;
  },

};

module.exports = {
  dataArticles,
  }
