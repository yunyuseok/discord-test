import { Client, ClientOptions, Collection } from "discord.js";
import { ICommand, IButton } from "../Interfaces";
export declare class ExtentsClient extends Client {
    readonly commands: Collection<string, ICommand>;
    readonly buttons: Collection<string, IButton>;
    constructor(option: ClientOptions);
    initEvent(eventFiles?: string[]): void;
    initCommand(commandFiles?: string[]): void;
    initButton(buttonFiles?: string[]): void;
}
