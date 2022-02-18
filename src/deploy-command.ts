/**
 * 22.02.17
 * discord 13v
 * description : 디스코드 슬래쉬 명령어 생성해주는 코드
 * 
 */

import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import * as config from "../config.json";
import MyLib from './lib';

const {	clientId, guildId, token } = config;

const commands: SlashCommandBuilder[] = [];
const commandsFile = MyLib.getDirFileList("./build/src/Commands");

for(const file of commandsFile) {
	const command = require(`./Commands/${file}`).data;
	commands.push(command);
}

const rest: REST = new REST({ version: '9' }).setToken(token);

(async() => {
	try {
		await rest.put(Routes.applicationGuildCommands(clientId, guildId), 
		{ body: commands });
	} catch(err) {
		console.error("error : ", err);
	};
}
)();

