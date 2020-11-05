System.register(["./UserFactory"], function (exports_1, context_1) {
    "use strict";
    var UserFactory_1, factory, martha, ivan;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (UserFactory_1_1) {
                UserFactory_1 = UserFactory_1_1;
            }
        ],
        execute: function () {
            factory = new UserFactory_1.UserFactory();
            martha = factory.getUser("User");
            martha.playVideo();
            ivan.setUsername("Ivan");
            console.log(ivan.getUsername);
        }
    };
});
//# sourceMappingURL=main.js.map