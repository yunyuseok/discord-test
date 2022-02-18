"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require('dotenv').config();
const quiz = require("./data/quiz.json");
const intents = new discord_js_1.Intents();
intents.add(discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES);
const client = new discord_js_1.Client({ intents });
client.once('ready', async () => {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}에 로그인하였습니다!`);
});
client.on('message', msg => {
    var _a;
    if (msg.author.bot)
        return; // 무한 방지
    if (msg.author.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id))
        return; // 봇으로 인한 접속 금지
    if (msg.content === '!퀴즈') {
        const limit = 5;
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = (res) => {
            return item.answer.some((answer) => answer === res.content);
        };
        msg.channel.send(`${item.question} (제한시간 : ${limit})`)
            .then(() => {
            msg.channel.awaitMessages({ filter, max: 1, time: limit * 1000, errors: ["time"] })
                .then((collected) => {
                var _a;
                msg.channel.send(`${(_a = collected.first()) === null || _a === void 0 ? void 0 : _a.author} <- 정답!`);
            })
                .catch((err) => {
                msg.channel.send("제한시간이 지났습니다.");
            });
        });
    }
});
client.login(process.env.token);
//# sourceMappingURL=index.js.map