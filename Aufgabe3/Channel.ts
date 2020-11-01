namespace Aufgabe3 {

    export class Channel {

        public channelName: string;
        public channelPhoto: Photo;
        public subscribers: Subscription[];
        public uuid: number;

        constructor(_channelName: string, _channelPhoto: Photo, _subscribers: Subscription[], _uuid: number) {

            this.channelName = _channelName;
            this.channelPhoto = _channelPhoto;
            this.subscribers = _subscribers;
            this.uuid = _uuid;

        }
    }
}