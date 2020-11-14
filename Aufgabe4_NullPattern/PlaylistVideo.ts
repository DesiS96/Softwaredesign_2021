namespace Aufgabe4_NullPattern {

    export class PlaylistVideo {

        private _playlistVideo: Video;
        private _registeredUser: AbstractUser;
    //    private guid: string = Guid.create().toString();

        //setter
        set playlistVideo(_video: Video) {
            this.playlistVideo = _video;
        }
        set registeredUser(_user: AbstractUser) {
            this._registeredUser = _user;
        }

        //getter
        get playlistVideo(): Video {
            return this._playlistVideo;
        }
        get registeredUser(): AbstractUser {
            return this._registeredUser;
        }
    /*    public getGUID(): string {
            return this.guid;
        }*/
    }
}