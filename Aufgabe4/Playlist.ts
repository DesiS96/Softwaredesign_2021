import { Guid } from "guid-typescript";
import { PlaylistVideo } from "./PlaylistVideo";
import { RegisteredUser } from "./User";

export class Playlist {

    private playlistVideos: PlaylistVideo[];
    private playlistUser: RegisteredUser;
    private playlistName: string;
    private guid: Guid = Guid.create();

    //setter

    public setPlaylistVideos(_videos: PlaylistVideo[]): void {
        this.playlistVideos = _videos;
    }
    public setPlaylistUser(_user: RegisteredUser): void {
        this.playlistUser = _user;
    }
    public setPlaylistName(_name: string): void {
        this.playlistName = _name;
    }

    //getter

    public getPlaylistVideos(): PlaylistVideo[] {
        return this.playlistVideos;
    }
    public getPlaylistUser(): RegisteredUser {
        return this.playlistUser;
    }
    public getPlaylistName(): string {
        return this.playlistName;
    }
    public getGuid(): Guid {
        return this.guid;
    }   
}