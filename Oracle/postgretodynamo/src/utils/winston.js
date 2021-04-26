"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
var combine = format.combine;
exports["default"] = createLogger({
    format: combine(format.colorize(), format.timestamp(), format.align(), format.printf(function (info) {
        var timestamp = info.timestamp, level = info.level, message = info.message, args = __rest(info, ["timestamp", "level", "message"]);
        var ts = timestamp.slice(0, 19).replace('T', ' ');
        return ts + " [" + level + "]: " + message + " " + (Object.keys(args).length ? JSON.stringify(args, null, 2) : '');
    })),
    transports: [new transports.Console()]
});
