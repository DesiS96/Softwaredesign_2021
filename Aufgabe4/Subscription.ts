import { Guid } from "guid-typescript";
import { Channel } from "./Channel";
import { RegisteredUser } from "./User";


export class Subscription {

    private subscriptionUser: RegisteredUser;
    private subscriptionChannel: Channel;
    private guid: Guid = Guid.create();


    //setter
    public setSubscriptionUser(_user: RegisteredUser): void {
        this.subscriptionUser = _user;
    }
    public setSubscriptionChannel(_channel: Channel): void {
        this.subscriptionChannel = _channel;
    }

    //getter

    public getSubscriptionUser(): RegisteredUser {
        return this.subscriptionUser;
    }
    public getSubscriptionChannel(): Channel {
        return this.subscriptionChannel;
    }
    public getGuid(): Guid {
        return this.guid;
    }

}