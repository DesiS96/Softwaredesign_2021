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
        
        //getter
        /*get _uuid(): number {

            return this.uuid;
        }

        get _playlistVideos(): PlaylistVideo[] {

            return this.playlistVideos;
        }

        get _playlistUser(): RegisteredUser {

            return this.playlistUser;
        }

        get _playlistName(): string {

            return this.playlistName;
        }

        //setter

        set _playlistVideos(_videos: PlaylistVideo[]) {

            this.playlistVideos = _videos;
        }

        set _playlistUser(_user: RegisteredUser) {

            this._playlistUser = _user;
        }

        set _playlistName(_name: string) {

            this.playlistName = _name;
        }

        set _uuid(_number: number) {

            this.uuid = _number;
        }*/


    }
}