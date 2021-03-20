const mysql = require('mysql');
const util = require('util');
const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

let pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    connectionLimit: 10
});

pool.query = util.promisify(pool.query);

module.exports = pool;