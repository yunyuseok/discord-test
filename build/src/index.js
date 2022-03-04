"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const discord_js_1 = require("discord.js");
const config_json_1 = require("../config.json");
const lib_1 = require("./lib");
const intents = new discord_js_1.Intents();
intents.add(discord_js_1.Intents.FLAGS.GUILDS);
// 내부에서 collection 만들어서 가지고 있음.
const client = new Client_1.ExtentsClient({ intents });
// js 파일만 긁어오고
client.initEvent(lib_1.default.getDirFileList("./build/src/Events"));
// 클라이언트에 명령어의 처리 세팅
client.initCommand(lib_1.default.getDirFileList("./build/src/Commands"));
client.login(config_json_1.token);
//# sourceMappingURL=index.js.map