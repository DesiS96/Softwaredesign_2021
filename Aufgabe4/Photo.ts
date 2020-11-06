//import { Guid } from "guid-typescript";

namespace Aufgabe4 {

    export class Photo {

        private _filesize: number;
        private _filename: string;
        private _photoWidth: number;
        private _photoHeight: number;
    // private guid: string = Guid.create().toString();
        
        //setter

        set filesize(_size: number) {
            this._filesize = _size;
        }
        set filename(_name: string) {

            this._filename = _name;
        }
        set photoWidth(_photoWidth: number) {

            this._photoWidth = _photoWidth;
        }
        set photoHeight(_photoHeight: number) {

            this._photoHeight = _photoHeight;
        }

        //getter

        get filesize(): number {

            return this._filesize;
        }
        get filename(): string {

            return this._filename;
        }
        get photoWidth(): number {

            return this._photoWidth;
        }
        get photoHeight(): number {

            return this._photoHeight;
        }
    /*    public getGUID(): string {

            return this.guid;
        }*/
    }
}