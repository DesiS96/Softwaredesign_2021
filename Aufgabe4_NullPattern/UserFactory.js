"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    class UserFactory {
        //Klasse, welche einen NullRegisteredUser herausgibt, wenn kein Photo mitgegeben wird
        static getUser(_photo) {
            if (_photo == null) {
                return new Aufgabe4_NullPattern.NullRegisteredUser;
            }
            else {
                let reggie = new Aufgabe4_NullPattern.RegisteredUser;
                reggie.userPhoto = _photo;
                return reggie;
            }
        }
    }
    Aufgabe4_NullPattern.UserFactory = UserFactory;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=UserFactory.js.map