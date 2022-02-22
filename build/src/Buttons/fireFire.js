"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button = {
    name: "fireFire",
    execute: async (btnItn, ...args) => {
        btnItn.reply(`${btnItn.user.username}가 버튼을 클릭하였습니다.`);
    },
};
module.exports = button;
//# sourceMappingURL=fireFire.js.map