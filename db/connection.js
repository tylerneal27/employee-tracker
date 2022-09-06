const mysql = require('mysql2/promise');

const dbUser = process.env.DB_USER;
const dbPW = process.env.DB_PASSWORD;

const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: dbUser,
    // MySQL password
    password: dbPW,
    database: 'staff_db'
  },
  console.log(`Connected to the staff_db database.`)
);

module.exports = connection