import { ExtentsClient } from "./Client";
import { ICommand, IEvent } from "./Interfaces";
import { Intents } from 'discord.js';
import { token } from "../config.json";
import MyLib from "./lib";

const intents : Intents = new Intents();
intents.add(Intents.FLAGS.GUILDS);

// 내부에서 collection 만들어서 가지고 있음.
const client : ExtentsClient = new ExtentsClient({ intents });

// js 파일만 긁어오고
client.initEvent(MyLib.getDirFileList("./build/src/Events"));
// 클라이언트에 명령어의 처리 세팅
client.initCommand(MyLib.getDirFileList("./build/src/Commands"));

client.login(token);