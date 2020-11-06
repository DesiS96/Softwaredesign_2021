"use strict";
//import { Guid } from "guid-typescript";
//import { PlaylistVideo } from "./PlaylistVideo";
//import { RegisteredUser } from "./User";
var Aufgabe4;
//import { Guid } from "guid-typescript";
//import { PlaylistVideo } from "./PlaylistVideo";
//import { RegisteredUser } from "./User";
(function (Aufgabe4) {
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
    Aufgabe4.Playlist = Playlist;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Playlist.js.map