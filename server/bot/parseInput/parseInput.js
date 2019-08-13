const parseInput = (terms, message, options) => {
    switch (terms) {
        case "hello":
            const greet = () => {
                message.reply('Hello from the Amazing Salvio! Blessings!')
            }
            if (!"delay" in options) {
                return greet();
            }
            console.log(terms, options)
            return setTimeout(greet, options.delay)
        //We do not return any strings or any functions (ie. use message.reply()) in the default case, as this will cause the bot to spam replies.;
        default: break;
    }
};

export default parseInput;