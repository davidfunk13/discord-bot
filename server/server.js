import Discord from 'discord.js';
import * as dotenv from 'dotenv';
import parseInput from './bot/parse';

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

    //if Salvio isnt called, or if another bot is attempting to contact The Amazing Salvio
    if (commandArr[0].toLowerCase() !== prefix || message.author.bot) return
    
    parseInput(commandArr, message);

    // Bot.respond(command[0], message, options);
});
