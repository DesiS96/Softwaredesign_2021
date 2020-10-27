"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    class User {
        playVideo() {
            console.log("Video wird abgespielt");
            //wie Video erkennen welches gespielt werden soll?
            //fehlt da ein Parameter im Diagramm?
        }
    }
    Aufgabe3.User = User;
    class RegisteredUser extends User {
        constructor(_username, _birthdate, _userPhoto, _userPlaylists, _userFavouriteVideos) {
            super();
            this.username = _username;
            this.birthdate = _birthdate;
            this.userPhoto = _userPhoto;
            this.userPlaylists = _userPlaylists;
            this.userFavouriteVideos = _userFavouriteVideos;
        }
        playVideo() {
            super.playVideo();
        }
        createPlaylists(_firstVideoForPlaylist) {
            let playlistname = prompt("Wie soll die Playlist heißen?: ");
            let playlist = new Aufgabe3.Playlist([], this, playlistname);
            this.addVideoToPlaylist(_firstVideoForPlaylist, playlist);
            return playlist;
        }
        addVideoToFavourites(_newFavouriteVideo) {
            this.userFavouriteVideos.push(_newFavouriteVideo);
        }
        uploadUserPhoto(_userPhoto) {
            this.userPhoto = _userPhoto;
        }
        addVideoToPlaylist(_newPlaylistVideo, _playlist) {
            let playlistVideo = new Aufgabe3.PlaylistVideo(_newPlaylistVideo, this);
            _playlist.playlistVideos.push(playlistVideo);
        }
    }
    Aufgabe3.RegisteredUser = RegisteredUser;
    class Uploader extends RegisteredUser {
        constructor(_username, _birthdate, _userPhoto, _userPlaylists, _userFavouriteVideos, _uploaderChannel, _uploadedVideos) {
            super(_username, _birthdate, _userPhoto, _userPlaylists, _userFavouriteVideos);
            this.uploaderChannel = _uploaderChannel;
            this.uploadedVideos = _uploadedVideos;
        }
        uploadVideo() {
            let videoTitle = prompt("Welcher Titel soll das Video haben?: ");
            let videoLengthInSecs = parseInt(prompt("Wie lange dauert das Video?: "));
            let videoSize = parseInt(prompt("Wie groß ist das Video in Megabite?: "));
            let videoAspectRatio = prompt("Gib das Seitenverhältnis des Videos an: ");
            let videoToUpload = new Aufgabe3.Video(videoTitle, videoLengthInSecs, videoSize, videoAspectRatio);
            this.uploadedVideos.push(videoToUpload);
        }
        createChannel() {
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
                channelPhoto = new Aufgabe3.Photo(filesize, filename, photoWidth, photoHeight);
            }
            else {
                if (answer != "2") {
                    console.log("Diese Nummer kenne ich nicht. Es wird nun corläfig das Nutzerbild verwendet.");
                }
                channelPhoto = this.userPhoto;
            }
            this.uploaderChannel = new Aufgabe3.Channel(channelName, channelPhoto);
        }
        uploadPhotoToChannel(_channelPhoto) {
        }
    }
    Aufgabe3.Uploader = Uploader;
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=User.js.map