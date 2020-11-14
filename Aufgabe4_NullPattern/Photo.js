"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
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
    Aufgabe4_NullPattern.Photo = Photo;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=Photo.js.map