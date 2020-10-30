namespace Aufgabe3 {

    export class Subscription {

        public subscriptionUser: RegisteredUser;
        public subscriptionChannel: Channel;
        public uuid: number;

        constructor(_subscriptionUser: RegisteredUser, _subscriptionChannel: Channel, _uuid: number) {

            this.subscriptionUser = _subscriptionUser;
            this.subscriptionChannel = _subscriptionChannel;
            this.uuid = _uuid;

        }
    }
}