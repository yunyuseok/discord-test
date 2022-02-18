declare type execute = (...args: any[]) => void;
export interface IEvent {
    readonly name: string;
    readonly once?: boolean;
    readonly execute: execute;
}
export {};
