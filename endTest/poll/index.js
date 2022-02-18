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
client.on('message', (msg) => {
    var _a;
    if (msg.author.bot)
        return; // 무한 방지
    if (msg.author.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id))
        return; // 봇으로 인한 접속 금지
    if (msg.content.substring(0, 3) === "!투표") {
        const description = msg.content.substring(3);
        const embed = new discord_js_1.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("투표합시다")
            .setDescription(description)
            .setAuthor({
            name: "Author-sayarn",
            iconURL: "https://i3.ruliweb.com/img/20/10/29/17573847c944f8bd6.jpg",
        });
        msg.channel.send({ embeds: [embed] })
            .then((msg2) => {
            msg2.react("👍");
            msg2.react("👎");
        });
    }
});
client.login(process.env.token);
//# sourceMappingURL=index.js.map