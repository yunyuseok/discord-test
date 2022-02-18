const { Client, Intents, MessageEmbed } = require("discord.js");
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

  if(msg.content === "프로필") {
    const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setTitle("sayarn-TestBot")
      .setAuthor({
        name: "Author-sayarn",
        iconURL:
          "https://i3.ruliweb.com/img/20/10/29/17573847c944f8bd6.jpg",
      })
      .addFields(
        { name: "기능", value: "프로필(embed) 보여주기", inline: true },
        { name: "좋아하는것", value: "포켓몬", inline: true },
      )
      .setImage("https://www.dogdrip.net/dvs/d/20/10/02/dcba2c96d7b670f8858270a20211270e.png")
      .setTimestamp(Date.now())
      .setFooter({text: `Author : sayarn \nUsage : 프로필(Embed) 보여주기`});
    msg.channel.send({embeds: [embed]});
  }
});

client.login(process.env.token);
