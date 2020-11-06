"use strict";
/*import { RegisteredUser, Uploader, User, UserInterface } from "./User";
import { Photo } from "./Photo";
import { Playlist } from "./Playlist";
import { Video } from "./Video";*/
var Aufgabe4;
/*import { RegisteredUser, Uploader, User, UserInterface } from "./User";
import { Photo } from "./Photo";
import { Playlist } from "./Playlist";
import { Video } from "./Video";*/
(function (Aufgabe4) {
    class UserFactory {
        getUser(_userType) {
            if (_userType == null) {
                return null;
            }
            if (_userType == "User" || "USER" || "user") {
                return new Aufgabe4.User();
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
                    return new Aufgabe4.RegisteredUser;
                }
                else {
                    if (_userType == "Uploader" || "UPLOADER" || "uploader") {
                        return new Aufgabe4.Uploader();
                    }
                }
                return null;
            }
        }
    }
    Aufgabe4.UserFactory = UserFactory;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=UserFactory.js.map