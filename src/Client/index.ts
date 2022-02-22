import { Client, ClientOptions, Collection } from "discord.js";
import { IEvent, ICommand, IButton } from "../Interfaces";

export class ExtentsClient extends Client {
    readonly commands : Collection<string, ICommand>;
    readonly buttons : Collection<string, IButton>;
    constructor(option : ClientOptions) {
        super(option);
        this.commands = new Collection();
        this.buttons = new Collection();
    }

    public initEvent(eventFiles: string[] = [""]) {
        for(const file of eventFiles) {
            const event: IEvent = require(`../Events/${file}`);

            if(event.name !== "interactionButton") {
                event.once ? 
                this.once(event.name, (...args) => event.execute(...args)) :
                this.on(event.name, (...args) => event.execute(this, ...args));
            }
        }
    }

    public initCommand(commandFiles: string[] = [""]) {
        for(const file of commandFiles) {
            const command: ICommand = require(`../Commands/${file}`);
            this.commands.set(command.data.name, command);
        }
    }

    public initButton(buttonFiles: string[] = [""]) {
        for(const file of buttonFiles) {
            const button: IButton = require(`../Buttons/${file}`);
            this.buttons.set(button.name, button);
        }
    }
}