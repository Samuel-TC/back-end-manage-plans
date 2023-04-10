import mysql from "promise-mysql";
import config from "./../config";

// Assign database settings
const configuratin = {
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
}

let connection;

async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection(configuratin);
  }
  return connection;
}

module.exports = { getConnection};