import { RegisteredUser, Uploader, User, UserInterface } from "./User";

export class UserFactory {

    public getUser(_userType: string): UserInterface {
        if (_userType == null) {
            return null;
        }
        if (_userType == "User" || "USER" || "user") {
                return new User();
        }
        else {
            if (_userType == "RegisteredUser" || "REGISTEREDUSER" || "Registered User" || "registereduser" || "registered user"){
                return new RegisteredUser();
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