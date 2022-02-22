"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event = {
    name: "interactionCreate",
    once: false,
    execute: async (client, cmdItn) => {
        const btnItn = cmdItn;
        if (!cmdItn.isCommand() && !btnItn.isButton())
            return;
        if (cmdItn.isCommand()) {
            const command = client.commands.get(cmdItn.commandName);
            if (!command)
                return;
            try {
                await command.execute(cmdItn);
            }
            catch (error) {
                console.error(error);
                await cmdItn.reply({ content: '명령어 실패', ephemeral: true });
            }
        }
        else if (btnItn.isButton()) {
            const button = client.buttons.get(btnItn.customId);
            if (!button)
                return;
            try {
                await button.execute(btnItn);
            }
            catch (error) {
                console.error(error);
                await btnItn.reply({ content: '명령어 실패', ephemeral: true });
            }
        }
    }
};
module.exports = event;
//# sourceMappingURL=interactionCreate.js.map