"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event = {
    name: "interactionCreate",
    once: false,
    execute: async (client, itn) => {
        if (!itn.isCommand())
            return;
        if (itn.isCommand()) {
            const command = client.commands.get(itn.commandName);
            if (!command)
                return;
            try {
                await command.execute(itn);
            }
            catch (error) {
                console.error(error);
                await itn.reply({ content: '명령어 실패', ephemeral: true });
            }
        }
    }
};
module.exports = event;
//# sourceMappingURL=interactionCreate.js.map