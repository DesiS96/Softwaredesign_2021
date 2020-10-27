namespace Aufgabe3 {

    export class Channel {

        public channelName: string;
        public channelPhoto: Photo;

        constructor(_channelName: string, _channelPhoto: Photo) {

            this.channelName = _channelName;
            this.channelPhoto = _channelPhoto;

        }
    }
}