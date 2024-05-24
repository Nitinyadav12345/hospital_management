const mysql = require("mysql2")

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Nitin@2001",
    port:"3306",
    database:"HMS",
    connectionLimit:10,
})

module.exports = {
    pool,
}
