namespace Aufgabe3 {

    export class Playlist {

        public playlistVideos: PlaylistVideo[];
        public playlistUser: RegisteredUser;
        public playlistName: string;
        public uuid: number;

        constructor(_playlistVideos: PlaylistVideo[], _playlistUser: RegisteredUser, _playlistName: string, _uuid: number) {

            this.playlistVideos = _playlistVideos;
            this.playlistUser = _playlistUser;
            this.playlistName = _playlistName;
            this.uuid = _uuid;
        }
    }
}