"use strict";

var _discord = _interopRequireDefault(require("discord.js"));

var dotenv = _interopRequireWildcard(require("dotenv"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

dotenv.config();
var client = new _discord["default"].Client();
var CLIENT_ID = process.env.CLIENT_ID;
client.on('ready', function (err) {
  if (!err) {
    console.log("Logged in as ".concat(client.user.tag));
    return;
  }

  return console.log(err);
});
client.on('message', function (msg) {
  if (msg.content === 'ping') {
    msg.reply('pong.');
  }
});
client.login();