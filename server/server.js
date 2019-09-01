import { axios } from 'axios';
import Bot from './bot/bot';
import * as Cheerio from 'cheerio';
import Discord from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config()

const client = new Discord.Client();
const { BOT_USER_TOKEN } = process.env;

//authenticate bot with discord
client.login(BOT_USER_TOKEN)
    .then(console.log('Login Successfull.'))
    .catch(console.err);

//on successfull login, bot ready.
client.on('ready', (err) => {
    client.user.setActivity("with The Cloud People");

    if (!err) {
        console.log(`Hello, ${client.user.tag}`);
        return;
    }
    return console.log(err)
});

// message handler
client.on('message', message => {
    const prefix = 'salvio';
    const commandArr = message.content.split(" ");

    // Prevent The Amazing Salvio from recieving his own blessings
    if (message.author == client.user) {
        return
    }

    console.log(commandArr[0])
    if (commandArr[0].toLowerCase() !== prefix || message.author.bot) return

    message.reply(message.author.id);

    // Bot.respond(command[0], message, options);
});
