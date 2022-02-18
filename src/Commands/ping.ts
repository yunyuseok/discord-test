import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from "discord.js";
import { ICommand } from "../Interfaces/Command";

const command: ICommand = {
	data: new SlashCommandBuilder()
				.setName('핑')
				.setDescription('퐁을 돌려줍니다!'),
	execute : async (interaction: CommandInteraction) => {
		interaction.reply("퐁");
	},
}

module.exports = command;