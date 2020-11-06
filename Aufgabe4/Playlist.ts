//import { Guid } from "guid-typescript";
//import { PlaylistVideo } from "./PlaylistVideo";
//import { RegisteredUser } from "./User";

namespace Aufgabe4 {

    export class Playlist {

        private _playlistVideos: PlaylistVideo[];
        private _playlistUser: RegisteredUser;
        private _playlistName: string;
        //private guid: string = Guid.create().toString();

        //setter

        set playlistVideos(_videos: PlaylistVideo[]) {
            this._playlistVideos = _videos;
        }
        set playlistUser(_user: RegisteredUser) {
            this._playlistUser = _user;
        }
        set playlistName(_name: string) {
            this._playlistName = _name;
        }

        //getter

        get playlistVideos(): PlaylistVideo[] {
            return this._playlistVideos;
        }
        get playlistUser(): RegisteredUser {
            return this._playlistUser;
        }
        get playlistName(): string {
            return this._playlistName;
        }
    /*    public getGuid(): string {
            return this.guid;
        }   */
    }
}