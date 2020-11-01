"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    class Video {
        constructor(_videoTitle, _videoLengthInSecs, _videoSize, _videoAspactRatio, _uuid) {
            this.videoTitle = _videoTitle;
            this.videoLengthInSecs = _videoLengthInSecs;
            this.videoSize = _videoSize;
            this.videoAspectRatio = _videoAspactRatio;
            this.uuid = _uuid;
        }
        playVideo() {
            console.log("Video wird abgespielt.");
        }
    }
    Aufgabe3.Video = Video;
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Video.js.map