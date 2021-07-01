const pool = require('../data/database');

class Valorisation {

  id;

  id_piece;

  cout;

  montant;

  constructor(obj) {
    this.id = obj.id;
    this.id_piece = obj.id_piece;
    this.cout = obj.cout;
    this.montant = obj.montant;
  }
}
const dataValorisation = {
  listValorisation: async () => {
    const sql = 'SELECT *, planning.id as planId FROM valorisation INNER JOIN planning ON valorisation.id_piece = planning.id ORDER BY valorisation.id;';
    const result = await pool.pool.query(sql);
    return result.rows;
  },
  updateValorisation: async(id, body) => {
    const sql = 'UPDATE valorisation set cout=$1, montant=$2 WHERE id=$3 RETURNING *;';
    const { cout, montant } = body;
    const result = await pool.pool.query(sql, [ cout, montant, id ]);
    return result.rows;
  },
  addValorisation: async(body, id) => {
    const sql = 'INSERT INTO valorisation (id, id_piece, cout, montant) VALUES ($1, $2, $3, $4) RETURNING *;';
    const { id_piece, cout, montant } = body;
    const result = await pool.pool.query(sql, [ id, id_piece, cout, montant ]);
    return result.rows[0];
  },
  deleteValorisation: async(id) => {
    const sql = 'DELETE FROM valorisation WHERE id=$1;';
    const result = await pool.pool.query(sql, [ id ]);
    return result.rows[0];
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM valorisation';
    const result = await pool.pool.query(sql);
    const id = result.rows[0];
    return id;
  }

};

module.exports = {
  dataValorisation,
  }
