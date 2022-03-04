import { IEvent, ICommand, } from "../Interfaces";
import { CommandInteraction } from "discord.js";
import { ExtentsClient } from "../Client";

type Itn = CommandInteraction;

const event: IEvent = {
    name: "interactionCreate",
    once: false,
    execute: async (client: ExtentsClient, itn: Itn) => {
        if (!itn.isCommand()) return;

        if(itn.isCommand()) {
            const command : ICommand | undefined = client.commands.get(itn.commandName);
            if (!command) return;
    
            try {
                await command.execute(itn);
            } catch (error) {
                console.error(error);
                await itn.reply({ content: '명령어 실패', ephemeral: true });
            }
        }
    } 
}

module.exports = event;