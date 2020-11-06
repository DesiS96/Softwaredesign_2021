"use strict";
//import { Guid } from "guid-typescript";
var Aufgabe4;
//import { Guid } from "guid-typescript";
(function (Aufgabe4) {
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
    Aufgabe4.Video = Video;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Video.js.map