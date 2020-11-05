import { Guid } from "guid-typescript";
import { Photo } from "./Photo";

export class Channel {

    private channelName: string;
    private channelPhoto: Photo;
    private guid: Guid = Guid.create();

    //setter
    public setChannelName(_name: string): void {
        this.channelName = _name;
    }
    public setChannelPhoto(_photo: Photo): void {
        this.channelPhoto = _photo;
    }

    //getter
    public getChannelName(): string {
        return this.channelName;
    }
    public getChannelPhoto(): Photo {
        return this.channelPhoto;
    }
    public getGuid(): Guid {
        return this.guid;
    }
}