"use strict";

var _discord = _interopRequireDefault(require("discord.js"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var Cheerio = _interopRequireWildcard(require("cheerio"));

var _axios = require("axios");

var _minimist = _interopRequireDefault(require("minimist"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

dotenv.config();
var client = new _discord["default"].Client();
var BOT_USER_TOKEN = process.env.BOT_USER_TOKEN;

var searchLiveleak = function searchLiveleak(terms) {
  console.log(terms);
};

client.on('ready', function (err) {
  if (!err) {
    console.log("Hello, ".concat(client.user.tag));
    return;
  }

  return console.log(err);
});
client.on('message', function (message) {
  var messageArr = message.content.split(" ");

  var command = (0, _minimist["default"])(messageArr)._;

  var options = (0, _minimist["default"])(messageArr);
  console.log(command, options);

  switch (command[0]) {
    case 'salvio':
      return message.reply('WHAT!!?!');

    default:
      return message.reply("The Amazing Salvio didnt understand you! Blessings!");
  }
});
client.login(BOT_USER_TOKEN).then(console.log('Login Successfull.'))["catch"](console.err);