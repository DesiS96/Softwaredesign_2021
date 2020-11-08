"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    class VideoPlayer {
        constructor() { }
        static getInstance() {
            // return this.videoPlayer;
            if (!VideoPlayer.videoPlayer) {
                VideoPlayer.videoPlayer = new VideoPlayer();
            }
            return VideoPlayer.videoPlayer;
        }
        playVideo(_video) {
            _video.playVideo();
        }
    }
    Aufgabe4.VideoPlayer = VideoPlayer;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=VideoPlayer.js.map