const mysql = require("mysql2")
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:"3306",
    database:"HMS",
    connectionLimit:10,
  });
  
  db.connect((err) => {
    if (err) {
      console.error('MySQL connection error:', err);
      return;
    }
    console.log('MySQL connected');
  });