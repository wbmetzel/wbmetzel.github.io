/* Create a demo user

CREATE USER 'demo_user'@'localhost' IDENTIFIED BY 'demo';
GRANT ALL ON crm.* TO 'demo_user'@'localhost';
FLUSH PRIVILEGES;

*/

USE crm;

CREATE TABLE Employees
(
pid int(11) NOT NULL AUTO_INCREMENT,
lname varchar(100) NOT NULL,
fname varchar(100),
job varchar(255),
PRIMARY KEY (pid)
);

CREATE TABLE Emp_info
(
pid int NOT NULL,
lname varchar(100) NOT NULL,
fname varchar(100),
addr_1 varchar(255),
addr_2 varchar(255),
city varchar(100),
state varchar(100),
postal varchar(20),
email varchar(255),
gender enum("male","female") NOT NULL
);