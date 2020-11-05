import { Guid } from "guid-typescript";

export class Photo {

    private filesize: number;
    private filename: string;
    private photoWidth: number;
    private photoHeight: number;
    private guid: Guid = Guid.create();
    
    //setter

    public setFilesize(_size: number): void {
        this.filesize = _size;
    }
    public setFilename(_name: string): void {

        this.filename = _name;
    }
    public setPhotoWidth(_photoWidth: number): void {

        this.photoWidth = _photoWidth;
    }
    public setPhotoHeight(_photoHeight: number): void {

        this.photoHeight = _photoHeight;
    }

    //getter

    public getFilesize(): number {

        return this.filesize;
    }
    public getFilename(): string {

        return this.filename;
    }
    public getPhotoWidth(): number {

        return this.photoWidth;
    }
    public getPhotoHeight(): number {

        return this.photoHeight;
    }
    public getGUID(): Guid {

        return this.guid;
    }
}