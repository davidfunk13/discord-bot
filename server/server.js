import Discord from 'discord.js';

import * as dotenv from 'dotenv';

import * as Cheerio from 'cheerio';

import { axios } from 'axios';
import parseArgs from 'minimist';

dotenv.config()

const client = new Discord.Client();

const { BOT_USER_TOKEN } = process.env;

const searchLiveleak = (terms) => {
    console.log(terms)
}

client.on('ready', (err) => {
    if (!err) {
        console.log(`Hello, ${client.user.tag}`);
        return;
    }
    return console.log(err)
});

client.on('message', message => {
    const messageArr = message.content.split(" ")
    const command = parseArgs(messageArr)._;
    const options = parseArgs(messageArr);
    console.log(options)
    switch (command[0]) {
        case 'salvio':
            return message.reply('WHAT!!?!');
        default:
            return message.reply("The Amazing Salvio didnt understand you! Blessings!");
    }
});

client.login(BOT_USER_TOKEN)
    .then(console.log('Login Successfull.'))
    .catch(console.err);