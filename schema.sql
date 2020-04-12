DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL AUTO_INCREMENT 
    PRIMARY KEY (id)
    );

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary VARCHAR (20) NOT NULL,
    department_id INT UNSIGNED NOT NULL AUTO_INCREMENT 
    PRIMARY KEY (id)
    );

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT primary key,
    department_name VARCHAR(30) NOT NULL,
    department_id INT UNSIGNED NOT NULL)

SELECT * FROM employee_db
