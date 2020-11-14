"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    class Playlist {
        //private guid: string = Guid.create().toString();
        //setter
        set playlistVideos(_videos) {
            this._playlistVideos = _videos;
        }
        set playlistUser(_user) {
            this._playlistUser = _user;
        }
        set playlistName(_name) {
            this._playlistName = _name;
        }
        //getter
        get playlistVideos() {
            return this._playlistVideos;
        }
        get playlistUser() {
            return this._playlistUser;
        }
        get playlistName() {
            return this._playlistName;
        }
    }
    Aufgabe4_NullPattern.Playlist = Playlist;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=Playlist.js.map