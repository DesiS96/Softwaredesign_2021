namespace Aufgabe3 {

    export class PlaylistVideo {

        public playlistVideo: Video;
        public registeredUser: RegisteredUser;

        constructor(_playlistVideo: Video, _registeredUser: RegisteredUser) {

            this.playlistVideo = _playlistVideo;
            this.registeredUser = _registeredUser;

        }

    }
}