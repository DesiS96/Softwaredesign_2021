"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    class User {
        playVideo(_videoToPlay) {
            console.log("Video wird abgespielt");
        }
    }
    Aufgabe3.User = User;
    class RegisteredUser extends User {
        /*constructor(_username: string, _birthdate: Date, _userphoto: Photo, _userPlaylist: Playlist[], _userFavouriteVideos: Video[]) {

                super();
                this.username = _username;
                this.birthdate = _birthdate;
                this.userPhoto = _userphoto;
                this.userPlaylists = _userPlaylist;
                this.userFavouriteVideos = _userFavouriteVideos;
        }*/
        //getters
        get _username() {
            return this.username;
        }
        get _birthdate() {
            return this.birthdate;
        }
        get _userPhoto() {
            return this.userPhoto;
        }
        get _userPlaylist() {
            return this.userPlaylists;
        }
        get _userFavouriteVideos() {
            return this.userFavouriteVideos;
        }
        get _uuid() {
            return this.uuid;
        }
        //setters
        set _birthdate(_date) {
            //Check if Date is Valid
            if (_date.year.toString.length > 4 || _date.year > 2020) {
                console.log("Error! Year is not valid");
            }
            else {
                if (_date.month.toString.length > 2 || _date.month > 12) {
                    console.log("Error! Month is not valid!");
                }
                else {
                    if (_date.day.toString.length > 2) {
                        console.log("Error! Day is not valid.");
                    }
                    else {
                        if ((_date.day == 31 && _date.month % 2 != 0) || (_date.day == 30 && _date.month % 2 == 0)) {
                            console.log("Error! Day is not valid.");
                        }
                        else {
                            this.birthdate = _date;
                        }
                    }
                }
            }
        }
        set _username(_name) {
            if (_name === "") {
                console.log("Fehler! Name muss aus mindestens einem Buchstaben bestehen!");
            }
            else {
                this.username = _name;
            }
        }
        set _userPhoto(_photo) {
            this.userPhoto = _photo;
        }
        set _userPlaylists(_playlists) {
            this.userPlaylists = _playlists;
        }
        set _userFavouriteVideos(_userFavouriteVideos) {
            this.userFavouriteVideos = _userFavouriteVideos;
        }
        set _uuid(_number) {
            this.uuid = _number;
        }
        createPlaylist(_firstVideoForPlaylist) {
            //eine PLaylist braucht mindestens ein Video, muss dann nicht demnach eigentlich ein Video mitgegeben werden?
            let playlistname = prompt("Wie soll die Playlist heißen?: ");
            let playlist = new Aufgabe3.Playlist([], this, playlistname, Math.random());
            this.addVideoToPlaylist(_firstVideoForPlaylist, playlist);
        }
        addVideoToFavourites(_newFavouriteVideo) {
            this.userFavouriteVideos.push(_newFavouriteVideo);
        }
        uploadUserPhoto(_userPhoto) {
            this.userPhoto = _userPhoto;
        }
        addVideoToPlaylist(_newPlaylistVideo, _playlist) {
            let playlistVideo = new Aufgabe3.PlaylistVideo(_newPlaylistVideo, this, Math.random());
            _playlist.playlistVideos.push(playlistVideo);
        }
        subscribteToChannel(_channel) {
            let subscription = new Aufgabe3.Subscription(this, _channel, Math.random());
            _channel.subscribers.push(subscription);
            this.subscriptions.push(subscription);
        }
    }
    Aufgabe3.RegisteredUser = RegisteredUser;
    class Uploader extends RegisteredUser {
        /*constructor(_username: string, _birthdate: Date, _userphoto: Photo, _userPlaylist: Playlist[], _userFavouriteVideos: Video[], _uploaderChannel: Channel, _uploadedVideos: Video[]) {

            super(_username, _birthdate, _userphoto, _userPlaylist, _userFavouriteVideos);

            this.uploaderChannel = _uploaderChannel;
            this.uploadedVideos = _uploadedVideos;

        }*/
        //werden get und set methoden vererbt?
        //getter
        get _uploaderChannel() {
            return this.uploaderChannel;
        }
        get _uploadedVideos() {
            return this.uploadedVideos;
        }
        //setter
        /*set _uploaderChannel(_channel: Channel = this.createChannel?) {

            this.uploaderChannel = _channel;
        }*/
        set _uploadedVideos(_videos) {
            this.uploadedVideos = _videos;
        }
        uploadVideo() {
            //Video mehr oder weniger erstellen da kein Parameter?
            let videoTitle = prompt("Welcher Titel soll das Video haben?: ");
            let videoLengthInSecs = parseInt(prompt("Wie lange dauert das Video?: "));
            let videoSize = parseInt(prompt("Wie groß ist das Video in Megabite?: "));
            let videoAspectRatio = prompt("Gib das Seitenverhältnis des Videos an: ");
            let videoToUpload = new Aufgabe3.Video(videoTitle, videoLengthInSecs, videoSize, videoAspectRatio, Math.random());
            this.uploadedVideos.push(videoToUpload);
        }
        createChannel() {
            //ist das schon mehr oder weniger die set Methode?
            let channelName = prompt("Wie soll der Kanal heißen?: ");
            let channelPhoto;
            console.log("Es muss noch ein Profilbild gewählt werden. Möchtest du ein neues hochladen oder einfach dein Nutzerbild benutzen?");
            console.log("1: neues Bild hochladen");
            console.log("2: Nutzerbild verwenden");
            let answer = prompt();
            if (answer == "1") {
                let filesize = parseInt(prompt("Wie groß ist das Bild?: "));
                let filename = prompt("Wie lautet der Dateiname des Bildes?: ");
                let photoWidth = parseInt(prompt("Wie breit ist das Bild?: "));
                let photoHeight = parseInt(prompt("Wie hoch ist das Bild?: "));
                //Math.random für uuid?
                channelPhoto = new Aufgabe3.Photo(filesize, filename, photoWidth, photoHeight, Math.random());
            }
            else {
                if (answer != "2") {
                    console.log("Unbekannte Nummer. Es wird nun vorläfig das Nutzerbild verwendet.");
                }
                channelPhoto = this.userPhoto;
            }
            this.uploaderChannel = new Aufgabe3.Channel(channelName, channelPhoto, [], Math.random());
            //Kanal braucht ein Video
            this.uploadVideo();
        }
        addVideoToChannel(_video, _channel) {
            //Das gleiche wie uploadVideo nur mit fertigem Video?
            this.uploadedVideos.push(_video);
        }
        uploadPhotoToChannel(_channelPhoto) {
            this.uploaderChannel.channelPhoto = _channelPhoto;
        }
    }
    Aufgabe3.Uploader = Uploader;
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=User.js.map