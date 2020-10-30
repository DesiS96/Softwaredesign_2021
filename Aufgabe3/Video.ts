namespace Aufgabe3 {

    export class Video {

        public videoTitle: string;
        public videoLengthInSecs: number;
        public videoSize: number;
        public videoAspectRatio: string;
        public uuid: number;

        constructor(_videoTitle: string, _videoLengthInSecs: number, _videoSize: number, _videoAspactRatio: string, _uuid: number) {

            this.videoTitle = _videoTitle;
            this.videoLengthInSecs = _videoLengthInSecs;
            this.videoSize = _videoSize;
            this.videoAspectRatio = _videoAspactRatio;
            this.uuid = _uuid;
        }

        playVideo(): void {

            console.log("Video wird abgespielt.");

        }
    }
}