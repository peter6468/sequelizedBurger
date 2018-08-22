###Schema
-- Drops the animals_db if it exists currently -- 
DROP DATABASE IF EXISTS sequelizedBurgers_db;
-- Creates the "animals_db" database --
CREATE DATABASE sequelizedBurgers_db;

use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(50) not null,
    burger_price decimal(10,4) not null,
    devoured bool default false,
	primary key (id)
);
