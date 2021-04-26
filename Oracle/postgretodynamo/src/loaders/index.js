"use strict";
exports.__esModule = true;
var winston_1 = require("../utils/winston");
var postgresLoader_1 = require("./postgresLoader");
function runLoaders() {
    //postgresStarter();
    //log.info("Database started");
    postgresLoader_1["default"]();
    winston_1["default"].info("Sequelize authentication loaded");
}
exports["default"] = runLoaders;
