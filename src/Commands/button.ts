import { SlashCommandBuilder } from '@discordjs/builders';
import { ButtonInteraction, Collection, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "../Interfaces/Command";

const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('버튼')
        .setDescription('버튼 만들기'),
    execute: async (interaction: CommandInteraction, ...args:any[]) => {
        try {
            const row: MessageActionRow = new MessageActionRow()
                .addComponents(new MessageButton()
                    .setCustomId("fireFire")
                    .setLabel("발사")
                    .setEmoji('👍')
                    .setDisabled(false)  // 버튼 비활성화
                    .setStyle("SUCCESS"));

            const embed: MessageEmbed = new MessageEmbed()
                .setColor("RED")
                .setTitle("그냥 타이틀")
                .setDescription("이모지 만들어보기");

            await interaction.reply({
                content: "버튼 만들기 완료",
                embeds: [embed],
                components: [row],
                ephemeral: true,
            });

            // const collector = interaction.channel?.createMessageComponentCollector({
            //     componentType: 'BUTTON',
            //     max: 1,
            //     time: 3 * 1000,
            // });
            
            // collector?.on('collect', (i: ButtonInteraction) => {
            //     console.log(`sssssssss`);
            //     if (i.user.id === interaction.user.id) {
            //         i.reply(`${i.user.username} clicked on the ${i.customId} button.`);
            //     } else {
            //         i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
            //     }
            // });

            // collector?.on('end', (collected: Collection<string, Message>) => {
            //     console.log(`Collected ${collected.size} items`);
            // });

        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = command;