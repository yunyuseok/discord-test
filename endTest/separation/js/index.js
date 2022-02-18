"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const discord_js_1 = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const intents = new discord_js_1.Intents();
intents.add(discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES);
let client = new discord_js_1.Client({ intents });
client.commands = new discord_js_1.Collection();
const commandFiles = fs.readdirSync("./build/src/commands")
    .filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`).run;
    client.commands.set(command.name, command);
}
client.once('ready', async () => {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}에 로그인하였습니다!`);
});
client.on('message', (msg) => {
    var _a;
    if (!msg.content.startsWith("!") || msg.author.bot)
        return; // !로 시작하지 않으면, 봇이 말한거면 return
    if (msg.author.id === ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id))
        return; // 봇으로 인한 접속 금지
    const args = msg.content.trim().slice("!".length).split(/\s+/);
    const command = args.shift();
    if (!client.commands.has(command))
        return; //명령어가 없으면 return
    try {
        client.commands.get(command).execute(msg, args);
    }
    catch (err) {
        console.error(err);
    }
});
client.login(process.env.token);
//# sourceMappingURL=index.js.map