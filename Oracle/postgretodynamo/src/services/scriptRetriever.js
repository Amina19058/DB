"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var winston_1 = require("../utils/winston");
var scriptConverter_1 = require("./scriptConverter");
var oracleLoader_1 = require("../loaders/oracleLoader");
//import oracleasd from "../loaders/oracleLoaderClass";
function scriptSeparator(param) {
    var buf;
    for (var _i = 0, _a = param.split('\n'); _i < _a.length; _i++) {
        var line = _a[_i];
        if (line.trim().startsWith('CREATE TABLE'))
            buf = [line];
        else if (buf) {
            buf.push(line);
            if (line.startsWith(');')) {
                return buf.join('\n');
            }
        }
    }
}
function scriptRetriever() {
    var script;
    var newScript;
    var separatedScript;
    var tableNames = ["actor", "address", "category",
        "city", "country", "customer",
        "film", "film_actor", "film_category",
        "inventory", "language", "payment",
        "rental", "staff", "store"];
    for (var _i = 0, tableNames_1 = tableNames; _i < tableNames_1.length; _i++) {
        var entity = tableNames_1[_i];
        script = child_process_1.execSync("pg_dump -t " + entity + " --schema-only dvdrental", { encoding: 'utf-8' }).toString();
        separatedScript = scriptSeparator(script);
        winston_1["default"].info(separatedScript);
        newScript = scriptConverter_1["default"](separatedScript).slice(0);
        oracleLoader_1["default"](newScript);
    }
}
exports["default"] = scriptRetriever;
