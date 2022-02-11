import {Client, Intents} from 'discord.js';
require('dotenv').config();

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({intents});

client.once('ready', async () => {
  console.log(`${client.user?.tag}에 로그인하였습니다!`);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
client.on('message', msg => {
  if (msg.author.bot) return; // 무한 방지
  if (msg.author.id === client.user?.id) return; // 봇으로 인한 접속 금지

  if (msg.content === '!퀴즈') {
    msg.channel.send(`퀴즈 봇이 대답할거임`);
  }
});

client.login(process.env.token);
