"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class MyLib {
    constructor() { }
    ;
}
exports.default = MyLib;
MyLib.getDirFileList = (dirPath, extName = ".js") => {
    return fs.readdirSync(dirPath).filter((file) => file.endsWith(extName));
};
//# sourceMappingURL=index.js.map