import { SlashCommandBuilder } from '@discordjs/builders';
declare type execute = (...args: any[]) => void;
export interface ICommand {
    readonly data: SlashCommandBuilder;
    readonly execute: execute;
}
export {};
