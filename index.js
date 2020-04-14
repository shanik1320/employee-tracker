// packages
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
//const logo = require("asciiart-logo");

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
    database: "employee_db",
  });

  connection.connect(function(err) {
    if (err) throw err;
    //console.log("connection successfull");
    start();
   });

  function start () {
      inquirer
      .prompt({
          name: "options",
          message: "What would you like to do?",
          type: "list",
          choices: [
            "Add Employee", 
            "View All Employees",
            "Add Role",
            "View All Roles",
            "Update Role",
            "Add Department",
            "View Departments",
            "View Employees by Department", 
           "Exit"
        ]
        })
        switch (answers) {
            case "Add employee":
                addEmployee();
                break;
            case "View All employees":
                viewAll();
                break;
            case "view all employees by department":
                empByDepartment();
                break;
            case "view all employees by manager":
                empByManager();
                break;
            case "remove employee":
                removeEmp();
                break;
            case "update employee role":
                updateRole();
                break;
            case "update employee manager":
                updateManager();



        }

    }
    function addEmployee () {

        connection.query("SELECT * FROM roles", function (err, results) {
            if (err) throw err;
        },
    
       
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
            name: "role",
            message: "What is the employee's role?",
            type: "input"
        },
        {
            name: "manager",
            message: "Who is the employee's manager?",
            type: "input"
        }
    ]))
}