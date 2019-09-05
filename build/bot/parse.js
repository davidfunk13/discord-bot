"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _minimist = _interopRequireDefault(require("minimist"));

var _Liveleak = _interopRequireDefault(require("../commands/Liveleak/Liveleak"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parseInput = function parseInput(arr, message) {
  //parsing and dissasembling query string, reassigning commands var to new object with args and flags kets. 
  arr.shift();

  var commands = (0, _minimist["default"])(arr, {
    "boolean": true
  })._;

  var flags = Object.assign({}, (0, _minimist["default"])(arr, {
    "boolean": true
  }));
  delete flags._;

  switch (commands[0].toLowerCase()) {
    case 'liveleak':
      var params = commands.splice(1);
      (0, _Liveleak["default"])(params, message);
      break;

    default:
      break;
  }
};

var _default = parseInput;
exports["default"] = _default;