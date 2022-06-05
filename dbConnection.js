const mysql = require("mysql2");
  
const db_connection = async config => {   // [START cloud_sql_mysql_mysql_create_socket]
  const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

  // Establish a connection to the database
  return mysql.createPool({
    user: process.env.root, // e.g. 'my-db-user'
    password: process.env.12345*, // e.g. 'my-db-password'
    database: process.env.banksampah, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    socketPath: `${dbSocketPath}/${process.env.test_net}`,
    // Specify additional properties here.
    ...config,
  });
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
};
// [END cloud_sql_mysql_mysql_create_socket]


module.exports = db_connection;
