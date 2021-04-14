const dotenv = require('dotenv');
const Pool = require('pg').Pool
dotenv.config();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mecanique',
  password: 'Hydequip14',
  port: 5432,
  ssl: false
});

module.exports = {
  pool,
}
