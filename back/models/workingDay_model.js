const pool = require('../data/database');

class WorkingDay {

  id;

  numerojour;

  open_close;

  hour1;

  hour2;

  hour3;

  hour4;

  created_at;

  updated_at;



  constructor(obj) {
    this.id = obj.id;
    this.numerojour = obj.numerojour;
    this.open_close = obj.open_close;
    this.hour1 = obj.hour1;
    this.hour2 = obj.hour2;
    this.hour3 = obj.hour3;
    this.hour4 = obj.hour4;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;

  }
}
const dataWorkingDay = {
  workingDayList: async () => {
    const sql ='SELECT * FROM workingDay;';
    const result = await pool.pool.query(sql);
    const ListOfWorkingDay = result.rows;
    return ListOfWorkingDay;
  },
  updateWorkingDay: async (body) => {
    const sql = 'UPDATE workingDay SET open_close=$1, hour1=$2, hour2=$3, hour3=$4, hour4=$5, updated_at=$6 WHERE numerojour=$7';
    const aujourdhui = 'now()';
    const { open_close, h1, h2, h3, h4, numerojour } = body;
    const result = await pool.pool.query(sql, [ open_close, h1, h2, h3, h4, aujourdhui, numerojour ]);
    return result.rows;
  },

};

module.exports = {
  dataWorkingDay,
  }
