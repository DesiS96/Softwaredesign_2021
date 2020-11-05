import { Photo } from "./Photo";
import { Guid } from "guid-typescript";
import { Playlist } from "./Playlist";
import { Video } from "./Video";
import { PlaylistVideo } from "./PlaylistVideo";
import { Channel } from "./Channel";


export interface UserInterface {

    playVideo(): void;
}

export class User implements UserInterface {

    playVideo(): void {

        console.log("Video wird abgespielt.");
    }
}

export class RegisteredUser implements UserInterface {

    private username: string;
    private birthdate: Date;
    private userPhoto: Photo;
    private userPlaylist: Playlist[];
    private userFavouriteVideos: Video[];
    private guid: string = Guid.create().toString();

    //setter

    public setUsername(_name: string): void {
        this.username = _name;
    }
    public setBirthdate(_date: Date): void {
        this.birthdate = _date;
    }
    public setUserPhoto(_photo: Photo): void {
        this.userPhoto = _photo;
    }
    public setUserplaylist(_playlist: Playlist[]): void {
        this.userPlaylist = _playlist;
    }
    public setUserFavouriteVideos(_favouriteVideos: Video[]): void {
        this.userFavouriteVideos = _favouriteVideos;
    }
    
    //getter

    public getUsername(): string {
        return this.username;
    }
    public getBirthdate(): Date {
        return this.birthdate;
    }
    public getUserPhoto(): Photo {
        return this.userPhoto;
    }
    public getUserplaylist(): Playlist[] {
        return this.userPlaylist;
    }
    public getUserFavouriteVideos(): Video[] {
        return this.userFavouriteVideos;
    }
    public getGuid(): string {
        return this.guid;
    }

    playVideo(): void {

        console.log("Video wird abgespielt");
    }

    createPlaylist(_firstVideoForPlaylist: Video): void {

        //eine PLaylist braucht mindestens ein Video?

        let playlistname: string = prompt("Wie soll die Playlist heißen?: ");

        let playlist: Playlist;
        playlist.setPlaylistName(playlistname);
        playlist.setPlaylistUser(this);

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
        playlistVideo.setPlaylistVideo(_newPlaylistVideo);
        playlistVideo.setRegisteredUser(this);

        _playlist.getPlaylistVideos().push(playlistVideo);

    }
}

export class Uploader implements UserInterface {

    private uploaderChannel: Channel;
    private uploadedVideos: Video[];
    private guid: string = Guid.create().toString();

    //setter

    public setUploaderChannel(_channel: Channel): void {
        this.uploaderChannel = _channel;
    }
    public setUploadedVideos(_videos: Video[]): void {
        this.uploadedVideos = _videos;
    }

    //getter

    public getUploaderChannel(): Channel {
        return this.uploaderChannel;
    }
    public getUploadedVideos(): Video[] {
        return this.uploadedVideos;
    }
    public getGuid(): string {
        return this.guid;
    }

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
        videoToUpload.setVideoTitle(videoTitle);
        videoToUpload.setVideoLength(videoLengthInSecs);
        videoToUpload.setVideoSize(videoSize);
        videoToUpload.setAspectRatio(videoAspectRatio);

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
        channelPhoto.setFilesize(filesize);
        channelPhoto.setFilename(filename);
        channelPhoto.setPhotoWidth(photoWidth);
        channelPhoto.setPhotoHeight(photoHeight);

        let newChannel: Channel;

        newChannel.setChannelName(channelName);
        newChannel.setChannelPhoto(channelPhoto);

        this.setUploaderChannel(newChannel);

        //Kanal braucht ein Video
        this.uploadVideo();
    }
    addVideoToChannel(_video: Video, _channel: Channel): void { //warum die Kanalangabe, man hat doch nur einen Kanal? Auf Fremden Kanal zugreifen?
        
        //Das gleiche wie uploadVideo nur mit fertigem Video?
        this.uploadedVideos.push(_video);
    }

    uploadPhotoToChannel(_channelPhoto: Photo): void {

        this.uploaderChannel.setChannelPhoto(_channelPhoto);
    }
        
}
