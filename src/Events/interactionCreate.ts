import { IEvent, ICommand, IButton } from "../Interfaces";
import { CommandInteraction, ButtonInteraction } from "discord.js";
import { ExtentsClient } from "../Client";

type Itn = CommandInteraction | ButtonInteraction;

const event: IEvent = {
    name: "interactionCreate",
    once: false,
    execute: async (client: ExtentsClient, cmdItn: Itn) => {
        const btnItn : Itn = cmdItn;
        if (!cmdItn.isCommand() && !btnItn.isButton()) return;

        if(cmdItn.isCommand()) {
            const command : ICommand | undefined = client.commands.get(cmdItn.commandName);
            if (!command) return;
    
            try {
                await command.execute(cmdItn);
            } catch (error) {
                console.error(error);
                await cmdItn.reply({ content: '명령어 실패', ephemeral: true });
            }
        } else if(btnItn.isButton()) {
            const button : IButton | undefined = client.buttons.get(btnItn.customId);

            if (!button) return;
    
            try {
                await button.execute(btnItn);
            } catch (error) {
                console.error(error);
                await btnItn.reply({ content: '명령어 실패', ephemeral: true });
            }
        }
    } 
}

module.exports = event;