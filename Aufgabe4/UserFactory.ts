/*import { RegisteredUser, Uploader, User, UserInterface } from "./User";
import { Photo } from "./Photo";
import { Playlist } from "./Playlist";
import { Video } from "./Video";*/

namespace Aufgabe4 {

    export class UserFactory {

        public getUser(_userType: string): UserInterface {
            if (_userType == null) {
                return null;
            }
            if (_userType == "User" || "USER" || "user") {
                    return new User();
            }
            else {
                if (_userType == "RegisteredUser" || "REGISTEREDUSER" || "Registered User" || "registereduser" || "registered user") {

                   /* let user: RegisteredUser = new RegisteredUser();
                    let photo: Photo = new Photo();
                    let birthdate: Date = new Date();
                    user.username = "";
                    user.userPhoto = photo;
                    user.birthdate = birthdate;
                    user.userplaylist = [];
                    user.userFavouriteVideos = [];*/
                    //return user;
                    return new RegisteredUser;
                }
                else {
                    if (_userType == "Uploader" || "UPLOADER" || "uploader") {
                        return new Uploader();
                    }
                }
                return null;
            }

            
            
        }


    }
}