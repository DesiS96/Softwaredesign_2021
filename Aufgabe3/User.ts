namespace Aufgabe3 {

    export class User {

        playVideo(_videoToPlay: Video): void {

            console.log("Video wird abgespielt");

        }
    }

    export class RegisteredUser extends User {

        protected username: string;
        protected birthdate: Date;
        protected userPhoto: Photo; 
        protected userPlaylists: Playlist[];
        protected userFavouriteVideos: Video[];
        protected subscriptions: Subscription[];
        protected uuid: number;

        /*constructor(_username: string, _birthdate: Date, _userphoto: Photo, _userPlaylist: Playlist[], _userFavouriteVideos: Video[]) {

                super();
                this.username = _username;
                this.birthdate = _birthdate;
                this.userPhoto = _userphoto;
                this.userPlaylists = _userPlaylist;
                this.userFavouriteVideos = _userFavouriteVideos;
        }*/
        //getters
        get _username(): string {

            return this.username;
        }

        get _birthdate(): Date {

            return this.birthdate;
        }

        get _userPhoto(): Photo {

            return this.userPhoto;
        }

        get _userPlaylist(): Playlist[] {

            return this.userPlaylists;
        }

        get _userFavouriteVideos(): Video[] {

            return this.userFavouriteVideos;
        }

        get _uuid(): number {

            return this.uuid;
        }

        //setters
        set _birthdate(_date: Date) {
            
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

        set _username(_name: string) {

            if (_name === "") {
                console.log("Fehler! Name muss aus mindestens einem Buchstaben bestehen!");
            }
            else {

                this.username = _name;
            }

        }
        
        set _userPhoto(_photo: Photo) {

            this.userPhoto = _photo;
        }

        set _userPlaylists(_playlists: Playlist[]) {

            this.userPlaylists = _playlists;
        }

        set _userFavouriteVideos(_userFavouriteVideos: Video[]) {

            this.userFavouriteVideos = _userFavouriteVideos;
        }

        set _uuid(_number: number) {

            this.uuid = _number;
        }

        createPlaylist(_firstVideoForPlaylist: Video): void {

            //eine PLaylist braucht mindestens ein Video, muss dann nicht demnach eigentlich ein Video mitgegeben werden?

            let playlistname: string = prompt("Wie soll die Playlist heißen?: ");
            let playlist: Playlist = new Playlist([], this, playlistname, Math.random());

            this.addVideoToPlaylist(_firstVideoForPlaylist, playlist);

        }

        addVideoToFavourites(_newFavouriteVideo: Video): void {

            this.userFavouriteVideos.push(_newFavouriteVideo);
        }

        uploadUserPhoto(_userPhoto: Photo): void {

            this.userPhoto = _userPhoto;
        }

        addVideoToPlaylist(_newPlaylistVideo: Video, _playlist: Playlist): void {

            let playlistVideo: PlaylistVideo = new PlaylistVideo(_newPlaylistVideo, this, Math.random());

            _playlist.playlistVideos.push(playlistVideo);

        }

        subscribteToChannel(_channel: Channel): void {

            let subscription: Subscription = new Subscription(this, _channel, Math.random());

            _channel.subscribers.push(subscription);

            this.subscriptions.push(subscription);

        }
    }

    export class Uploader extends RegisteredUser {

        private uploaderChannel: Channel;
        private uploadedVideos: Video[];
        
        /*constructor(_username: string, _birthdate: Date, _userphoto: Photo, _userPlaylist: Playlist[], _userFavouriteVideos: Video[], _uploaderChannel: Channel, _uploadedVideos: Video[]) {

            super(_username, _birthdate, _userphoto, _userPlaylist, _userFavouriteVideos);

            this.uploaderChannel = _uploaderChannel;
            this.uploadedVideos = _uploadedVideos;

        }*/

        //werden get und set methoden vererbt?
        //getter
        
        get _uploaderChannel(): Channel {

            return this.uploaderChannel;
        }

        get _uploadedVideos(): Video[] {

            return this.uploadedVideos;
        }

        //setter

        /*set _uploaderChannel(_channel: Channel = this.createChannel?) {

            this.uploaderChannel = _channel;
        }*/
        set _uploadedVideos(_videos: Video[]) {

            this.uploadedVideos = _videos;

        }

        uploadVideo(): void {
            //Video mehr oder weniger erstellen da kein Parameter?

            let videoTitle: string = prompt("Welcher Titel soll das Video haben?: ");
            let videoLengthInSecs: number = parseInt(prompt("Wie lange dauert das Video?: "));
            let videoSize: number = parseInt(prompt("Wie groß ist das Video in Megabite?: "));
            let videoAspectRatio: string = prompt("Gib das Seitenverhältnis des Videos an: ");

            let videoToUpload: Video = new Video(videoTitle, videoLengthInSecs, videoSize, videoAspectRatio, Math.random());

            this.uploadedVideos.push(videoToUpload);
        }
        createChannel(): void {

            //ist das schon mehr oder weniger die set Methode?

            let channelName: string = prompt("Wie soll der Kanal heißen?: ");
            let channelPhoto: Photo;

            console.log("Es muss noch ein Profilbild gewählt werden. Möchtest du ein neues hochladen oder einfach dein Nutzerbild benutzen?");
            console.log("1: neues Bild hochladen");
            console.log("2: Nutzerbild verwenden");

            let answer: string = prompt();

            if (answer == "1") {

                let filesize: number =  parseInt(prompt("Wie groß ist das Bild?: "));
                let filename: string = prompt("Wie lautet der Dateiname des Bildes?: ");
                let photoWidth: number = parseInt(prompt("Wie breit ist das Bild?: "));
                let photoHeight: number =  parseInt(prompt("Wie hoch ist das Bild?: "));

                //Math.random für uuid?

                channelPhoto = new Photo(filesize, filename, photoWidth, photoHeight, Math.random());
            }
            else {

                if (answer != "2") {
                    console.log("Unbekannte Nummer. Es wird nun vorläfig das Nutzerbild verwendet.");
                }

                channelPhoto = this.userPhoto;
            }

            this.uploaderChannel =  new Channel(channelName, channelPhoto, [], Math.random());

            //Kanal braucht ein Video
            this.uploadVideo();
        }
        addVideoToChannel(_video: Video, _channel: Channel): void { //warum die Kanalangabe, man hat doch nur einen Kanal? Auf Fremden Kanal zugreifen?
            
            //Das gleiche wie uploadVideo nur mit fertigem Video?
            this.uploadedVideos.push(_video);
        }

        uploadPhotoToChannel(_channelPhoto: Photo): void {

            this.uploaderChannel.channelPhoto = _channelPhoto;
        }
    }
}