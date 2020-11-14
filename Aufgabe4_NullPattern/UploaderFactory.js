"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    class UploaderFactory {
        //Klasse, welche einen NullRegisteredUser herausgibt, wenn kein Photo mitgegeben wird
        static getUser(_photo) {
            if (_photo == null) {
                return new Aufgabe4_NullPattern.NullUploader;
            }
            else {
                let uploader = new Aufgabe4_NullPattern.Uploader;
                uploader.userPhoto = _photo;
                return uploader;
            }
        }
    }
    Aufgabe4_NullPattern.UploaderFactory = UploaderFactory;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=UploaderFactory.js.map