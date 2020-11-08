namespace Aufgabe4 {


    export class NullRegisteredUser extends AbstractUser {

        private _username: string;
        private _birthdate: Date;
        private _userPlaylist: Playlist[];
        private _userFavouriteVideos: Video[];
        //private guid: string = Guid.create().toString();

        //setter

        set username(_name: string) {
            this._username = _name;
        }
        set birthdate(_date: Date) {
            this._birthdate = _date;
        }
        set setUserPhoto(_photo: Photo) {
            this.userPhoto = _photo;
        }
        set userplaylist(_playlist: Playlist[]) {
            this._userPlaylist = _playlist;
        }
        set userFavouriteVideos(_favouriteVideos: Video[]) {
            this._userFavouriteVideos = _favouriteVideos;
        }
        
        //getter

        get username(): string {
            return this._username;
        }
        get birthdate(): Date {
            return this._birthdate;
        }
        get userFavouriteVideos(): Video[] {
            return this._userFavouriteVideos;
        }
        get userplaylist(): Playlist[] {
            return this._userPlaylist;
        }

        isNil(): boolean {

            super.isNil();
            return true;

        }

        getPhoto(): Photo {

            super.getPhoto();
            let defaultPhoto: Photo;
            defaultPhoto.filename = "default";
            defaultPhoto.filesize = 200;
            defaultPhoto.photoWidth = 300;
            defaultPhoto.photoHeight = 300;

            console.log("Photo is not available");
            return defaultPhoto;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/

        playVideo(): void {

            console.log("Video wird abgespielt");
        }

        createPlaylist(_firstVideoForPlaylist: Video): void {

            //eine PLaylist braucht mindestens ein Video?

            let playlistname: string = prompt("Wie soll die Playlist heißen?: ");

            let playlist: Playlist;
            playlist.playlistName = playlistname;
            playlist.playlistUser = this;

            this.addVideoToPlaylist(_firstVideoForPlaylist, playlist);

        }

        addVideoToFavourites(_newFavouriteVideo: Video): void {

            this.userFavouriteVideos.push(_newFavouriteVideo);
        }

        uploadUserPhoto(_userPhoto: Photo): void {

            this.userPhoto = _userPhoto;
        }

        addVideoToPlaylist(_newPlaylistVideo: Video, _playlist: Playlist): void {

            let playlistVideo: PlaylistVideo;
            playlistVideo.playlistVideo = _newPlaylistVideo;
            playlistVideo.registeredUser = this;

            _playlist.playlistVideos.push(playlistVideo);

        }
    }







}