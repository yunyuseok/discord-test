import {Client, Intents, Message, MessageEmbed} from 'discord.js';
require('dotenv').config();

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({intents});

client.once('ready', async () => {
  console.log(`${client.user?.tag}에 로그인하였습니다!`);
});

client.on('message', (msg : Message) => {
  if (msg.author.bot) return; // 무한 방지
  if (msg.author.id === client.user?.id) return; // 봇으로 인한 접속 금지

  if(msg.content.substring(0,3) === "!투표") {
    const description = msg.content.substring(3);
    const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setTitle("투표합시다")
    .setDescription(description)
    .setAuthor({
      name: "Author-sayarn",
      iconURL:
        "https://i3.ruliweb.com/img/20/10/29/17573847c944f8bd6.jpg",
    });

    msg.channel.send({embeds: [embed]})
    .then((msg2 : Message) => {
      msg2.react("👍");
      msg2.react("👎");
    });
  }
});

client.login(process.env.token);
