import { SlashCommandBuilder, 
        SlashCommandStringOption, 
        SlashCommandSubcommandBuilder, 
        SlashCommandUserOption } from '@discordjs/builders';
import { CommandInteraction } from "discord.js";
import { ICommand } from "../Interfaces/Command";

const command: ICommand = {
	data: new SlashCommandBuilder()
				.setName('정보')
				.setDescription('정보출력')
                .addSubcommand((subCommand: SlashCommandSubcommandBuilder) => 
                    subCommand
                    .setName("유저")
                    .setDescription("유저정보 출력")
                    .addUserOption((option: SlashCommandUserOption) => 
                        option
                        .setName("target")
                        .setDescription("The User")))
                .addSubcommand((subCommand: SlashCommandSubcommandBuilder) =>
                    subCommand
                    .setName("서버")
                    .setDescription("서버정보 출력"))
                .addSubcommand((subCommand: SlashCommandSubcommandBuilder) => 
                    subCommand
                    .setName("마법")
                    .setDescription("설명")
                    .addStringOption((option: SlashCommandStringOption) => 
                        option
                        .setName("카테고리")
                        .setDescription("골라골라")
                        .setRequired(true)
                        .addChoice("불꽃", "불꽃폭발")
                        .addChoice("얼음", "얼음창")
                        .addChoice("전기", "번개")
                        )),
	execute : async (interaction: CommandInteraction, ...args:any[]) => {
        const wait = require('util').promisify(setTimeout);

        try {
            switch(interaction.options.getSubcommand()) {
                case "유저": 
                    await interaction.reply(`유저 태그 : ${interaction.user.tag}\n 유저 아이디 : ${interaction.user.id}`);
                    break;
                case "서버":
                    await interaction.reply(`서버 이름 : ${interaction.guild?.name}\n 총 인원 : ${interaction.guild?.memberCount}`);
                    break;
                case "마법":
                    await interaction.deferReply({ephemeral: false});
                    await wait(2000);
                    await interaction.editReply({content: `사용 마법 : ${interaction.options.getString("카테고리")}`});
                    //await interaction.followUp({ content: 'Pong again!', ephemeral: true });
                    break;
            }
        } catch(error) {
            console.error(error);
         }
	},
}

module.exports = command;