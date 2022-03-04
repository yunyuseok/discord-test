import fs = require("fs");
import { Buttons } from"./Buttons.class";

export default class MyLib {
    private constructor() {};

    public static getDirFileList = (dirPath: string, extName: string = ".js") => {
        return fs.readdirSync(dirPath).filter((file: string) => file.endsWith(extName));
    }

    public static createButtons() {
        return Buttons;
    }
}