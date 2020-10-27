namespace Aufgabe3 {

    export class Playlist {

        playlistVideos: PlaylistVideo[];
        playlistUser: RegisteredUser;
        playlistName: string;

        constructor(_playlistVideos: PlaylistVideo[], _playlistUser: RegisteredUser, _playlistName: string) {

            this.playlistVideos = _playlistVideos;
            this.playlistUser = _playlistUser;
            this.playlistName = _playlistName;

        }
    }
}