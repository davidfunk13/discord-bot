"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("./");

var Bot = {
  respond: function respond(terms, message, options) {
    return (0, _.parseInput)(terms, message, options);
  }
};
var _default = Bot;
exports["default"] = _default;