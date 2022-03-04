import { APIMessage } from "@discordjs/builders/node_modules/discord-api-types";
import { ButtonInteraction, Collection, Interaction, Message, MessageActionRow } from "discord.js";
import { IButton } from "../Interfaces";
declare type Ifilter = (bItn: ButtonInteraction) => boolean;
interface ICollector {
    componentType?: 'BUTTON' | undefined;
    max?: number | undefined;
    time?: number | undefined;
    dispose?: boolean | undefined;
    idle?: number | undefined;
    maxComponents?: number | undefined;
    maxUsers?: number | undefined;
    message?: Message<boolean> | APIMessage | null | undefined;
}
export declare class Buttons {
    private readonly buttons;
    private readonly row;
    private readonly filter;
    private readonly collector;
    private constructor();
    private createMesasgeActiuonRow;
    eCollect(collectionFunc?: (i: ButtonInteraction) => void): Promise<void>;
    eEnd(collectionFunc?: (collected: Collection<string, Message>) => void): void;
    get Row(): MessageActionRow;
    static create(buttons: IButton[], itn: Interaction, collector: ICollector, filter?: Ifilter | undefined): Buttons;
}
export {};
