namespace Aufgabe3 {

    export class User {

        playVideo(): void {

            console.log("Video wird abgespielt");
            //wie Video erkennen welches gespielt werden soll?
            //fehlt da ein Parameter im Diagramm?

        }
    }

    export class RegisteredUser extends User {

        public username: string;
        public birthdate: number;
        public userPhoto: Photo; 
        public userPlaylists: Playlist[];
        public userFavouriteVideos: Video[];

            constructor(_username: string, _birthdate: number, _userPhoto: Photo, _userPlaylists: Playlist[], _userFavouriteVideos: Video[]) {

                super();
                this.username = _username;
                this.birthdate = _birthdate;
                this.userPhoto = _userPhoto;
                this.userPlaylists = _userPlaylists;
                this.userFavouriteVideos = _userFavouriteVideos;

            }

            playVideo(): void {

                super.playVideo();

            }

            createPlaylists(_firstVideoForPlaylist: Video): Playlist {

                let playlistname: string = prompt("Wie soll die Playlist heißen?: ");
                let playlist: Playlist = new Playlist([], this, playlistname);

                this.addVideoToPlaylist(_firstVideoForPlaylist, playlist);

                return playlist;
            }

            addVideoToFavourites(_newFavouriteVideo: Video): void {

                this.userFavouriteVideos.push(_newFavouriteVideo);
            }

            uploadUserPhoto(_userPhoto: Photo): void {

                this.userPhoto = _userPhoto;
            }

            addVideoToPlaylist(_newPlaylistVideo: Video, _playlist: Playlist): void {

                let playlistVideo: PlaylistVideo = new PlaylistVideo(_newPlaylistVideo, this);

                _playlist.playlistVideos.push(playlistVideo);

            }
    }

    export class Uploader extends RegisteredUser {

        public uploaderChannel: Channel;
        public uploadedVideos: Video[];

        constructor(_username: string, _birthdate: number, _userPhoto: Photo, _userPlaylists: Playlist[], _userFavouriteVideos: Video[], _uploaderChannel: Channel, _uploadedVideos: Video[]) {

            super(_username, _birthdate, _userPhoto, _userPlaylists, _userFavouriteVideos);

            this.uploaderChannel = _uploaderChannel;
            this.uploadedVideos = _uploadedVideos;

        }

        uploadVideo(): void {

            let videoTitle: string = prompt("Welcher Titel soll das Video haben?: ");
            let videoLengthInSecs: number = parseInt(prompt("Wie lange dauert das Video?: "));
            let videoSize: number = parseInt(prompt("Wie groß ist das Video in Megabite?: "));
            let videoAspectRatio: string = prompt("Gib das Seitenverhältnis des Videos an: ");

            let videoToUpload: Video = new Video(videoTitle, videoLengthInSecs, videoSize, videoAspectRatio);

            this.uploadedVideos.push(videoToUpload);
        }

        createChannel(): void {

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

                channelPhoto = new Photo(filesize, filename, photoWidth, photoHeight);
            }
            else {

                if (answer != "2") {
                    console.log("Diese Nummer kenne ich nicht. Es wird nun corläfig das Nutzerbild verwendet.");
                }

                channelPhoto = this.userPhoto;
            }

            this.uploaderChannel =  new Channel(channelName, channelPhoto);
        }

        uploadPhotoToChannel(_channelPhoto: Photo): void {




        }

    }
}