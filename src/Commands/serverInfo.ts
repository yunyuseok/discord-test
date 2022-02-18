import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from "discord.js";
import { ICommand } from "../Interfaces/Command";

const command: ICommand = {
	data: new SlashCommandBuilder()
				.setName('서버')
				.setDescription('서버의 정보를 알려줍니다.'),
	execute : async (interaction: CommandInteraction) => {
		await interaction.reply(`서버 이름 : ${interaction.guild?.name}\n 총 인원 : ${interaction.guild?.memberCount}`);
	},
}

module.exports = command;