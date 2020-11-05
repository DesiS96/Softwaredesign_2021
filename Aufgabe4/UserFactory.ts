import { RegisteredUser, Uploader, User, UserInterface } from "./User";
import { Photo } from "./Photo";
import { Playlist } from "./Playlist";
import { Video } from "./Video";
import { PlaylistVideo } from "./PlaylistVideo";
import { Channel } from "./Channel";

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
                let user: RegisteredUser;
                user.setUsername("default name");
                let defaultPhoto: Photo;
                user.setUserPhoto(defaultPhoto);
                let defaultDate: Date;
                user.setBirthdate(defaultDate);
                let defaultFavouriteVideos: Video[];
                user.setUserFavouriteVideos(defaultFavouriteVideos);
                let defaultPlaylist: Playlist[];
                user.setUserplaylist(defaultPlaylist);
                return user;
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