"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var winston_1 = require("../utils/winston");
function postgresStarter() {
    try {
        child_process_1.execSync('pg_ctl -D /usr/local/var/postgres start', { encoding: 'utf-8' });
    }
    catch (e) {
        try {
            child_process_1.execSync('sudo kill 67', { encoding: 'utf-8' });
            child_process_1.execSync('1cherepaxa', { encoding: 'utf-8' });
            child_process_1.execSync('pg_ctl -D /usr/local/var/postgres start', { encoding: 'utf-8' });
        }
        catch (e) {
            winston_1["default"].error(e);
        }
        winston_1["default"].error(e);
    }
}
exports["default"] = postgresStarter;
