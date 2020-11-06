"use strict";
/*import { Photo } from "./Photo";
//import { Guid } from "guid-typescript";
import { Playlist } from "./Playlist";
import { Video } from "./Video";
import { PlaylistVideo } from "./PlaylistVideo";
import { Channel } from "./Channel";*/
var Aufgabe4;
/*import { Photo } from "./Photo";
//import { Guid } from "guid-typescript";
import { Playlist } from "./Playlist";
import { Video } from "./Video";
import { PlaylistVideo } from "./PlaylistVideo";
import { Channel } from "./Channel";*/
(function (Aufgabe4) {
    class User {
        playVideo() {
            console.log("Video wird abgespielt.");
        }
    }
    Aufgabe4.User = User;
    class RegisteredUser {
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
        get getUserPhoto() {
            return this._userPhoto;
        }
        get userplaylist() {
            return this._userPlaylist;
        }
        get userFavouriteVideos() {
            return this._userFavouriteVideos;
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
    Aufgabe4.RegisteredUser = RegisteredUser;
    class Uploader {
        //private guid: string = Guid.create().toString();
        //setter
        set uploaderChannel(_channel) {
            this._uploaderChannel = _channel;
        }
        set uploadedVideos(_videos) {
            this._uploadedVideos = _videos;
        }
        //getter
        get uploaderChannel() {
            return this._uploaderChannel;
        }
        get uploadedVideos() {
            return this._uploadedVideos;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/
        //Methoden
        playVideo() {
            console.log("Video abspielen");
        }
        uploadVideo() {
            //Video mehr oder weniger erstellen da kein Parameter?
            let videoTitle = prompt("Welcher Titel soll das Video haben?: ");
            let videoLengthInSecs = parseInt(prompt("Wie lange dauert das Video?: "));
            let videoSize = parseInt(prompt("Wie groß ist das Video in Megabite?: "));
            let videoAspectRatio = prompt("Gib das Seitenverhältnis des Videos an: ");
            //let videoToUpload: Video = new Video(videoTitle, videoLengthInSecs, videoSize, videoAspectRatio, Math.random());
            let videoToUpload;
            videoToUpload.videoTitle = videoTitle;
            videoToUpload.videoLength = videoLengthInSecs;
            videoToUpload.videoSize = videoSize;
            videoToUpload.aspectRatio = videoAspectRatio;
            this.uploadedVideos.push(videoToUpload);
        }
        createChannel() {
            //ist das schon mehr oder weniger die set Methode?
            let channelName = prompt("Wie soll der Kanal heißen?: ");
            let channelPhoto;
            console.log("Es muss noch ein Profilbild gewählt werden!");
            let filesize = parseInt(prompt("Wie groß ist das Bild?: "));
            let filename = prompt("Wie lautet der Dateiname des Bildes?: ");
            let photoWidth = parseInt(prompt("Wie breit ist das Bild?: "));
            let photoHeight = parseInt(prompt("Wie hoch ist das Bild?: "));
            //channelPhoto = new Photo(filesize, filename, photoWidth, photoHeight, Math.random());
            channelPhoto.filesize = filesize;
            channelPhoto.filename = filename;
            channelPhoto.photoWidth = photoWidth;
            channelPhoto.photoHeight = photoHeight;
            let newChannel;
            newChannel.channelName = channelName;
            newChannel.channelPhoto = channelPhoto;
            this.uploaderChannel = newChannel;
            //Kanal braucht ein Video
            this.uploadVideo();
        }
        addVideoToChannel(_video, _channel) {
            //Das gleiche wie uploadVideo nur mit fertigem Video?
            this._uploadedVideos.push(_video);
        }
        uploadPhotoToChannel(_channelPhoto) {
            this._uploaderChannel.channelPhoto = _channelPhoto;
        }
    }
    Aufgabe4.Uploader = Uploader;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=User.js.map