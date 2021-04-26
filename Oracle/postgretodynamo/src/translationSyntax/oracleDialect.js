"use strict";
exports.__esModule = true;
var OracleDialect = /** @class */ (function () {
    function OracleDialect() {
        this.actor = "CREATE TABLE actor (\n" +
            "    actor_id number(10) NOT NULL,\n" +
            "    first_name varchar2(45) NOT NULL,\n" +
            "    last_name varchar2(45) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.address = "CREATE TABLE address (\n" +
            "    address_id number(10) NOT NULL,\n" +
            "    address varchar2(50) NOT NULL,\n" +
            "    address2 varchar2(50),\n" +
            "    district varchar2(20) NOT NULL,\n" +
            "    city_id number(5) NOT NULL,\n" +
            "    postal_code varchar2(10),\n" +
            "    phone varchar2(20) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.category = "CREATE TABLE category (\n" +
            "    category_id number(10) NOT NULL,\n" +
            "    name varchar2(25) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.city = "CREATE TABLE city (\n" +
            "    city_id number(10) NOT NULL,\n" +
            "    city varchar2(50) NOT NULL,\n" +
            "    country_id number(5) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.country = "CREATE TABLE country (\n" +
            "    country_id number(10) NOT NULL,\n" +
            "    country varchar2(50) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.customer = "CREATE TABLE customer (\n" +
            "    customer_id number(10) NOT NULL,\n" +
            "    store_id number(5) NOT NULL,\n" +
            "    first_name varchar2(45) NOT NULL,\n" +
            "    last_name varchar2(45) NOT NULL,\n" +
            "    email varchar2(50),\n" +
            "    address_id number(5) NOT NULL,\n" +
            "    activebool char(1) NOT NULL,\n" +
            "    create_date date  NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp,\n" +
            "    active number(10)\n" +
            ")";
        this.film = "CREATE TABLE film (\n" +
            "    film_id number(10) NOT NULL,\n" +
            "    title varchar2(255) NOT NULL,\n" +
            "    description clob,\n" +
            "    release_year public.year,\n" +
            "    language_id number(5) NOT NULL,\n" +
            "    rental_duration number(5) DEFAULT 3 NOT NULL,\n" +
            "    rental_rate number(4,2) DEFAULT 4.99 NOT NULL,\n" +
            "    length number(5),\n" +
            "    replacement_cost number(5,2) DEFAULT 19.99 NOT NULL,\n" +
            "    rating public.mpaa_rating DEFAULT cast('G' as public.mpaa_rating),\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL,\n" +
            "    special_features clob[],\n" +
            "    fulltext tsvector NOT NULL\n" +
            ")";
        this.film_actor = "CREATE TABLE film_actor (\n" +
            "    actor_id number(5) NOT NULL,\n" +
            "    film_id number(5) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.film_category = "CREATE TABLE film_category (\n" +
            "    film_id number(5) NOT NULL,\n" +
            "    category_id number(5) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.inventory = "CREATE TABLE inventory (\n" +
            "    inventory_id number(10) NOT NULL,\n" +
            "    film_id number(5) NOT NULL,\n" +
            "    store_id number(5) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.language = "CREATE TABLE language (\n" +
            "    language_id number(10) NOT NULL,\n" +
            "    name character(20) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.payment = "CREATE TABLE payment (\n" +
            "    payment_id number(10) NOT NULL,\n" +
            "    customer_id number(5) NOT NULL,\n" +
            "    staff_id number(5) NOT NULL,\n" +
            "    rental_id number(10) NOT NULL,\n" +
            "    amount number(5,2) NOT NULL,\n" +
            "    payment_date timestamp NOT NULL\n" +
            ")";
        this.rental = "CREATE TABLE rental (\n" +
            "    rental_id number(10) NOT NULL,\n" +
            "    rental_date timestamp NOT NULL,\n" +
            "    inventory_id number(10) NOT NULL,\n" +
            "    customer_id number(5) NOT NULL,\n" +
            "    return_date timestamp,\n" +
            "    staff_id number(5) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
        this.staff = "CREATE TABLE staff (\n" +
            "    staff_id number(10) NOT NULL,\n" +
            "    first_name varchar2(45) NOT NULL,\n" +
            "    last_name varchar2(45) NOT NULL,\n" +
            "    address_id number(5) NOT NULL,\n" +
            "    email varchar2(50),\n" +
            "    store_id number(5) NOT NULL,\n" +
            "    active char(1)  NOT NULL,\n" +
            "    username varchar2(16) NOT NULL,\n" +
            "    password varchar2(40),\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL,\n" +
            "    picture blob\n" +
            ")";
        this.store = "CREATE TABLE store (\n" +
            "    store_id number(10) NOT NULL,\n" +
            "    manager_staff_id number(5) NOT NULL,\n" +
            "    address_id number(5) NOT NULL,\n" +
            "    last_update timestamp DEFAULT systimestamp NOT NULL\n" +
            ")";
    }
    return OracleDialect;
}());
exports["default"] = OracleDialect;
