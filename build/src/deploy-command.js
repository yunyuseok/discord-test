"use strict";
/**
 * 22.02.17
 * discord 13v
 * description : 디스코드 슬래쉬 명령어 생성해주는 코드
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const config = require("../config.json");
const lib_1 = require("./lib");
const { clientId, guildId, token } = config;
const commands = [];
const commandsFile = lib_1.default.getDirFileList("./build/src/Commands");
for (const file of commandsFile) {
    const command = require(`./Commands/${file}`).data;
    commands.push(command);
}
const rest = new rest_1.REST({ version: '9' }).setToken(token);
(async () => {
    try {
        await rest.put(v9_1.Routes.applicationGuildCommands(clientId, guildId), { body: commands });
    }
    catch (err) {
        console.error("error : ", err);
    }
    ;
})();
//# sourceMappingURL=deploy-command.js.map