import { SlashCommandBuilder } from '@discordjs/builders';
import { ButtonInteraction, Collection, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed, User } from "discord.js";
import { ICommand, IButton } from "../Interfaces";
import MyLib from "../lib"
import { Buttons } from '../lib/Buttons.class';

const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('버튼')
        .setDescription('버튼 만들기'),
    execute: async (interaction: CommandInteraction, ...args:any[]) => {
        try {
            const buttons: Buttons = MyLib.createButtons().create(
                [
                    {
                        customId: "fire",
                        label: "불꽃발사",
                        emoji: "👍",
                        disable: false,
                        style: "SUCCESS",
                        action: async (bItn: ButtonInteraction) => {
                            await bItn.reply(`${bItn.user.username}(이)가  ${bItn.customId} 버튼을 클릭하였습니다.`);
                        }
                    }, {
                        customId: "water",
                        label: "물대포",
                        disable: false,
                        style: "PRIMARY",
                        action: async (bItn: ButtonInteraction) => {
                            await bItn.update({
                                content: "버튼 클릭됨",
                                components: [],
                            })
                        }
                    },
                ],
                interaction,
                {
                    componentType: 'BUTTON',
                    max: 10,
                    time: 10 * 1000,
                }
            );

            const embed: MessageEmbed = new MessageEmbed()
                .setColor("RED")
                .setTitle("그냥 타이틀")
                .setDescription("임베드 만들어보기");

            await interaction.reply({
                content: "버튼 만들기 완료",
                embeds: [embed],
                components: [buttons.Row],
                ephemeral: true,
            });

            buttons.eCollect();
            buttons.eEnd();

        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = command;