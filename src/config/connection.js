// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB_URI: "mysql://root:k3iZdljKcsmLp2Pfuh1H@containers-us-west-50.railway.app:5506/railway",
//   PORT: 3000,
//   DB: "db_ourfamy",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

const {
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_URI
} = process.env;

//connect to remote db
const db = new Sequelize(config.DB_URI, {
  define : {
    timestamps: false
  }
});

module.exports = db;