//import { Guid } from "guid-typescript";

namespace Aufgabe4 {

    export class Video {

        private _videoTitle: string;
        private _videoLengthInSecs: number;
        private _videoSize: number;
        private _videoAspectRatio: string;
        //private guid: string = Guid.create().toString();

        //setter
        set videoTitle(_title: string) {
            this._videoTitle = _title;
        }
        set videoLength(_videoLength: number) {
            this._videoLengthInSecs = _videoLength;
        }
        set videoSize(_videoSize: number) {
            this._videoSize = _videoSize;
        }
        set aspectRatio(_aspectRatio: string) {
            this._videoAspectRatio = _aspectRatio;
        }

        //getter
        get videoTitle(): string {
            return this._videoTitle;
        }
        get videoLength(): number {
            return this._videoLengthInSecs;
        }
        get videoSize(): number {
            return this._videoSize;
        }
        get aspectRatio(): string {
            return this._videoAspectRatio;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/

        playVideo(): void {

            console.log("Video wird abgespielt.");

        }
    }
}