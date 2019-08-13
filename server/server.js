import Discord from 'discord.js';

import * as dotenv from 'dotenv';

dotenv.config()

const client = new Discord.Client();

const { BOT_USER_TOKEN } = process.env;

client.on('ready', (err) => {
    if (!err) {
        console.log(`Hello, ${client.user.tag}`);
        return;
    }
    return console.log(err)
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong.');
    }
});

client.login(BOT_USER_TOKEN)
    .then(console.log('Login Successfull.'))
    .catch(console.err);