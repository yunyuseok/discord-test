"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event = {
    name: "interactionCreate",
    once: false,
    execute: async (client, interaction) => {
        if (!interaction.isCommand())
            return;
        const command = client.commands.get(interaction.commandName);
        if (!command)
            return;
        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: '명령어 실패', ephemeral: true });
        }
    }
};
module.exports = event;
//# sourceMappingURL=interactionCreate.js.map