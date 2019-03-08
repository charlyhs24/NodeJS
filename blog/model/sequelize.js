const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('express_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
//   storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;