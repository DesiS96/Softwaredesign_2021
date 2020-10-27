namespace Aufgabe3 {

    export class Video {

        public videoTitle: string;
        public videoLengthInSecs: number;
        public videoSize: number;
        public videoAspectRatio: string;

        constructor(_videoTitle: string, _videoLengthInSecs: number, _videoSize: number, _videoAspactRatio: string) {

            this.videoTitle = _videoTitle;
            this.videoLengthInSecs = _videoLengthInSecs;
            this.videoSize = _videoSize;
            this.videoAspectRatio = _videoAspactRatio;
        }

        playVideo(_thisVideo: Video): void {

            console.log("Video wird abgespielt.");

        }
    }
}