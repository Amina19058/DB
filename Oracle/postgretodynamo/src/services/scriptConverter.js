"use strict";
exports.__esModule = true;
var winston_1 = require("../utils/winston");
var oracleDialect_1 = require("../translationSyntax/oracleDialect");
var postgresDialect_1 = require("../translationSyntax/postgresDialect");
function scriptConverter(oldScript) {
    var oracleDialect = new oracleDialect_1["default"]();
    var postgresDialect = new postgresDialect_1["default"]();
    var newScript = "";
    if (oldScript == postgresDialect.actor) {
        newScript = oracleDialect.actor;
    }
    else if (oldScript == postgresDialect.address) {
        newScript = oracleDialect.address;
    }
    else if (oldScript == postgresDialect.category) {
        newScript = oracleDialect.category;
    }
    else if (oldScript == postgresDialect.city) {
        newScript = oracleDialect.city;
    }
    else if (oldScript == postgresDialect.country) {
        newScript = oracleDialect.country;
    }
    else if (oldScript == postgresDialect.customer) {
        newScript = oracleDialect.customer;
    }
    else if (oldScript == postgresDialect.film) {
        newScript = oracleDialect.film;
    }
    else if (oldScript == postgresDialect.film_actor) {
        newScript = oracleDialect.film_actor;
    }
    else if (oldScript == postgresDialect.film_category) {
        newScript = oracleDialect.film_category;
    }
    else if (oldScript == postgresDialect.inventory) {
        newScript = oracleDialect.inventory;
    }
    else if (oldScript == postgresDialect.language) {
        newScript = oracleDialect.language;
    }
    else if (oldScript == postgresDialect.payment) {
        newScript = oracleDialect.payment;
    }
    else if (oldScript == postgresDialect.rental) {
        newScript = oracleDialect.rental;
    }
    else if (oldScript == postgresDialect.staff) {
        newScript = oracleDialect.staff;
    }
    else if (oldScript == postgresDialect.store) {
        newScript = oracleDialect.store;
    }
    else {
        winston_1["default"].error("Table does not exist in the list of tables!");
    }
    return newScript;
}
exports["default"] = scriptConverter;
