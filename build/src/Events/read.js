"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event = {
    name: "ready",
    once: true,
    execute: (client) => {
        var _a;
        console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}에 로그인하였습니다!`);
    }
};
module.exports = event;
//# sourceMappingURL=read.js.map