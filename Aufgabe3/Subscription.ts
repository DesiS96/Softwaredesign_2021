namespace Aufgabe3 {

    export class Subscription {

        public subscriptionUser: RegisteredUser;
        public subscriptionChannel: Channel;

        constructor(_subscriptionUser: RegisteredUser, _subscriptionChannel: Channel) {

            this.subscriptionUser = _subscriptionUser;
            this.subscriptionChannel = _subscriptionChannel;

        }
    }
}