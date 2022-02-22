import { SlashCommandBuilder, 
        SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders';

type slahOption = SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
type execute = (...args:any[]) => void;

export interface ICommand {
    readonly data: slahOption,
    readonly execute : execute
}