require("./bot.js");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // এটি অবশ্যই থাকতে হবে
        GatewayIntentBits.GuildMembers
    ]
});
