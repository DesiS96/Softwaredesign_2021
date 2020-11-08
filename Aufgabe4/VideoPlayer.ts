namespace Aufgabe4 {

    export class VideoPlayer {

        private static videoPlayer: VideoPlayer;

        private constructor() {}

        static getInstance(): VideoPlayer {
           // return this.videoPlayer;
            if (!VideoPlayer.videoPlayer) {
            VideoPlayer.videoPlayer = new VideoPlayer();
            }
        
            return VideoPlayer.videoPlayer;
        }


        public playVideo(_video: Video): void {
            _video.playVideo();
        }
    }
}