// packages
const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require('asciiart-logo');

// making the logo
// const config = require('./package.json');
// console.log(logo(config).render());

// console.log(
//     logo({
//         name: 'EMPLOYEE TRACKER',
//         font: 'Speed',
//         lineChars: 10,
//         padding: 2,
//         margin: 3,

//     })
//     .emptyLine()
//     .right('version 3.7.123')
//     .emptyLine()
//     .center()
//     .render()
// );

//setting up the connection
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
          name: "options",
          message: "What would you like to do?",
          type: "list",
          choices: ["View All Employees", "View all Employees by Department", "View all Employees by Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
        })

    },
    function addEmployee () {
        inquirer
        .prompt([
        {
            name: "first-name",
            message: "What is the employee's first name?",
            type: "input"
        },
        {
             name:"last-name",
             message: "What is the employee's last name?",
             type: "input"
        },
        {

        }
    ])
})
        })
    }