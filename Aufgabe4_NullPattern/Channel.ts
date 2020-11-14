namespace Aufgabe4_NullPattern {

    export class Channel {

        private _channelName: string;
        private _channelPhoto: Photo;
        //private guid: string = Guid.create().toString();

        //setter
        set channelName(_name: string) {
            this._channelName = _name;
        }
        set channelPhoto(_photo: Photo) {
            this._channelPhoto = _photo;
        }

        //getter
        get channelName(): string {
            return this._channelName;
        }
        get channelPhoto(): Photo {
            return this._channelPhoto;
        }
    /*    public getGuid(): string {
            return this.guid;
        }*/
    }
}