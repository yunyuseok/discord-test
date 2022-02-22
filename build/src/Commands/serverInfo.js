"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const command = {
    data: new builders_1.SlashCommandBuilder()
        .setName('서버')
        .setDescription('서버의 정보를 알려줍니다.'),
    execute: async (interaction, ...args) => {
        var _a, _b;
        await interaction.reply(`서버 이름 : ${(_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.name}\n 총 인원 : ${(_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.memberCount}`);
    },
};
module.exports = command;
//# sourceMappingURL=serverInfo.js.map