"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    //
    class Uploader extends Aufgabe4_NullPattern.RegisteredUser {
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
    Aufgabe4_NullPattern.Uploader = Uploader;
    class NullUploader extends Aufgabe4_NullPattern.NullRegisteredUser {
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
    Aufgabe4_NullPattern.NullUploader = NullUploader;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=Uploader.js.map