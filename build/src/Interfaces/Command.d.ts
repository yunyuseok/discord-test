import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders';
declare type slahOption = SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
declare type execute = (...args: any[]) => void;
export interface ICommand {
    readonly data: slahOption;
    readonly execute: execute;
}
export {};
