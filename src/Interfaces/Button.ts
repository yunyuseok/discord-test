type buttonOption = string;
type execute = (...args:any[]) => void;

export interface IButton {
    readonly name: buttonOption,
    readonly execute : execute
}