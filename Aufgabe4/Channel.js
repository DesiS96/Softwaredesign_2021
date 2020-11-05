System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, Channel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            Channel = class Channel {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create();
                }
                //setter
                setChannelName(_name) {
                    this.channelName = _name;
                }
                setChannelPhoto(_photo) {
                    this.channelPhoto = _photo;
                }
                //getter
                getChannelName() {
                    return this.channelName;
                }
                getChannelPhoto() {
                    return this.channelPhoto;
                }
                getGuid() {
                    return this.guid;
                }
            };
            exports_1("Channel", Channel);
        }
    };
});
//# sourceMappingURL=Channel.js.map