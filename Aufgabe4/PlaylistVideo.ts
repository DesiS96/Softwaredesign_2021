//import { Guid } from "guid-typescript";
//import { RegisteredUser } from "./User";
//import { Video } from "./Video";

namespace Aufgabe4 {

    export class PlaylistVideo {

        private _playlistVideo: Video;
        private _registeredUser: RegisteredUser;
    //    private guid: string = Guid.create().toString();

        //setter
        set playlistVideo(_video: Video) {
            this.playlistVideo = _video;
        }
        set registeredUser(_user: RegisteredUser) {
            this._registeredUser = _user;
        }

        //getter
        get playlistVideo(): Video {
            return this._playlistVideo;
        }
        get registeredUser(): RegisteredUser {
            return this._registeredUser;
        }
    /*    public getGUID(): string {
            return this.guid;
        }*/
    }
}