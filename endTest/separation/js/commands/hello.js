"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
exports.run = {
    name: "안녕",
    description: "dd",
    execute: (message) => {
        return message.channel.send(`${message.author}, 안녕!`);
    }
};
//# sourceMappingURL=hello.js.map