namespace Aufgabe4_NullPattern {

    //

    export class Uploader extends RegisteredUser {

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

    export class NullUploader extends NullRegisteredUser {

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