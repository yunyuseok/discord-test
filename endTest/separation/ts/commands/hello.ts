import { Message } from "discord.js";

interface IhellopInterface {
    name : string;
    description : string;
    execute : (message : Message) => Promise<Message<boolean>>;
}

export const run : IhellopInterface = {
    name: "안녕",
    description: "dd",
    execute: (message) => {
        return message.channel.send(`${message.author}, 안녕!`);
    }
}

