namespace Aufgabe4_NullPattern {

    export class Subscription {

        private _subscriptionUser: RegisteredUser;
        private _subscriptionChannel: Channel;
        //private guid: string = Guid.create().toString();


        //setter
        set subscriptionUser(_user: RegisteredUser) {
            this._subscriptionUser = _user;
        }
        set subscriptionChannel(_channel: Channel) {
            this._subscriptionChannel = _channel;
        }

        //getter

        get subscriptionUser(): RegisteredUser {
            return this._subscriptionUser;
        }
        get subscriptionChannel(): Channel {
            return this._subscriptionChannel;
        }
        /*public getGuid(): string {
            return this.guid;
        }*/

    }
}