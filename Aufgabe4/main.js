"use strict";
//import { User, RegisteredUser} from "./User";
//import { UserFactory } from "./UserFactory";
var Aufgabe4;
//import { User, RegisteredUser} from "./User";
//import { UserFactory } from "./UserFactory";
(function (Aufgabe4) {
    //let factory: UserFactory = new UserFactory();
    //let martha: User = factory.getUser("User");
    //martha.playVideo();
    //let leonard: RegisteredUser = factory.getUser("RegisteredUser"); //Funktioniert mit Factory nicht da die für RegisteredUser nötigen werte mit dieser Methode nicht mitgeliefert werden
    //Factory funktioniert auch dann nicht wenn ich mehrere Optionen für return-typen angebe, da die Klassen sich wohl von den Parametern zu sehr unterscheiden
    //leonard.username = "Leonard";
    /*let ivan: RegisteredUser = new RegisteredUser();
    console.log(ivan.username);
    ivan.username = "Ivan";
    console.log(ivan.username);*/
    let video = new Aufgabe4.Video();
    video.videoTitle = "TestVideo";
    video.aspectRatio = "16:9";
    video.videoLength = 60;
    video.videoSize = 200;
    //let videoPlayer: VideoPlayer = VideoPlayer.getInstance();
    const videoPlayer = Aufgabe4.VideoPlayer.getInstance();
    videoPlayer.playVideo(video);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=main.js.map