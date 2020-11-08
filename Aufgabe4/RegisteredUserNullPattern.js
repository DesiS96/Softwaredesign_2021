"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    class NullRegisteredUser extends Aufgabe4.AbstractUser {
        //private guid: string = Guid.create().toString();
        //setter
        set username(_name) {
            this._username = _name;
        }
        set birthdate(_date) {
            this._birthdate = _date;
        }
        set setUserPhoto(_photo) {
            this.userPhoto = _photo;
        }
        set userplaylist(_playlist) {
            this._userPlaylist = _playlist;
        }
        set userFavouriteVideos(_favouriteVideos) {
            this._userFavouriteVideos = _favouriteVideos;
        }
        //getter
        get username() {
            return this._username;
        }
        get birthdate() {
            return this._birthdate;
        }
        get userFavouriteVideos() {
            return this._userFavouriteVideos;
        }
        get userplaylist() {
            return this._userPlaylist;
        }
        isNil() {
            super.isNil();
            return true;
        }
        getPhoto() {
            super.getPhoto();
            let defaultPhoto;
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
        playVideo() {
            console.log("Video wird abgespielt");
        }
        createPlaylist(_firstVideoForPlaylist) {
            //eine PLaylist braucht mindestens ein Video?
            let playlistname = prompt("Wie soll die Playlist heißen?: ");
            let playlist;
            playlist.playlistName = playlistname;
            playlist.playlistUser = this;
            this.addVideoToPlaylist(_firstVideoForPlaylist, playlist);
        }
        addVideoToFavourites(_newFavouriteVideo) {
            this.userFavouriteVideos.push(_newFavouriteVideo);
        }
        uploadUserPhoto(_userPhoto) {
            this.userPhoto = _userPhoto;
        }
        addVideoToPlaylist(_newPlaylistVideo, _playlist) {
            let playlistVideo;
            playlistVideo.playlistVideo = _newPlaylistVideo;
            playlistVideo.registeredUser = this;
            _playlist.playlistVideos.push(playlistVideo);
        }
    }
    Aufgabe4.NullRegisteredUser = NullRegisteredUser;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=RegisteredUserNullPattern.js.map