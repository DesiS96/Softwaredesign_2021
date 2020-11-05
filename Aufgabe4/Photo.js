System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, Photo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            Photo = class Photo {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create();
                }
                //setter
                setFilesize(_size) {
                    this.filesize = _size;
                }
                setFilename(_name) {
                    this.filename = _name;
                }
                setPhotoWidth(_photoWidth) {
                    this.photoWidth = _photoWidth;
                }
                setPhotoHeight(_photoHeight) {
                    this.photoHeight = _photoHeight;
                }
                //getter
                getFilesize() {
                    return this.filesize;
                }
                getFilename() {
                    return this.filename;
                }
                getPhotoWidth() {
                    return this.photoWidth;
                }
                getPhotoHeight() {
                    return this.photoHeight;
                }
                getGUID() {
                    return this.guid;
                }
            };
            exports_1("Photo", Photo);
        }
    };
});
//# sourceMappingURL=Photo.js.map