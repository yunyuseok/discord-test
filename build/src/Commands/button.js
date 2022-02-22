"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const command = {
    data: new builders_1.SlashCommandBuilder()
        .setName('버튼')
        .setDescription('버튼 만들기'),
    execute: async (interaction, ...args) => {
        try {
            const row = new discord_js_1.MessageActionRow()
                .addComponents(new discord_js_1.MessageButton()
                .setCustomId("fireFire")
                .setLabel("발사")
                .setEmoji('👍')
                .setDisabled(false) // 버튼 비활성화
                .setStyle("SUCCESS"));
            const embed = new discord_js_1.MessageEmbed()
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
        }
        catch (error) {
            console.error(error);
        }
    },
};
module.exports = command;
//# sourceMappingURL=button.js.map