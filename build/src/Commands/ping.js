"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const command = {
    data: new builders_1.SlashCommandBuilder()
        .setName('핑')
        .setDescription('퐁을 돌려줍니다!'),
    execute: async (interaction) => {
        interaction.reply("퐁");
    },
};
module.exports = command;
//# sourceMappingURL=ping.js.map