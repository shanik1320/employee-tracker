const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require('asciiart-logo');


const config = require('./package.json');
console.log(logo(config).render());

console.log(
    logo({
        name: 'EMPLOYEE TRACKER',
        font: 'Speed',
        lineChars: 10,
        padding: 2,
        margin: 3,

    })
    .emptyLine()
    .right('version 3.7.123')
    .emptyLine()
    .center()
    .render()
);

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
    start();
   });

  function start () {
      inquirer
      .prompt({

      })
    }