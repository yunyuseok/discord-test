import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from "discord.js";
import { ICommand } from "../Interfaces/Command";

const command: ICommand = {
	data: new SlashCommandBuilder()
				.setName('유저')
				.setDescription('유저의 정보를 알려줍니다.'),
	execute : async (interaction: CommandInteraction, ...args:any[]) => {
		await interaction.reply(`유저 태그 : ${interaction.user.tag}\n 유저 아이디 : ${interaction.user.id}`);
	},
}

module.exports = command;