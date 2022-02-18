import { IEvent, ICommand } from "../Interfaces";
import { CommandInteraction } from "discord.js";
import { ExtentsClient } from "../Client";

const event: IEvent = {
    name: "interactionCreate",
    once: false,
    execute: async (client: ExtentsClient, interaction: CommandInteraction) => {
        if (!interaction.isCommand()) return;

        const command : ICommand | undefined = client.commands.get(interaction.commandName);

        if (!command) return;
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '명령어 실패', ephemeral: true });
        }
    }
}

module.exports = event;