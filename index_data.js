const { Client, Intents } = require("discord.js");
require("dotenv").config();

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({ intents });

const fs = require("fs");

client.once("ready", async () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on("message", (msg) => {
  if (msg.author.bot) return; // 무한반복 방지
  if (msg.author.id === client.user.id) return; // 로그인한 봇으로 체팅 입력 방지

  const id = msg.author.id; // 유저의 고유 아이디
  const nick = msg.author.username; // 유저의 이름

  const filePath = `./data/${id}.json`; // 유저 정보가 만들어지는 파일

  // 파일이 없으면 생성
  !fs.existsSync(filePath)
    ? fs.writeFileSync(filePath, JSON.stringify({}))
    : null; //파일이 없으면

  const user = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));
  const today = new Date();
  const date = "" + today.getFullYear() + today.getMonth() + today.getDate();
  const howMuch = 5000;

  if (msg.content === "얼마 줘") {
    let saveUser = {};
    if (user.id) {
      if (user.date === date) {
        msg.reply("이미 받음");
        saveUser = user;
      } else {
        msg.reply(
          `${howMuch}원이 지금 지급됨. \n${nick}의 현재 잔액은 ${
            user.money
          } -> ${user.money + howMuch}원`
        );
        saveUser = {
          id,
          nick,
          date,
          money: user.money + howMuch,
        };
      }
    } else {
      msg.reply(`${nick} 환영합니다. ${howMuch}원이 지급되었습니다.`);
      saveUser = { id, nick, date, money: howMuch };
    }
    fs.writeFileSync(filePath, JSON.stringify(saveUser));
  }

  if(msg.content === "잔액") {
    user.id ? msg.reply(`${nick}의 잔액은 ${user.money}원`) : msg.reply("등록되지 않은 아이디입니다.");
  }
});

client.login(process.env.token);
