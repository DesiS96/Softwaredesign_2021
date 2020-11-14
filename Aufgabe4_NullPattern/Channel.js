"use strict";
var Aufgabe4_NullPattern;
(function (Aufgabe4_NullPattern) {
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
    Aufgabe4_NullPattern.Channel = Channel;
})(Aufgabe4_NullPattern || (Aufgabe4_NullPattern = {}));
//# sourceMappingURL=Channel.js.map