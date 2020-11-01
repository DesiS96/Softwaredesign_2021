namespace Aufgabe3 {

    export class PlaylistVideo {

        public playlistVideo: Video;
        public registeredUser: RegisteredUser;
        public uuid: number;

        constructor(_playlistVideo: Video, _registeredUser: RegisteredUser, _uuid: number) {

            this.playlistVideo = _playlistVideo;
            this.registeredUser = _registeredUser;
            this.uuid = _uuid;

        }

    }
}