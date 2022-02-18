import { Message } from "discord.js";
interface IhellopInterface {
    name: string;
    description: string;
    execute: (message: Message) => Promise<Message<boolean>>;
}
export declare const run: IhellopInterface;
export {};
