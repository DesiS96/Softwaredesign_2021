"use strict";
//import { Guid } from "guid-typescript";
var Aufgabe4;
//import { Guid } from "guid-typescript";
(function (Aufgabe4) {
    class Photo {
        // private guid: string = Guid.create().toString();
        //setter
        set filesize(_size) {
            this._filesize = _size;
        }
        set filename(_name) {
            this._filename = _name;
        }
        set photoWidth(_photoWidth) {
            this._photoWidth = _photoWidth;
        }
        set photoHeight(_photoHeight) {
            this._photoHeight = _photoHeight;
        }
        //getter
        get filesize() {
            return this._filesize;
        }
        get filename() {
            return this._filename;
        }
        get photoWidth() {
            return this._photoWidth;
        }
        get photoHeight() {
            return this._photoHeight;
        }
    }
    Aufgabe4.Photo = Photo;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Photo.js.map