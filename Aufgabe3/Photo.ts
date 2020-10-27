namespace Aufgabe3 {

    export class Photo {

        public filesize: number;
        public filename: string;
        public photoWidth: number;
        public photoHeight: number;

        constructor(_filesize: number, _filename: string, _photoWidth: number, _photoHeight: number) {

            this.filesize = _filesize;
            this.filename = _filename;
            this.photoWidth = _photoWidth;
            this.photoHeight = _photoHeight;

        }
    }
}