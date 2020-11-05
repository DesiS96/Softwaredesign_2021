System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, Subscription;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            Subscription = class Subscription {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create().toString();
                }
                //setter
                setSubscriptionUser(_user) {
                    this.subscriptionUser = _user;
                }
                setSubscriptionChannel(_channel) {
                    this.subscriptionChannel = _channel;
                }
                //getter
                getSubscriptionUser() {
                    return this.subscriptionUser;
                }
                getSubscriptionChannel() {
                    return this.subscriptionChannel;
                }
                getGuid() {
                    return this.guid;
                }
            };
            exports_1("Subscription", Subscription);
        }
    };
});
//# sourceMappingURL=Subscription.js.map