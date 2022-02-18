import fs = require("fs");

export default class MyLib {
    private constructor() {};

    public static getDirFileList = (dirPath: string, extName: string = ".js") => {
        return fs.readdirSync(dirPath).filter((file: string) => file.endsWith(extName));
    }
}