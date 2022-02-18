"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const command = {
    data: new builders_1.SlashCommandBuilder()
        .setName('유저')
        .setDescription('유저의 정보를 알려줍니다.'),
    execute: async (interaction) => {
        await interaction.reply(`유저 태그 : ${interaction.user.tag}\n 유저 아이디 : ${interaction.user.id}`);
    },
};
module.exports = command;
//# sourceMappingURL=userInfo.js.map