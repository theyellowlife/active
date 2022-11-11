const { REST, Routes } = require("discord.js");
const { token, clientId } = require("../config.json");

const commands = [{
    name: 'ping',
    description: 'Botun tepki süresini test eder.'
}]

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(Routes.applicationCommands(clientId), { body: commands });
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (e) {
        console.error(e)
    }Routes.ap
})();