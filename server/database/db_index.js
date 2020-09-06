const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "database-1.czv5exb8fyhf.us-east-1.rds.amazonaws.com",
  database: "Proyecto21",
  password: "pita0868",
  user: "admin",
  port: "3306",
  insecureAuth: true,
});

let michdb = {};

michdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM Municipios ORDER BY RANGO", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = michdb;
