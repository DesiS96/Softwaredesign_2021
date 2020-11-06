/*import { Photo } from "./Photo";
//import { Guid } from "guid-typescript";
import { Playlist } from "./Playlist";
import { Video } from "./Video";
import { PlaylistVideo } from "./PlaylistVideo";
import { Channel } from "./Channel";*/

namespace Aufgabe4 {

    export interface UserInterface {

        playVideo(): void;
    }

    export class User implements UserInterface {

        playVideo(): void {

            console.log("Video wird abgespielt.");
        }
    }

    export class RegisteredUser implements UserInterface {

        private _username: string;
        private _birthdate: Date;
        private _userPhoto: Photo;
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
        set userPhoto(_photo: Photo) {
            this._userPhoto = _photo;
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
        get getUserPhoto(): Photo {
            return this._userPhoto;
        }
        get userplaylist(): Playlist[] {
            return this._userPlaylist;
        }
        get userFavouriteVideos(): Video[] {
            return this._userFavouriteVideos;
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

    export class Uploader implements UserInterface {

        private _uploaderChannel: Channel;
        private _uploadedVideos: Video[];
        //private guid: string = Guid.create().toString();

        //setter

        set uploaderChannel(_channel: Channel) {
            this._uploaderChannel = _channel;
        }
        set uploadedVideos(_videos: Video[]) {
            this._uploadedVideos = _videos;
        }

        //getter

        get uploaderChannel(): Channel {
            return this._uploaderChannel;
        }
        get uploadedVideos(): Video[] {
            return this._uploadedVideos;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/

        //Methoden

        playVideo(): void {
            console.log("Video abspielen");

        }

        uploadVideo(): void {
            //Video mehr oder weniger erstellen da kein Parameter?

            let videoTitle: string = prompt("Welcher Titel soll das Video haben?: ");
            let videoLengthInSecs: number = parseInt(prompt("Wie lange dauert das Video?: "));
            let videoSize: number = parseInt(prompt("Wie groß ist das Video in Megabite?: "));
            let videoAspectRatio: string = prompt("Gib das Seitenverhältnis des Videos an: ");

            //let videoToUpload: Video = new Video(videoTitle, videoLengthInSecs, videoSize, videoAspectRatio, Math.random());
            let videoToUpload: Video;
            videoToUpload.videoTitle = videoTitle;
            videoToUpload.videoLength = videoLengthInSecs;
            videoToUpload.videoSize = videoSize;
            videoToUpload.aspectRatio = videoAspectRatio;

            this.uploadedVideos.push(videoToUpload);
        }

        createChannel(): void {

            //ist das schon mehr oder weniger die set Methode?

            let channelName: string = prompt("Wie soll der Kanal heißen?: ");
            let channelPhoto: Photo;

            console.log("Es muss noch ein Profilbild gewählt werden!");

            let filesize: number =  parseInt(prompt("Wie groß ist das Bild?: "));
            let filename: string = prompt("Wie lautet der Dateiname des Bildes?: ");
            let photoWidth: number = parseInt(prompt("Wie breit ist das Bild?: "));
            let photoHeight: number =  parseInt(prompt("Wie hoch ist das Bild?: "));

            //channelPhoto = new Photo(filesize, filename, photoWidth, photoHeight, Math.random());
            channelPhoto.filesize = filesize;
            channelPhoto.filename = filename;
            channelPhoto.photoWidth = photoWidth;
            channelPhoto.photoHeight = photoHeight;

            let newChannel: Channel;

            newChannel.channelName = channelName;
            newChannel.channelPhoto = channelPhoto;

            this.uploaderChannel = newChannel;

            //Kanal braucht ein Video
            this.uploadVideo();
        }
        addVideoToChannel(_video: Video, _channel: Channel): void { //warum die Kanalangabe, man hat doch nur einen Kanal? Auf Fremden Kanal zugreifen?
            
            //Das gleiche wie uploadVideo nur mit fertigem Video?
            this._uploadedVideos.push(_video);
        }

        uploadPhotoToChannel(_channelPhoto: Photo): void {

            this._uploaderChannel.channelPhoto = _channelPhoto;
        }
            
    }
}
