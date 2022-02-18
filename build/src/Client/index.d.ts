import { Client, ClientOptions, Collection } from "discord.js";
import { ICommand } from "../Interfaces";
export declare class ExtentsClient extends Client {
    readonly commands: Collection<string, ICommand>;
    constructor(option: ClientOptions);
    initEvent(eventFiles?: string[]): void;
    initCommand(commandFiles?: string[]): void;
}
