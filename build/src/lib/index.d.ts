import { Buttons } from "./Buttons.class";
export default class MyLib {
    private constructor();
    static getDirFileList: (dirPath: string, extName?: string) => string[];
    static createButtons(): typeof Buttons;
}
