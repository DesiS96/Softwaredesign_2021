import { Guid } from "guid-typescript";
import { RegisteredUser } from "./User";
import { Video } from "./Video";

export class PlaylistVideo {

    private playlistVideo: Video;
    private registeredUser: RegisteredUser;
    private guid: string = Guid.create().toString();

    //setter
    public setPlaylistVideo(_video: Video): void {
        this.playlistVideo = _video;
    }
    public setRegisteredUser(_user: RegisteredUser): void {
        this.registeredUser = _user;
    }

    //getter
    public getPlaylistVideo(): Video {
        return this.playlistVideo;
    }
    public getRegisteredUser(): RegisteredUser {
        return this.registeredUser;
    }
    public getGUID(): string {
        return this.guid;
    }
}