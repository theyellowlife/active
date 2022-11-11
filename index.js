const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel]
});

client.on('ready', () => {
    require("./utils/register_commands")
    console.log(`[CLIENT] ${client.user.username} logged and ready`)
});

client.login(token)
