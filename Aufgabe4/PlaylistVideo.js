System.register(["guid-typescript"], function (exports_1, context_1) {
    "use strict";
    var guid_typescript_1, PlaylistVideo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (guid_typescript_1_1) {
                guid_typescript_1 = guid_typescript_1_1;
            }
        ],
        execute: function () {
            PlaylistVideo = class PlaylistVideo {
                constructor() {
                    this.guid = guid_typescript_1.Guid.create();
                }
                //setter
                setPlaylistVideo(_video) {
                    this.playlistVideo = _video;
                }
                setRegisteredUser(_user) {
                    this.registeredUser = _user;
                }
                //getter
                getPlaylistVideo() {
                    return this.playlistVideo;
                }
                getRegisteredUser() {
                    return this.registeredUser;
                }
                getGUID() {
                    return this.guid;
                }
            };
            exports_1("PlaylistVideo", PlaylistVideo);
        }
    };
});
//# sourceMappingURL=PlaylistVideo.js.map