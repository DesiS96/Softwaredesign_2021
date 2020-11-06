"use strict";
//import { Guid } from "guid-typescript";
//import { Channel } from "./Channel";
//import { RegisteredUser } from "./User";
var Aufgabe4;
//import { Guid } from "guid-typescript";
//import { Channel } from "./Channel";
//import { RegisteredUser } from "./User";
(function (Aufgabe4) {
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
    Aufgabe4.Subscription = Subscription;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Subscription.js.map