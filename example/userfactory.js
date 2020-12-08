System.register(["./user", "./registereduser"], function (exports_1, context_1) {
    "use strict";
    var user_1, registereduser_1, UserFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (registereduser_1_1) {
                registereduser_1 = registereduser_1_1;
            }
        ],
        execute: function () {
            UserFactory = class UserFactory {
                getUserType(userType) {
                    if (userType == "" || userType == null)
                        return new user_1.User();
                    if (userType == "RegisteredUser")
                        return new registereduser_1.RegisteredUser();
                }
            };
        }
    };
});
//# sourceMappingURL=userfactory.js.map