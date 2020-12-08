System.register([], function (exports_1, context_1) {
    "use strict";
    var RegisteredUser;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            RegisteredUser = class RegisteredUser {
                constructor() {
                }
                playVideo() {
                    console.log("A");
                }
            };
            exports_1("RegisteredUser", RegisteredUser);
        }
    };
});
//# sourceMappingURL=registereduser.js.map