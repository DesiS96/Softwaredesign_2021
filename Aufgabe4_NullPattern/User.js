"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    //hier komplett separate Klasse da ohnehin kein Nutzerphoto
    class User {
        playVideo() {
            console.log("Video wird abgespielt.");
        }
    }
    Aufgabe4_NullPattern.User = User;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=User.js.map