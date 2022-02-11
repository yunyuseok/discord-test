const { Client, Intents } = require("discord.js");
require("dotenv").config();

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({ intents });

client.once("ready", async () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on("message", (msg) => {
  if(msg.author.bot) return;  // 무한 방지
  if(msg.author.id === client.user.id) return; // 봇으로 인한 접속 금지

  if(msg.content === "야") {
    msg.reply("호");
  }

});

client.login(process.env.token);
