"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = exports.init = void 0;
const plugin_1 = require("./plugin");
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return plugin_1.init; } });
Object.defineProperty(exports, "send", { enumerable: true, get: function () { return plugin_1.send; } });
module.exports.init = plugin_1.init;
module.exports.send = plugin_1.send;
