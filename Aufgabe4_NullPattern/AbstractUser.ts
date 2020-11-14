namespace Aufgabe4_NullPattern {


    export abstract class AbstractUser {

        protected _userPhoto: Photo;

        abstract isNil(): boolean;
        abstract getPhoto(): Photo;

    }
}