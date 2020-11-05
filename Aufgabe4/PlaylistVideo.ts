import { Guid } from "guid-typescript";
import { RegisteredUser } from "./User";
import { Video } from "./Video";

export class PlaylistVideo {

    private playlistVideo: Video;
    private registeredUser: RegisteredUser;
    private guid: Guid = Guid.create();

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
    public getGUID(): Guid {
        return this.guid;
    }
}