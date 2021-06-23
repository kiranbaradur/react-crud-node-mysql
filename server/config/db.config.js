const mysql = require("mysql");
// create here mysql connection
// const dbConn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "test",
// });
const dbConn = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6420044",
    password: "7qhmZtN8hI",
    database: "sql6420044",
});
dbConn.connect(function (error) {
    if (error) throw error;
    console.log("Database Connected Successfully!!!");
});
module.exports = dbConn;
