namespace Aufgabe4_NullPattern {


    export class UploaderFactory {

        //Klasse, welche einen NullRegisteredUser herausgibt, wenn kein Photo mitgegeben wird

        public static getUser(_photo: Photo): AbstractUser {

            if (_photo == null) {

                return new NullUploader;
            }
            else {

                let uploader: Uploader = new Uploader;
                uploader.userPhoto = _photo;
                return uploader;
            }

        }
    }



}