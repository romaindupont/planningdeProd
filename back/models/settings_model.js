const pool = require('../data/database');

class Settings {

  id;

  choraire;

  constructor(obj) {
    this.id = obj.id;
    this.choraire = obj.choraire;
  }
}
const dataSettings = {
  listSetting: async () => {
    const sql = 'SELECT * FROM settings;';
    const result = await pool.pool.query(sql);
    return result.rows;
  },
  updateSettings: async(body, id) => {
    const sql = 'UPDATE settings SET choraire=$1 WHERE id=$2 RETURNING *;';
    const { choraire } = body;
    const result = await pool.pool.query(sql, [ choraire, id ]);
    return result.rows;
  },
  lastId: async () => {
    const sql ='SELECT MAX(id) FROM settings';
    const result = await pool.pool.query(sql);
    const id = result.rows[0];
    return id;
  }

};

module.exports = {
  dataSettings,
  }
