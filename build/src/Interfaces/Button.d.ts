import { ButtonInteraction, MessageButtonStyleResolvable, User } from "discord.js";
export interface IButton {
    customId: string;
    label: string;
    emoji?: string;
    disable?: boolean;
    style: MessageButtonStyleResolvable;
    action: (i: ButtonInteraction, user?: User) => void;
}
