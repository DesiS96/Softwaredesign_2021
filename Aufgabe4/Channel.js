"use strict";
//import { Guid } from "guid-typescript";
//import { Photo } from "./Photo";
var Aufgabe4;
//import { Guid } from "guid-typescript";
//import { Photo } from "./Photo";
(function (Aufgabe4) {
    class Channel {
        //private guid: string = Guid.create().toString();
        //setter
        set channelName(_name) {
            this._channelName = _name;
        }
        set channelPhoto(_photo) {
            this._channelPhoto = _photo;
        }
        //getter
        get channelName() {
            return this._channelName;
        }
        get channelPhoto() {
            return this._channelPhoto;
        }
    }
    Aufgabe4.Channel = Channel;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Channel.js.map