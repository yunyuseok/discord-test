declare type buttonOption = string;
declare type execute = (...args: any[]) => void;
export interface IButton {
    readonly name: buttonOption;
    readonly execute: execute;
}
export {};
