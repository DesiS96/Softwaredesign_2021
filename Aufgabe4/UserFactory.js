System.register(["./User"], function (exports_1, context_1) {
    "use strict";
    var User_1, UserFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (User_1_1) {
                User_1 = User_1_1;
            }
        ],
        execute: function () {
            UserFactory = class UserFactory {
                getUser(_userType) {
                    if (_userType == null) {
                        return null;
                    }
                    if (_userType == "User" || "USER" || "user") {
                        return new User_1.User();
                    }
                    else {
                        if (_userType == "RegisteredUser" || "REGISTEREDUSER" || "Registered User" || "registereduser" || "registered user") {
                            let user;
                            user.setUsername("default name");
                            let defaultPhoto;
                            user.setUserPhoto(defaultPhoto);
                            let defaultDate;
                            user.setBirthdate(defaultDate);
                            let defaultFavouriteVideos;
                            user.setUserFavouriteVideos(defaultFavouriteVideos);
                            let defaultPlaylist;
                            user.setUserplaylist(defaultPlaylist);
                            return user;
                        }
                        else {
                            if (_userType == "Uploader" || "UPLOADER" || "uploader") {
                                return new User_1.Uploader();
                            }
                        }
                        return null;
                    }
                }
            };
            exports_1("UserFactory", UserFactory);
        }
    };
});
//# sourceMappingURL=UserFactory.js.map