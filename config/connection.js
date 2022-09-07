import { createConnection } from 'mysql2/promise';

const dbUser = process.env.DB_USERNAME;
const dbPW = process.env.DB_PASSWORD;

const connection = await createConnection(
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

export default connection