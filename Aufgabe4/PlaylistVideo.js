"use strict";
//import { Guid } from "guid-typescript";
//import { RegisteredUser } from "./User";
//import { Video } from "./Video";
var Aufgabe4;
//import { Guid } from "guid-typescript";
//import { RegisteredUser } from "./User";
//import { Video } from "./Video";
(function (Aufgabe4) {
    class PlaylistVideo {
        //    private guid: string = Guid.create().toString();
        //setter
        set playlistVideo(_video) {
            this.playlistVideo = _video;
        }
        set registeredUser(_user) {
            this._registeredUser = _user;
        }
        //getter
        get playlistVideo() {
            return this._playlistVideo;
        }
        get registeredUser() {
            return this._registeredUser;
        }
    }
    Aufgabe4.PlaylistVideo = PlaylistVideo;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=PlaylistVideo.js.map