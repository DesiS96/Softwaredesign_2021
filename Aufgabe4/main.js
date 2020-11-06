"use strict";
//import { User, RegisteredUser} from "./User";
//import { UserFactory } from "./UserFactory";
var Aufgabe4;
//import { User, RegisteredUser} from "./User";
//import { UserFactory } from "./UserFactory";
(function (Aufgabe4) {
    let factory = new Aufgabe4.UserFactory();
    let martha = factory.getUser("User");
    martha.playVideo();
    let leonard = factory.getUser("RegisteredUser"); //Funktioniert mit Factory nicht da die für RegisteredUser nötigen werte mit dieser Methode nicht mitgeliefert werden
    //Factory funktioniert auch dann nicht wenn ich mehrere Optionen für return-typen angebe, da die Klassen sich wohl von den Parametern zu sehr unterscheiden
    let ivan = new Aufgabe4.RegisteredUser();
    console.log(ivan.username);
    ivan.username = "Ivan";
    console.log(ivan.username);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=main.js.map