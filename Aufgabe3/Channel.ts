namespace Aufgabe3 {

    export class Channel {

        public channelName: string;
        public channelPhoto: Photo;
        public subscribers: Subscription[];

        constructor(_channelName: string, _channelPhoto: Photo, _subscribers: Subscription[]) {

            this.channelName = _channelName;
            this.channelPhoto = _channelPhoto;
            this.subscribers = _subscribers;

        }
    }
}