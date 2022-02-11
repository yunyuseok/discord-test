"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require('dotenv').config();
const intents = new discord_js_1.Intents();
intents.add(discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES);
const client = new discord_js_1.Client({ intents });
client.once('ready', async () => {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}에 로그인하였습니다!`);
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
client.on('message', msg => {
    var _a;
    if (msg.author.bot)
        return; // 무한 방지
    if (msg.author.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id))
        return; // 봇으로 인한 접속 금지
    if (msg.content === '!퀴즈') {
        msg.channel.send(`퀴즈 봇이 대답할거임`);
    }
});
client.login(process.env.token);
//# sourceMappingURL=index.js.map