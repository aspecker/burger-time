-- schema for burger DB
create database burger_db;
use burger_db;

create table burgers 
(
    id int not null auto_increment,
    name varchar(45) not null,
    eaten boolean default false,
    primary key(id)
);

