import { Guid } from "guid-typescript";

export class Video {

    private videoTitle: string;
    private videoLengthInSecs: number;
    private videoSize: number;
    private videoAspectRatio: string;
    private guid: string = Guid.create().toString();

    //setter
    public setVideoTitle(_title: string): void {
        this.videoTitle = _title;
    }
    public setVideoLength(_videoLength: number): void {
        this.videoLengthInSecs = _videoLength;
    }
    public setVideoSize(_videoSize: number): void {
        this.videoSize = _videoSize;
    }
    public setAspectRatio(_aspectRatio: string): void {
        this.videoAspectRatio = _aspectRatio;
    }

    //getter
    public getVideoTitle(): string {
        return this.videoTitle;
    }
    public getVideoLength(): number {
        return this.videoLengthInSecs;
    }
    public getVideoSize(): number {
        return this.videoSize;
    }
    public getAspectRatio(): string {
        return this.videoAspectRatio;
    }
    public getGuid(): string {
        return this.guid;
    }

    playVideo(): void {

        console.log("Video wird abgespielt.");

    }
}