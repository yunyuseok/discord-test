import {Client, Intents, Message} from 'discord.js';
require('dotenv').config();

import quiz = require('./data/quiz.json');

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({intents});

client.once('ready', async () => {
  console.log(`${client.user?.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.author.bot) return; // 무한 방지
  if (msg.author.id === client.user?.id) return; // 봇으로 인한 접속 금지

  if (msg.content === '!퀴즈') {
    const limit = 5;
    const item = quiz[Math.floor(Math.random() * quiz.length)];
  
    const filter = (res : Message) => {
      return item.answer.some((answer : string) => answer === res.content);
    };
    
    msg.channel.send(`${item.question} (제한시간 : ${limit})`)
    .then(() => {
      msg.channel.awaitMessages({filter, max: 1, time: limit * 1000, errors: ["time"]})
      .then((collected) => {
        msg.channel.send(`${collected.first()?.author} <- 정답!`);
      })
      .catch((err) => {
        msg.channel.send("제한시간이 지났습니다.");
      })
    })
  }
});

client.login(process.env.token);
