System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, User, RegisteredUser, Uploader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            User = class User {
                playVideo() {
                    console.log("Video wird abgespielt.");
                }
            };
            exports_1("User", User);
            RegisteredUser = class RegisteredUser {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create().toString();
                }
                //setter
                setUsername(_name) {
                    this.username = _name;
                }
                setBirthdate(_date) {
                    this.birthdate = _date;
                }
                setUserPhoto(_photo) {
                    this.userPhoto = _photo;
                }
                setUserplaylist(_playlist) {
                    this.userPlaylist = _playlist;
                }
                setUserFavouriteVideos(_favouriteVideos) {
                    this.userFavouriteVideos = _favouriteVideos;
                }
                //getter
                getUsername() {
                    return this.username;
                }
                getBirthdate() {
                    return this.birthdate;
                }
                getUserPhoto() {
                    return this.userPhoto;
                }
                getUserplaylist() {
                    return this.userPlaylist;
                }
                getUserFavouriteVideos() {
                    return this.userFavouriteVideos;
                }
                getGuid() {
                    return this.guid;
                }
                playVideo() {
                    console.log("Video wird abgespielt");
                }
                createPlaylist(_firstVideoForPlaylist) {
                    //eine PLaylist braucht mindestens ein Video?
                    let playlistname = prompt("Wie soll die Playlist heißen?: ");
                    let playlist;
                    playlist.setPlaylistName(playlistname);
                    playlist.setPlaylistUser(this);
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
                    playlistVideo.setPlaylistVideo(_newPlaylistVideo);
                    playlistVideo.setRegisteredUser(this);
                    _playlist.getPlaylistVideos().push(playlistVideo);
                }
            };
            exports_1("RegisteredUser", RegisteredUser);
            Uploader = class Uploader {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create().toString();
                }
                //setter
                setUploaderChannel(_channel) {
                    this.uploaderChannel = _channel;
                }
                setUploadedVideos(_videos) {
                    this.uploadedVideos = _videos;
                }
                //getter
                getUploaderChannel() {
                    return this.uploaderChannel;
                }
                getUploadedVideos() {
                    return this.uploadedVideos;
                }
                getGuid() {
                    return this.guid;
                }
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
                    videoToUpload.setVideoTitle(videoTitle);
                    videoToUpload.setVideoLength(videoLengthInSecs);
                    videoToUpload.setVideoSize(videoSize);
                    videoToUpload.setAspectRatio(videoAspectRatio);
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
                    channelPhoto.setFilesize(filesize);
                    channelPhoto.setFilename(filename);
                    channelPhoto.setPhotoWidth(photoWidth);
                    channelPhoto.setPhotoHeight(photoHeight);
                    let newChannel;
                    newChannel.setChannelName(channelName);
                    newChannel.setChannelPhoto(channelPhoto);
                    this.setUploaderChannel(newChannel);
                    //Kanal braucht ein Video
                    this.uploadVideo();
                }
                addVideoToChannel(_video, _channel) {
                    //Das gleiche wie uploadVideo nur mit fertigem Video?
                    this.uploadedVideos.push(_video);
                }
                uploadPhotoToChannel(_channelPhoto) {
                    this.uploaderChannel.setChannelPhoto(_channelPhoto);
                }
            };
            exports_1("Uploader", Uploader);
        }
    };
});
//# sourceMappingURL=User.js.map