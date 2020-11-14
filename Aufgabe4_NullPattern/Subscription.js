"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
    class Subscription {
        //private guid: string = Guid.create().toString();
        //setter
        set subscriptionUser(_user) {
            this._subscriptionUser = _user;
        }
        set subscriptionChannel(_channel) {
            this._subscriptionChannel = _channel;
        }
        //getter
        get subscriptionUser() {
            return this._subscriptionUser;
        }
        get subscriptionChannel() {
            return this._subscriptionChannel;
        }
    }
    Aufgabe4_NullPattern.Subscription = Subscription;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=Subscription.js.map