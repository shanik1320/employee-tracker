DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
    PRIMARY KEY (id)
    );

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT primary key,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
    );

INSERT INTO department (name)
VALUES ("finance"), ("sales"), ("marketing"), ("human resources"), ("legal");

INSERT INTO roles(title, salary, department_id)
VALUES ("sales associate", 2000, 2),
("marketing lead", 6000, 3),
("bookkeeper", 10000, 1),
("HR assistant", 5500, 4),
("accountant", 6000, 1),
("lawyer", 12500, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "James", 1),
("Caroline", "Lewis", 2),
("Eduardo", "Fernandez", 3),
("Daniel", "Hernandez", 4)



