"use strict";

var _discord = _interopRequireDefault(require("discord.js"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var _parse = _interopRequireDefault(require("./bot/parse"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

dotenv.config();
var client = new _discord["default"].Client();
var BOT_USER_TOKEN = process.env.BOT_USER_TOKEN; //authenticate bot with discord

client.login(BOT_USER_TOKEN).then(console.log('Login Successfull.'))["catch"](console.err); //on successfull login, bot ready.

client.on('ready', function (err) {
  client.user.setActivity("with The Cloud People");

  if (!err) {
    console.log("Hello, ".concat(client.user.tag));
    return;
  }

  return console.log(err);
}); // message handler

client.on('message', function (message) {
  var prefix = 'salvio';
  var commandArr = message.content.split(" "); // Prevent The Amazing Salvio from recieving his own blessings

  if (message.author == client.user) {
    return;
  } //if Salvio isnt called, or if another bot is attempting to contact The Amazing Salvio


  if (commandArr[0].toLowerCase() !== prefix || message.author.bot) return;
  (0, _parse["default"])(commandArr, message); // Bot.respond(command[0], message, options);
});