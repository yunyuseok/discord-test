"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Buttons_class_1 = require("./Buttons.class");
class MyLib {
    constructor() { }
    ;
    static createButtons() {
        return Buttons_class_1.Buttons;
    }
}
exports.default = MyLib;
MyLib.getDirFileList = (dirPath, extName = ".js") => {
    return fs.readdirSync(dirPath).filter((file) => file.endsWith(extName));
};
//# sourceMappingURL=index.js.map