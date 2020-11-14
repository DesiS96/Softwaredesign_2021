namespace Aufgabe4_NullPattern {

    export class UserFactory {

        //Klasse, welche einen NullRegisteredUser herausgibt, wenn kein Photo mitgegeben wird

        public static getUser(_photo: Photo): AbstractUser {

            if (_photo == null) {

                return new NullRegisteredUser;
            }
            else {

                let reggie: RegisteredUser = new RegisteredUser;
                reggie.userPhoto = _photo;
                return reggie;
            }

        }
    }

}