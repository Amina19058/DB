"use strict";
exports.__esModule = true;
var winston_1 = require("../src/utils/winston");
var index_1 = require("../src/loaders/index");
//import scriptConverter from "./services/scriptConverter";
var perf_hooks_1 = require("perf_hooks");
var scriptRetriever_1 = require("./services/scriptRetriever");
function main() {
    winston_1["default"].info("Script started");
    var startTime = perf_hooks_1.performance.now();
    index_1["default"]();
    scriptRetriever_1["default"]();
    var finishTime = perf_hooks_1.performance.now();
    winston_1["default"].info((finishTime - startTime) / 1000 + " seconds");
}
main();
