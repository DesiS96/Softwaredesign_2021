//import { User, RegisteredUser} from "./User";
//import { UserFactory } from "./UserFactory";

namespace Aufgabe4 {

    let factory: UserFactory = new UserFactory();

    let martha: User = factory.getUser("User");
    martha.playVideo();

    let leonard: RegisteredUser = factory.getUser("RegisteredUser"); //Funktioniert mit Factory nicht da die für RegisteredUser nötigen werte mit dieser Methode nicht mitgeliefert werden
    //Factory funktioniert auch dann nicht wenn ich mehrere Optionen für return-typen angebe, da die Klassen sich wohl von den Parametern zu sehr unterscheiden

    let ivan: RegisteredUser = new RegisteredUser();
    console.log(ivan.username);
    ivan.username = "Ivan";
    console.log(ivan.username);
}
