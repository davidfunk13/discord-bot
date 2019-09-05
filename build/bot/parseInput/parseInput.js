"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseInput = function parseInput(terms, message, options) {
  switch (terms) {
    case "hello":
      var greet = function greet() {
        message.reply('Hello from the Amazing Salvio! Blessings!');
      };

      if (!"delay" in options) {
        return greet();
      }

      return setTimeout(greet, options.delay);
    //We do not return any strings or any functions (ie. use message.reply()) in the default case, as this will cause the bot to spam replies.;

    default:
      break;
  }
};

var _default = parseInput;
exports["default"] = _default;