import { APIMessage } from "@discordjs/builders/node_modules/discord-api-types";
import { ButtonInteraction, CacheType, Collection, Interaction, InteractionCollector, Message, MessageActionRow, MessageButton, MessageComponentTypeResolvable } from "discord.js";
import { IButton } from "../Interfaces";

type Ifilter = (bItn: ButtonInteraction) => boolean;
interface ICollector {
    componentType?: 'BUTTON' | undefined,
    max?: number | undefined,
    time?: number | undefined,
    dispose?: boolean | undefined,
    idle?: number | undefined,
    maxComponents?: number | undefined,
    maxUsers?: number | undefined,
    message?: Message<boolean> | APIMessage | null | undefined
}

export class Buttons {
    private readonly buttons: IButton[];
    private readonly row: MessageActionRow;
    private readonly filter: Ifilter;
    private readonly collector: InteractionCollector<ButtonInteraction<CacheType>> | undefined

    private constructor(buttons: IButton[], 
                        itn: Interaction,
                        collector: ICollector,
                        filter: Ifilter | undefined) {
        this.buttons = buttons;
        this.row = this.createMesasgeActiuonRow();

        if(filter === undefined) {
            this.filter = (bItn: ButtonInteraction) : boolean => {
                return this.buttons.some((button: IButton): boolean => button.customId === bItn.customId);
            };
        } else {
            this.filter = filter;
        }

        this.collector = itn.channel?.createMessageComponentCollector({
            componentType:  collector.componentType,
            max:            collector.max,
            time:           collector.time,
            filter:         this.filter,
            dispose:        collector.dispose,
            idle:           collector.idle,
            maxComponents:  collector.maxComponents,
            maxUsers:       collector.maxUsers,
            message:        collector.message
        });
    };

    private createMesasgeActiuonRow(): MessageActionRow {
        return new MessageActionRow().addComponents(
            this.buttons.map((button: IButton): MessageButton => {
                return new MessageButton()
                    .setCustomId(button.customId)
                    .setLabel(button.label)
                    .setEmoji(button?.emoji ?? "")
                    .setDisabled(button?.disable ?? false)
                    .setStyle(button.style)
            })
        );
    };
    
    public async eCollect(collectionFunc: (i: ButtonInteraction) => void = 
        async (i: ButtonInteraction) => 
            { 
                this.buttons.find((button: IButton) => button.customId === i.customId)
                ?.action(i) 
            }
    ) {
        this.collector?.on('collect', collectionFunc);  
    };

    public eEnd(collectionFunc:(collected: Collection<string, Message>) => void = 
        async (collected: Collection<string, Message>) => {}
     ) {
        this.collector?.on('end', collectionFunc);
    }

    get Row() {
        return this.row;
    }

    public static create(buttons: IButton[], 
                        itn: Interaction,
                        collector: ICollector,
                        filter: Ifilter | undefined = undefined,
    ) {
        return new Buttons(buttons, itn, collector, filter);
    };
}