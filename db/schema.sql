CREATE DATABASE hunker_db;
USE hunker_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	street_name varchar(255) NOT NULL,
	flooded BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);