"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = void 0;
const discord_js_1 = require("discord.js");
class Buttons {
    constructor(buttons, itn, collector, filter) {
        var _a;
        this.buttons = buttons;
        this.row = this.createMesasgeActiuonRow();
        if (filter === undefined) {
            this.filter = (bItn) => {
                return this.buttons.some((button) => button.customId === bItn.customId);
            };
        }
        else {
            this.filter = filter;
        }
        this.collector = (_a = itn.channel) === null || _a === void 0 ? void 0 : _a.createMessageComponentCollector({
            componentType: collector.componentType,
            max: collector.max,
            time: collector.time,
            filter: this.filter,
            dispose: collector.dispose,
            idle: collector.idle,
            maxComponents: collector.maxComponents,
            maxUsers: collector.maxUsers,
            message: collector.message
        });
    }
    ;
    createMesasgeActiuonRow() {
        return new discord_js_1.MessageActionRow().addComponents(this.buttons.map((button) => {
            var _a, _b;
            return new discord_js_1.MessageButton()
                .setCustomId(button.customId)
                .setLabel(button.label)
                .setEmoji((_a = button === null || button === void 0 ? void 0 : button.emoji) !== null && _a !== void 0 ? _a : "")
                .setDisabled((_b = button === null || button === void 0 ? void 0 : button.disable) !== null && _b !== void 0 ? _b : false)
                .setStyle(button.style);
        }));
    }
    ;
    async eCollect(collectionFunc = async (i) => {
        var _a;
        (_a = this.buttons.find((button) => button.customId === i.customId)) === null || _a === void 0 ? void 0 : _a.action(i);
    }) {
        var _a;
        (_a = this.collector) === null || _a === void 0 ? void 0 : _a.on('collect', collectionFunc);
    }
    ;
    eEnd(collectionFunc = async (collected) => { }) {
        var _a;
        (_a = this.collector) === null || _a === void 0 ? void 0 : _a.on('end', collectionFunc);
    }
    get Row() {
        return this.row;
    }
    static create(buttons, itn, collector, filter = undefined) {
        return new Buttons(buttons, itn, collector, filter);
    }
    ;
}
exports.Buttons = Buttons;
//# sourceMappingURL=Buttons.class.js.map