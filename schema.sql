DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE employee (
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);

CREATE TABLE role (
    title VARCHAR(30) NOT NULL,
    salary VARCHAR (20) NOT NULL,
    department_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);

CREATE TABLE department(
    name VARCHAR(50) NOT NULL);
