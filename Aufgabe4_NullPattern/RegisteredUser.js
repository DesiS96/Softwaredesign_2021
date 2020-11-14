"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    class RegisteredUser extends Aufgabe4_NullPattern.AbstractUser {
        //private guid: string = Guid.create().toString();
        //setter
        set username(_name) {
            this._username = _name;
        }
        set birthdate(_date) {
            this._birthdate = _date;
        }
        set userPhoto(_photo) {
            this._userPhoto = _photo;
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
        /*get getUserPhoto(): Photo {
            return this._userPhoto;
        }*/
        get userplaylist() {
            return this._userPlaylist;
        }
        get userFavouriteVideos() {
            return this._userFavouriteVideos;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/
        getPhoto() {
            //Override getPhoto von AbstractUser
            return this._userPhoto;
        }
        isNil() {
            return false;
        }
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
    Aufgabe4_NullPattern.RegisteredUser = RegisteredUser;
    class NullRegisteredUser extends Aufgabe4_NullPattern.AbstractUser {
        //private guid: string = Guid.create().toString();
        //setter
        set username(_name) {
            this._username = _name;
        }
        set birthdate(_date) {
            this._birthdate = _date;
        }
        set userPhoto(_photo) {
            this._userPhoto = _photo;
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
        /*get getUserPhoto(): Photo {
            return this._userPhoto;
        }*/
        get userplaylist() {
            return this._userPlaylist;
        }
        get userFavouriteVideos() {
            return this._userFavouriteVideos;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/
        getPhoto() {
            let defaultPhoto;
            defaultPhoto.filename = "default";
            defaultPhoto.filesize = 200;
            defaultPhoto.photoHeight = 100;
            defaultPhoto.photoWidth = 100;
            return defaultPhoto;
        }
        isNil() {
            return true;
        }
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
    Aufgabe4_NullPattern.NullRegisteredUser = NullRegisteredUser;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=RegisteredUser.js.map