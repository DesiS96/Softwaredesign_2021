"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    class Video {
        //private guid: string = Guid.create().toString();
        //setter
        set videoTitle(_title) {
            this._videoTitle = _title;
        }
        set videoLength(_videoLength) {
            this._videoLengthInSecs = _videoLength;
        }
        set videoSize(_videoSize) {
            this._videoSize = _videoSize;
        }
        set aspectRatio(_aspectRatio) {
            this._videoAspectRatio = _aspectRatio;
        }
        //getter
        get videoTitle() {
            return this._videoTitle;
        }
        get videoLength() {
            return this._videoLengthInSecs;
        }
        get videoSize() {
            return this._videoSize;
        }
        get aspectRatio() {
            return this._videoAspectRatio;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/
        playVideo() {
            console.log("Video wird abgespielt.");
        }
    }
    Aufgabe4_NullPattern.Video = Video;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=Video.js.map