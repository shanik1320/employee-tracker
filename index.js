const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    // username
    user: "root",
  
    // password
    password: "root17",
    database: "top_songsDB"
  });