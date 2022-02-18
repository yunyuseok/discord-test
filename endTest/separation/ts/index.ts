import * as fs from 'fs';
import { Client, Collection, Intents, Message } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const intents : Intents = new Intents();
intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

let client : any = new Client({ intents });
client.commands = new Collection();

const commandFiles = fs.readdirSync("./build/src/commands")
  .filter((file : string) => file.endsWith('.js'));

for(const file of commandFiles) {
  const command = require(`./commands/${file}`).run;
  client.commands.set(command.name, command);
}

client.once('ready', async () => {
  console.log(`${client.user?.tag}에 로그인하였습니다!`);
});
 
client.on('message', (msg : Message) => {
  if(!msg.content.startsWith("!") || msg.author.bot) return;  // !로 시작하지 않으면, 봇이 말한거면 return
  if (msg.author.id === client.user?.id) return; // 봇으로 인한 접속 금지

  const args = msg.content.trim().slice("!".length).split(/\s+/);
  const command = args.shift();

  if(!client.commands.has(command)) return; //명령어가 없으면 return

  try {
    client.commands.get(command).execute(msg, args);
  } catch(err) {
    console.error(err);
  }
});

client.login(process.env.token);
