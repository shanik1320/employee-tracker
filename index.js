const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    // username
    user: "root",
  
    // password
    password: "root17",
    database: "employee_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
//     start();
   });

//   function start () {
//       inquirer
//       .prompt({

//       })