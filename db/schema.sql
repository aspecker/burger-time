-- schema for burger DB

drop database if exists burger_db;
create database burger_db;

create table burgers (
    id int(10) auto_increment not null,
    name varhcar(45) not null,
    eaten boolean default false,
    primary key(id)
)