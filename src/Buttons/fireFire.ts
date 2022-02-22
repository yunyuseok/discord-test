import { ButtonInteraction } from "discord.js";
import { IButton } from "../Interfaces/Button";

const button: IButton = {
	name: "fireFire",
	execute : async (btnItn: ButtonInteraction, ...args:any[]) => {
		btnItn.reply(`${btnItn.user.username}가 버튼을 클릭하였습니다.`);
	},
}

module.exports = button;