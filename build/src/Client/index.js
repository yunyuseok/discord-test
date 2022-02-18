"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtentsClient = void 0;
const discord_js_1 = require("discord.js");
class ExtentsClient extends discord_js_1.Client {
    constructor(option) {
        super(option);
        this.commands = new discord_js_1.Collection();
    }
    initEvent(eventFiles = [""]) {
        for (const file of eventFiles) {
            const event = require(`../Events/${file}`);
            event.once ?
                this.once(event.name, (...args) => event.execute(...args)) :
                this.on(event.name, (...args) => event.execute(this, ...args));
        }
    }
    initCommand(commandFiles = [""]) {
        for (const file of commandFiles) {
            const command = require(`../Commands/${file}`);
            this.commands.set(command.data.name, command);
        }
    }
}
exports.ExtentsClient = ExtentsClient;
//# sourceMappingURL=index.js.map