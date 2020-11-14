"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
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
    Aufgabe4_NullPattern.PlaylistVideo = PlaylistVideo;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=PlaylistVideo.js.map