import { Photo } from "./Photo";
import { Playlist } from "./Playlist";
import { Video } from "./Video";
import { PlaylistVideo } from "./PlaylistVideo";
import { Channel } from "./Channel";
import { User, UserInterface, RegisteredUser, Uploader } from "./User";
import { UserFactory } from "./UserFactory";

let factory: UserFactory = new UserFactory();

let martha: User = factory.getUser("User");
martha.playVideo();

//let leonard: RegisteredUser = factory.getUser("RegisteredUser"); Funktioniert mit Factory nicht da die für RegisteredUser nötigen werte mit dieser Methode nicht mitgeliefert werden

let ivan: RegisteredUser;
ivan.setUsername("Ivan");
console.log(ivan.getUsername);

